const {Schema, model} = require('mongoose')

const Hype = new Schema({
    title: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    url:{
        type:String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = model('hype', Hype)