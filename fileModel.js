const mongoose = require('mongoose')

const schema = mongoose.Schema;

const image = new schema({
    title : {type:String},
    range : {type:String},
    speed : {type:Number},
    acceleration : {type:String},
    standardprice : {type:String},
    longprice : {type:String},
    perprice : {type:String},
    purprice : {type:String},
    articalImage : {type:String}
})

const artical = mongoose.model('Product',image)


module.exports = artical