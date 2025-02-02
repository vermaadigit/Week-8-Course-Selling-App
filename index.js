require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin')
 
const app = express();
app.use(express.json());

app.use('/api/v1/user', userRouter)
app.use('/api/v1/course', courseRouter)
app.use('/api/v1/admin', adminRouter)


function main() {
    mongoose.connect(process.env.MONGODB_URL);
    app.listen(3000);
    console.log("Server started on port 3000");
}

main();