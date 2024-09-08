const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {type: String, required: true, unique:true},
    memberNumber:{type: String, required: true, unique:true},
    email:{type: String, required: true, unique:true},
    password:{type:String, required: true, unique:true},
    cart:[{
        firstName:{type: String},
        lastName:{type: String},
        rollNumber:{type: String},
        degree:{type: String},
        department:{type: String},
        domain:{type:String},
        modeOfEvent:{type: String},
        eventWorkshop:{type:String},
        sponcership:{type:String},
        rsvpCount:{type: String},
        eventStatus:{types:String},
    }]
});

module.exports = mongoose.model('User', userSchema);
