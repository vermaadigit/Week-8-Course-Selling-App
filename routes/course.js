const { Router } = require('express');  
const courseRouter = Router();

    courseRouter.get('/purchase', function(req, res) {
        res.json({
            message : 'signup Endpoint'
        })
    })
    
    courseRouter.get('/preview', function(req, res) {
        res.json({
            message : 'course preview Endpoint'
        })
    })


module.exports = {
    courseRouter : courseRouter
}