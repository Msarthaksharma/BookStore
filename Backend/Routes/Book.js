const express = require ('express')
const Book = require ('../Model/db')

const router = express.Router()

//insert multiple data at once
// const data = [
//     { title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'Classic', publishYear: 1960 },
//     { title: '1984', author: 'George Orwell', description: 'Dystopian', publishYear: 1949 },
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'Tragic', publishYear: 1925 },
//     { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', description: 'Epic', publishYear: 1967 },
//     { title: 'Moby Dick', author: 'Herman Melville', description: 'Adventure', publishYear: 1851 },
//     { title: 'War and Peace', author: 'Leo Tolstoy', description: 'Historical', publishYear: 1869 },
//     { title: 'The Catcher in the Rye', author: 'J.D. Salinger', description: 'Coming-of-age', publishYear: 1951 },
//     { title: 'Pride and Prejudice', author: 'Jane Austen', description: 'Romance', publishYear: 1813 },
//     { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', description: 'Fantasy', publishYear: 1954 },
//     { title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', description: 'Philosophical', publishYear: 1880 },
//     { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', description: 'Psychological', publishYear: 1866 },
//     { title: 'The Odyssey', author: 'Homer', description: 'Epic', publishYear: -800 },
//     { title: 'Ulysses', author: 'James Joyce', description: 'Stream of consciousness', publishYear: 1922 },
//     { title: 'The Divine Comedy', author: 'Dante Alighieri', description: 'Allegory', publishYear: 1320 },
//     { title: 'Brave New World', author: 'Aldous Huxley', description: 'Dystopian', publishYear: 1932 },
//     { title: 'Jane Eyre', author: 'Charlotte Brontë', description: 'Gothic', publishYear: 1847 },
//     { title: 'Wuthering Heights', author: 'Emily Brontë', description: 'Tragic', publishYear: 1847 },
//     { title: 'The Iliad', author: 'Homer', description: 'Epic', publishYear: -750 },
//     { title: 'Anna Karenina', author: 'Leo Tolstoy', description: 'Tragic', publishYear: 1877 },
//     { title: 'The Adventures of Huckleberry Finn', author: 'Mark Twain', description: 'Adventure', publishYear: 1884 },
// ];



router.get('/',async (req,res)=>{
    const books = await Book.find({})
    if(books){
    res.status(200).json({
        books
    })
    }
   
})
router.post('/create',async (req,res)=>{
    const title = req.body.title
    const author = req.body.author
    const description = req.body.description
    const publishYear = req.body.publishYear
    const book = await Book.create({
        title,
        author,
        description,
        publishYear
    })
    if(book){
        return res.status(200).json({
            msg:"Book Created Successfully"
        })
    }
})

// router.post('/insert',async (req,res)=>{
//     const book = Book.insertMany(data)
//     if(book){
//         return res.status(200).json({
//             msg:"Book inserted Successfully"
//         })
//     }
// })

router.get('/details/:id',async (req,res)=>{
    const {id} = req.params
    console.log(id)
    const book = await Book.findById(id)
    console.log(book)
    if(book){
        res.status(200).json({
            book
        })
    }
})

router.put('/edit/:id',async (req,res)=>{
    const {id} = req.params
    const book = await Book.findByIdAndUpdate(id,req.body)
    if(book){
        return res.status(200).json({
            msg:"Book Updated Successfully"
        })
    }
})
router.delete('/delete/:id',async(req,res)=>{
    try{
        const {id} = req.params
        console.log(id)
        const remove = await Book.findByIdAndDelete(id)
        if(remove){
           return res.status(200).json({
                msg:"Deleted successfully"
            })
        }else{
            return res.status(404).send({msg:"invalid info"})
        }

    }catch(e){
        console.log(e)
       return res.status(500).send({msg: e.message})
    }
   
})

module.exports = router