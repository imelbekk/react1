import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className='text'>Home</h1>
        <Link to='/login' className='btn btn-success'>Login</Link>
        <Link to='/box' className='btn btn-success'>Box</Link>
      </div>
    )
  }
}
