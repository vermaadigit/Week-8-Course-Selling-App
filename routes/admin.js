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

adminRouter.get('/course/bulk', function(req, res) {
    res.json({
        message : 'Admin Course Endpoint'
    })
})

adminRouter.put('/course', function(req, res) {
    res.json({
        message : 'Admin Course Endpoint'
    })
})

adminRouter.post('/course', function(req, res) {
    res.json({
        message : 'Admin Course Endpoint'
    })
})

module.exports = {
    adminRouter : adminRouter
}