import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import CarsTable from './Components/CarsTable'
import OpenCar from './Components/OpenCar'
import Product from './Components/Product'
import Cabinet from './Components/Cabinet'
import Settings from './Components/Settings'
import Dashboard from './Components/Dashboard'
import Balance from './Components/Balance'
import Box from './Components/Box'

export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/login/cars' element={<CarsTable/>}/>
            <Route path='/login/cars/opencar:id' element={<OpenCar/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/cabinet' element={<Cabinet/>}/>
            <Route path='/cabinet/settings' element={<Settings/>}/>
            <Route path='/cabinet/dashboard' element={<Dashboard/>}/>
            <Route path='/cabinet/dashboard/balance' element={<Balance/>}/>
            <Route path='/box' element={<Box/>}/>
        </Routes>

      </div>    
    )
  }
}

