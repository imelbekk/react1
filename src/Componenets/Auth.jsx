import React, { useState } from 'react'
import axiosCleint from '../plugins/Axios';
import ModalApp from './ModalApp';

export default function Auth(){
    const [roles, setRoles] = useState([])
    const [active, setActive] = useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
        let username = e.target[0].value
        let password = e.target[1].value
        console.log(username, password);
        axiosCleint.post('/admins/login',{
            username: username,
            password: password
        }).then((res)=>{
            console.log(res)
            localStorage.getItem('token', res?.data?.token)
            setRoles(res?.data?.roles)
            if(res.status === 202){
                setActive(true)
            }
            console.log(roles);
        }).catch(error=>{
            console.log(error)
        })
    }
    return(
        <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3">
            <div className="card">
                <div className='card-header'>
                    <h1 className='text-center'>Auth</h1>
                </div>
                <div className="card-body">
                   <form id='form' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Username...' className='form-control my-2'/>
                        <input type="password" placeholder='Password...' className='form-control my-2'/>
                   </form>
                </div>
                <div className="card-footer text-center">
                    <button className='btn btn-info' form='form'>Login</button>
                </div>
            </div>
          </div>
        </div>
        <ModalApp open={active} toggle={()=>setActive(false)}  roles={roles}/>
      </div>
    )
}