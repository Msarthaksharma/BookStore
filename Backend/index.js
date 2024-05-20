require('dotenv').config();
const express = require ('express')
const Book = require ('./Routes/Book')
const cors =  require ('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.use('/book',Book)
console.log(process.env.PORT)

app.listen(process.env.PORT,()=>{
    console.log(`Server running on ${process.env.PORT}`)
})