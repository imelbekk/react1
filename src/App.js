import React from 'react'
import Menu from './Components/Menu'
import { Route, Routes } from 'react-router-dom'
import Products from './Components/Products'
import './Components/layout/layout.scss'
import ProductsDetails from './Components/ProductsDetails'
import Posts from './Components/Posts'
import Albums from './Components/Albums'
import Comments from './Components/Comments'
import Todos from './Components/Todos'
import Users from './Components/Users'
import Photos from './Components/Photos'

export default function App() {
  return (
    <div className="page">

      <div className="sidebar">
        <Menu/>
      </div>

      <div className="products">
      <Routes>
        <Route path='/products' element={<Products/>} />
        <Route path='/posts' element={<Posts/>} />
        <Route path='/albums' element={<Albums/>} />
        <Route path='/comments' element={<Comments/>} />
        <Route path='/todos' element={<Todos/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/photos' element={<Photos/>} />
        <Route path='product_details/:id' element={<ProductsDetails/>} />
      </Routes>
      </div>
      
    </div>
  )
}


