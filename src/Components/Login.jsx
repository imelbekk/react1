import React, { Component } from 'react'
import CarsTable from './CarsTable'
import './style.css'
import { Route, Routes, Link } from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
      <div className="container">

        <Routes>
        <Route path='/CarsTable' element={<CarsTable/>}/>
        </Routes>

         <form>
        <div className='mb-3'>
          <label for='email' className='form-label'>Email Adress</label>
          <input type="email" className='form-control' id='email' />
        </div>
        <div className='mb-3'>
          <label for='password' className='form-label'>Password</label>
          <input type="password" className='form-control' id='password'/>
        </div>
        </form>
    
        <Link to='/CarsTable' className='btn btn-primary mt-3'>Cars Table</Link>
      </div>
    )
  }
}
