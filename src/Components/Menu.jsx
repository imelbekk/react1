import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='d-flex flex-column gap-3 w-25 my-5 mx-2'>
        <Link to='/posts' className='btn btn-info w-75'>Posts</Link>
        <Link to='/comments' className='btn btn-info w-75'>Comments</Link>
        <Link to='/albums' className='btn btn-info w-75'>Albums</Link>
        <Link to='/photos' className='btn btn-info w-75'>Photos</Link>
        <Link to='/todos' className='btn btn-info w-75'>Todos</Link>
        <Link to='/users' className='btn btn-info w-75'>Users</Link>

        <Link to='/exam' className='btn btn-danger w-75'>Exam</Link>
    </div>
  )
}
