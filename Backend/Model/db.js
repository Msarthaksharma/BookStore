const { timeStamp } = require('console')
const mongoose = require ('mongoose')

mongoose.connect('mongodb+srv://user:user123@cluster0.y90mt1k.mongodb.net/BookStoreApp')

const BookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    publishYear:{
        type:Number,
    },
    },{
    timeStamp:true
})

const Book = mongoose.model('Book',BookSchema)
module.exports = Book