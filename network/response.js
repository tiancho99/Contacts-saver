const { message } = require("statuses")

function success(req, res, message, status) {
    let statusCode = status || 200 
    let statusMessage = message || 'Ok'
    res.status(statusCode).send({
        error: false,
        body: statusMessage,
    })
}

function error(req, res, error, status) {
    let statusCode = status || 500
    let statusMessage = message || "[error] Internal server error"
    res.status(statusCode).send({
        error: true,
        body: statusMessage,
    })
}

module.exports = {
    success,
    error,
}