const { timeStamp } = require('console')
const mongoose = require ('mongoose')
const url = process.env.URL
console.log(url)
mongoose.connect(url)

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