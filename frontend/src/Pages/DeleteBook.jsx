import { useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner'


const DeleteBook = () => {

  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()

  const handleDeleteBook = () => {
    setLoading(true)
    axios
    .delete(`http://localhost:3800/book/delete/${id}`)
    .then(()=>{
      setLoading(false)
      navigate('/')
    }).catch((e)=>{
      console.log(e)
      setLoading(false)
    })
}
  return (
    <div className="p-4">
      <BackButton/>
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading? <Spinner/> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3>Are you sure you want to delete it?</h3>
      </div>
      <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>Yes, Delete it</button>
    </div>
  )
}

export default DeleteBook
