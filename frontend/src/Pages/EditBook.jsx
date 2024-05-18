import { useState, useEffect } from "react"
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner'

const EditBook = () => {
  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  const [publishYear,setPublishYear] = useState('')
  const [description,setDescription] = useState('')
  const [loading,setLoading] = useState(false)
  
  const navigate = useNavigate()
  const {id} = useParams()
  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:3800/book/details/${id}`)
    .then((response)=>{
      console.log(response.data.book)
      setLoading(false)
      setTitle(response.data.book.title)
      setAuthor(response.data.book.author)
      setPublishYear(response.data.book.publishYear)
      setDescription(response.data.book.description)
    }).catch((e)=>{
      console.log(e)
      setLoading(false)
    })
  },[])
  const handleEditBook = () => {
      const data = {
        title,
        author,
        description,
        publishYear
      }
      console.log(data)
      setLoading(true)
      axios
      .put(`http://localhost:3800/book/edit/${id}`,data)
      .then(()=>{
        setLoading(false)
        navigate('/')
      }).catch((e)=>{
        console.log(e)
        setLoading(false)
        alert('error')
      })
  }
  return (
    <div className="p-4">
      <BackButton/>
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading? <Spinner/> : ''}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input type='text' value={title} onChange = {(e) => setTitle(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full"/>
        </div> 
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input type='text' value={author} onChange = {(e) => setAuthor(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full"/>
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Description</label>
          <input type='text' value={description} onChange = {(e) => setDescription(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full"/>
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input type='number' value={publishYear} onChange = {(e) => setPublishYear(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full"/>
        </div> 
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
            Save
        </button>
      </div>
    </div>
  )
}

export default EditBook