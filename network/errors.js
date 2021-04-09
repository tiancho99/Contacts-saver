const response = require('./response')

function errors(err, req, res, next) {
   console.error(err)
   
   response.error(req, res, err)

}

module.exports = errors