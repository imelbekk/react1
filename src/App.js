import React, { Component } from 'react'
import FirstComponent from './Components/FirstComponent'
import SecondComponent from './Components/SecondComponent'
import ThirdComponent from './Components/ThirdComponent'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'

export default class App extends Component {
    state={
        pages:[
            {name: 'Option 1', link: '/'},
            {name: 'Option 2', link: '/second'},
            {name: 'Option 3', link: '/third'},
        ]
    }
  render() {
    const {pages} = this.state
    return (
      <div>

          <div className='d-flex gap-5'>
        <ul className='d-flex flex-column gap-2'>
            {
                pages.map((item,index)=>{
                    return <li className='btn btn-info'>
                    <Link to={item.link} className='link'>{item.name}</Link>
                    </li>
                })
            }
        </ul>
        <Routes>
            <Route path='/' element={<FirstComponent/>}/>
            <Route path='/second' element={<SecondComponent/>}/>
            <Route path='/third' element={<ThirdComponent/>}/>
        </Routes>
          </div> 

          <Link to='/login' className='btn btn-info'>Log In</Link>

          <Routes>
          <Route path='/login' element={<Login/>}/>
          </Routes>


      </div>    
    )
  }
}

