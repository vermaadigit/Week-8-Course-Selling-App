const { Router } = require('express');
const adminRouter = Router();
const { adminModel } = require('../db');

const jwt = require('jsonwebtoken');
const JWT_ADMIN_PASSWORD = "halwahaikya";

adminRouter.post('/signup',async function(req, res) {
    const { email, password, firstName, lastName } = req.body;

    await adminModel.create({
        email,
        password,
        firstName,
        lastName
    })

    res.json({
        message : 'Admin signup Endpoint'
    })
})

adminRouter.post('/signin',async function(req, res) {
    const { email, password } = req.body;

    const admin = await adminModel.findOne({
        email,
        password
    })

    if (admin)
    {
        const token = jwt.sign({
            id : admin._id
        }, JWT_ADMIN_PASSWORD);

        res.json({
            token : token,
        })
    } else {
        res.status(403).json({
            message : 'Incorrect Credentials'
        })
    }
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