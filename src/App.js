import React from 'react'
import Auth from './Componenets/Auth'
import Admin from './Componenets/Admin'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>

      <Routes>
        <Route path='' element={<Auth/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </div>
  )
}
