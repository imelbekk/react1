import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Auth extends Component {
    state={
        username:"",
        password: ""
    }
    Username=(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    Password=(event)=>{
        this.setState({
            password: event.target.value
        })
    }
    success=()=>{
        const {username,password} = this.state
        if(username === 'admin' && password === 'admin123'){
            alert('Success')
        }else{
            alert('Error')
        }
    }
  render() {
    return (
      <div className='container'>
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <div className="card-header">
                        <h1 className='text-center'>Login</h1>
                    </div>
                    <div className="card-body">
                        <input type="text" placeholder='Username' className='form-control my-2' onChange={this.Username}/>
                        <input type="text" placeholder='Password' className='form-control' onChange={this.Password}/>
                    </div>
                    <div className="card-footer text-center d-flex justify-content-center gap-5">
                    <button className='btn btn-success' onClick={this.success}>Success</button>
                    <Link to='/login/cars' className='btn btn-info'>Cars Page</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
