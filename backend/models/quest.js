const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    nickname:{type:String},
    comment:{type:String}
})

const questionSchema = new mongoose.Schema({
    nickname:{type:String,required:true},
    title:{type:String,required:true},
    question:{type:String,required:true},
    comments:[commentSchema]
});


const Question = mongoose.model('question',questionSchema);


module.exports = {Question}