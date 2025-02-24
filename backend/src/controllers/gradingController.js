const mongoose = require('mongoose');
const gradingModel = require('../db/models/gradingModel');
const responses = require('../utils/responses');


const gradingController = {
    newGrading : async (req, res) => {
        const { title, description, date, groupId, subjectId, students } = req.body;
        
        try {
            const grading = await gradingModel.create({ title, description, date, groupId, subjectId, students });
            res.status(responses.common.success.status).json(responses.common.payload(grading));
        } catch (error) {
            if (error.code === 11000) {
                return res.status(responses.common.conflict.status).json(responses.common.conflict);
            }
            res.status(responses.common.badRequest.status).json(responses.common.badRequest);
        }
        
    }
}

module.exports = gradingController;