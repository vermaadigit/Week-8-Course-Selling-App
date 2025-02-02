const { Router } = require('express');
const adminRouter = Router();
const { adminModel } = require('../db');

const jwt = require('jsonwebtoken');
const { JWT_ADMIN_PASSWORD } = require('../config');
const { adminMiddleware } = require('../middleware/admin');


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

adminRouter.post('/course', adminMiddleware, async function(req, res) {
    const adminId = req.userId;

    const {title, description, price, imageUrl} = req.body;

    const course = await adminModel.create({
        title,
        description,
        price,
        imageUrl,
        creatorID : adminId
    })


    res.json({
        message : 'Course Created',
        courseId : course._id
    })
})

adminRouter.put('/', function(req, res) {
    res.json({
        message : 'Admin Course Endpoint'
    })
})

adminRouter.get('/bulk', function(req, res) {
    res.json({
        message : 'Admin Course Endpoint'
    })
})


module.exports = {
    adminRouter : adminRouter
}