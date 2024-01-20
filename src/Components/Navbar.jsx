import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [links, setLinks] = useState([
        {id: 1, path: '', title: 'Home'},
        {id: 1, path: '/blog', title: 'Blog'},
        {id: 1, path: '/works', title: 'Works'},
    ])
  return (
    <div>
        <ul className='flex'>
            <li classname='text-white'>Home</li>
            <li>Blog</li>
        </ul>
    </div>
  )
}
