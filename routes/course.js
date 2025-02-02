const { Router } = require('express');  
const courseRouter = Router();

    courseRouter.get('/course/purchase', function(req, res) {
        res.json({
            message : 'signup Endpoint'
        })
    })
    
    courseRouter.get('/courses', function(req, res) {
        res.json({
            message : 'signup Endpoint'
        })
    })


module.exports = {
    courseRouter : courseRouter
}