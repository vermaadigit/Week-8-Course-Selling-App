const { Router } = require('express');
const userRouter = Router();

    userRouter.post('/signup', function(req, res) {
        res.json({
            message : 'signup Endpoint'
        })
    })
    
    userRouter.post('/signin', function(req, res) {
        res.json({
            message : 'signup Endpoint'
        })
    })
    
    userRouter.get('/purchases', function(req, res) {
        res.json({
            message : 'signup Endpoint'
        })
    })


module.exports = {
    userRouter : userRouter
}