import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ModalForm from '../Components/ModalForm'

export default function CRUD(){
    const [users, setUsers] = useState([])
    const [count, setCount] = useState(0)
    const [open, setOpen] = useState(false)
    useEffect(()=>{
        axios.get('http://localhost:8000/users').then(res=>{
            setUsers(res.data) 
        })
    })
    const addUsers=(e)=>{
        e.preventDefault()
        let name = e.target[0].value
        let last_name = e.target[1].value
        let phone = e.target[2].value
        let payload = {
            name,
            last_name,
            phone
        }
        console.log(name,last_name,phone);
        axios.post('http://localhost:8000/users', {...payload}).then(res=>{
            console.log(res);
        })
    }
    const deleteUser=(id)=>{
        axios.delete(`http://localhost:8000/users/${id}`)
    }
    return (
        <div className=''>
            <button className='btn btn-info my-3' onClick={()=>setOpen(true)}>add user</button>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>Count</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item,index)=>{
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.phone}</td>
                                <td><input type="checkbox" /></td>
                                <td>
                                    <button className='btn btn-success'>+</button>
                                    <span>{count}</span>
                                    <button className='btn btn-success'>-</button>
                                </td>
                                <td>
                                    <button className='btn btn-danger w-100'  onClick={()=>deleteUser(item.id)}>delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <ModalForm open={open} toggle={()=>setOpen(false)} setOpen={setOpen} addUsers={addUsers}/>
        </div>
    )
}