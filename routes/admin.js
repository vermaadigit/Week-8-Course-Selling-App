const { Router } = require('express');
const adminRouter = Router();
const { adminModel } = require('../db');

adminRouter.post('/signup', function(req, res) {
    res.json({
        message : 'Admin signup Endpoint'
    })
})

adminRouter.post('/signin', function(req, res) {
    res.json({
        message : 'Admin signin Endpoint'
    })
})

adminRouter.get('/bulk', function(req, res) {
    res.json({
        message : 'Admin Course Endpoint'
    })
})

adminRouter.put('/', function(req, res) {
    res.json({
        message : 'Admin Course Endpoint'
    })
})

adminRouter.post('/', function(req, res) {
    res.json({
        message : 'Admin Course Endpoint'
    })
})

module.exports = {
    adminRouter : adminRouter
}