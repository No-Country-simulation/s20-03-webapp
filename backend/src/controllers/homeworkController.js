const homeworkModel = require("../db/models/homeworkModel");
const responses = require("../utils/responses");

const homeworkController = {
  getAll: async (req, res) => {
    try {
        const homeworks = await homeworkModel.find()
        res.status(responses.common.success.status).json(responses.common.payload(homeworks));

        if (!homeworks) {
            return res.status(responses.common.noContent.status).json(responses.common.noContent);
        }
        res.status(responses.common.success.status).json(responses.common.payload(homeworks));
    } catch (error) {
        if (error.code === 11000) {
            return res.status(responses.common.conflict.status).json(responses.common.conflict);
        }
        res.status(responses.common.badRequest.status).json(responses.common.badRequest);
    }
  },
  newHomework: async (req, res) => {
    const { title, groupId, subjectId, endDate, description } = req.body;
    try {
      const homework = await homeworkModel.create({
        title,
        groupId,
        subjectId,
        endDate,
        description,
      });
      res
        .status(responses.common.success.status)
        .json(responses.common.payload(homework));
    } catch (error) {
      if (error === 11000) {
        return res
          .status(responses.common.conflict.status)
          .json(responses.common.conflict);
      }
      res
        .status(responses.common.badRequest.status)
        .json(responses.common.badRequest);
    }
  },
};

module.exports = homeworkController;