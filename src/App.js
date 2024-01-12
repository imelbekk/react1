import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Posts from './Components/Posts'
import Comments from './Components/Comments'
import Albums from './Components/Albums'
import Photos from './Components/Photos'
import Todos from './Components/Todos'
import Users from './Components/Users'
import Menu from './Components/Menu'
import Exam from './Components/Exam'

export default function App() {
  return (
    <div className='d-flex'>

        <Menu/>

        <Routes>
            <Route path='/posts' element={<Posts/>} />
            <Route path='/comments' element={<Comments/>} />
            <Route path='/albums' element={<Albums/>} />
            <Route path='/photos' element={<Photos/>} />
            <Route path='/todos' element={<Todos/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/exam' element={<Exam/>} />
        </Routes>

    </div>
  )
}



