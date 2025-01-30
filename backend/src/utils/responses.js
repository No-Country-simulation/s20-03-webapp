// API responses
const responses = {
    common: {
        success: { status: 200, message: 'Success' },
        payload: (payload) => {
            return {
                status: 200,
                message: 'Success',
                payload
            };
        },
        conflict: { status: 409, message: 'Conflict' },
        noContent: { status: 204, message: 'No Content' },
        notFound: { status: 404, message: 'Not Found' },
        badRequest: { status: 400, message: 'Bad Request' },
        internalServerError: { status: 500, message: 'Internal Server Error' },
        notImplemented: { status: 501, message: 'Not Implemented' },
    },
    auth: {
        unauthorized: { status: 401, message: 'Unauthorized' },
        forbidden: { status: 403, message: 'Forbidden' },
    },
};

// Export the responses object
module.exports = responses;
