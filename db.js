const mongoose = require('mongoose');
console.log("Connected to server")
mongoose.connect("mongodb+srv://aditya:aditya112233@coursesellingapp.lq0xy.mongodb.net/coursera-app");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema ({
    email : {type : String, unique : true},
    password : String,
    firstName : String,
    lastName : String
});

const adminSchema = new Schema ({
    email : {type : String, unique : true},
    password : String,
    firstName : String,
    lastName : String
});

const courseSchema = new Schema ({
    title : String,
    description : String,
    price : Number,
    imageUrl : String,
    creatorID : ObjectId
});

const purchaseSchema = new Schema ({
    userID : ObjectId,
    courseID : ObjectId,
});

const userModel = mongoose.model('user', userSchema)
const adminModel = mongoose.model('admin', adminSchema)
const courseModel = mongoose.model('course', courseSchema)
const purchaseModel = mongoose.model('purchase', purchaseSchema)

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}