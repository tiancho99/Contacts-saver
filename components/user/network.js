const express = require('express')

const response = require('../../network/response')
const controller = require('./index')

const router = express.Router()

router.get('/', list)
router.get('/:id', get)
router.post('/', insert)
router.put('/:id', update)
router.delete('/:id', remove)

async function get(req, res, next) {
    controller.get(req.params.id)
        .then(data => {
            response.success(req, res, data)
        })
        .catch(next)
}

function list(req, res, next) {
    controller.list()
        .then(data => {
            response.success(req, res, data)
        })
        .catch(next)   
}

function insert(req, res, next) {
    controller.insert(req.body)
        .then(data => {
            response.success(req, res, data)
        })
        .catch(next) 
}

function update(req, res, next) {
    controller.update(req.params.id, req.body)
        .then(data => {
            response.success(req, res, data)
        })
        .catch(next)
}

function remove(req, res, next) {
    controller.remove(req.params.id)
        .then(data => {
            response.success(req, res, data)
        })
        .catch(next)
}
module.exports = router