const { Router } = require('express');
const adminRouter = Router();
const { adminModel, courseModel } = require('../db');

const jwt = require('jsonwebtoken');
const { JWT_ADMIN_PASSWORD } = require('../config');
const { adminMiddleware } = require('../middleware/admin');


adminRouter.post('/signup', async function(req, res) {
    const { email, password, firstName, lastName } = req.body;

    await adminModel.create({
        email,
        password,
        firstName,
        lastName
    })

    res.json({
        message : 'Signup Succeeded'
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
        title : title,
        description : description,
        price : price,
        imageUrl : imageUrl,
        creatorID : adminId
    })


    res.json({
        message : 'Course Created',
        courseId : course._id
    })
})

adminRouter.put('/course', adminMiddleware, async function(req, res) {
    const adminId = req.userId;

    const {title, description, price, imageUrl, courseId } = req.body;

    const course = await courseModel.updateOne({
        _id : courseId,
        creatorID : adminId
    },{
        title : title,
        description : description,
        price : price,
        imageUrl : imageUrl
    })


    res.json({
        message : 'Course Updated',
        courseId : course._id
    })
})

adminRouter.get('/course/bulk', adminMiddleware, async function(req, res) {

    const adminId = req.userId;


    const courses = await courseModel.find({
        creatorID : adminId
    });

    res.json({
        message : 'Course Updated',
        courses
    })
})


module.exports = {
    adminRouter : adminRouter
}