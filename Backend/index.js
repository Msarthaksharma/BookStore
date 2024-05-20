require('dotenv').config();
const express = require ('express')
const Book = require ('./src/Book')
const cors =  require ('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.use('/book',Book)
console.log(process.env.PORT || 5500)

app.listen(process.env.PORT || 5500,()=>{
    console.log(`Server running on ${process.env.PORT}`)
})