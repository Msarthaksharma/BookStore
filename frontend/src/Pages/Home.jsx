import axios from "axios"
import Spinner from "../Components/Spinner"
import { Link } from "react-router-dom"
import { MdOutlineAddBox } from "react-icons/md"
import { useEffect, useState } from "react"
import BooksCard from "../Components/Home/BooksCard"
import BooksTable from "../Components/Home/BooksTable"

const Home = () => {
  const [books,setBooks] = useState ([])
  const [loading,setLoading] = useState (false)
  const [showtype,setShowType] = useState('table')

  useEffect(() =>{
    axios.get('http://localhost:3800/book').then((response)=>{
    setBooks(response.data.books)
    setLoading(false)
    }).catch((e) =>{
      console.log(e)
      setLoading(false)
  })
    
  },[])

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={()=> setShowType('table')}>Table</button>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={()=> setShowType('card')}>Card</button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className="text-sky-800 text-4xl"/>
        </Link>
      </div>
      {loading ? (<Spinner/>) : showtype=== 'table' ? (<BooksTable books={books}/>) : (<BooksCard books={books}/>) }
    </div>
  )
}

export default Home