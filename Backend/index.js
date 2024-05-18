const express = require ('express')
const Book = require ('./Routes/Book')
const cors =  require ('cors')
const app = express()

const PORT = 3800
app.use(express.json())
app.use(cors())

app.use('/book',Book)


app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})