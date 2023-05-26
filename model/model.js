const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const info = new Schema({
    fname:{
        type: String,
        required: false
    },
    lname:{
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    country:{
        type: String,
        required: false
    },
    ig:{
        type: String,
        required: false
    },
    igUname:{
        type: String,
        required: false
    },
    igFollower:{
        type: String,
        required: false
    },
    yt:{
        type: String,
        required: false
    },
    ytUname:{
        type: String,
        required: false
    },
    ytSub:{
        type: String,
        required: false
    },
    tik:{
        type: String,
        required: false
    },
    tikUname:{
        type: String,
        required: false
    },
    tikFollower:{
        type: String,
        required: false
    },
    snap:{
        type: String,
        required: false
    },
    snapUname:{
        type: String,
        required: false
    },
    snapFollower:{
        type: String,
        required: false
    },
    women:{
        type: String,
        required: false
    },
    curve:{
        type: String,
        required: false
    },
    mens:{
        type: String,
        required: false
    },
    kids:{
        type: String,
        required: false
    },
    beauty:{
        type: String,
        required: false
    },
    about:{
        type: String,
        required: false
    },
}, { timestamps: true });


const userInfo = mongoose.model('userInfo', info);

module.exports = userInfo;