const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

const UserContact = new mongoose.model('UserContact',contactSchema);

module.exports = UserContact;
