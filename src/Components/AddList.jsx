import React from 'react'
import ModalForm from './ModalForm'
import { useState } from 'react'

export default function AddList() {
    const [users, setUsers] = useState([
        {id: 1, first_name: 'Mark', last_name: 'Otto', phone: '+998930389716'}
    ])
    const [count, setCount] = useState(0)
    const deleteUser =(index)=>{
        users.splice(index, 1)
        setUsers([...users])
    }
    const [active, setActive] = useState(false)
  return (
      <div className='container'>
        <div>
        <button className='btn btn-info my-3' onClick={()=>setActive(true)}>add user</button>
        </div>
        <ModalForm users={users} setUsers={setUsers} toggle={()=>setActive(false)} active={active}></ModalForm>
        <div className='my-3'>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
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
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.phone}</td>
                                <td><input type='checkbox' /></td>
                                <td>
                                    <button onClick={ ()=> setCount(prev => prev + 1)}>+</button>
                                    <span>{count}</span>
                                    <button onClick={ ()=> setCount(prev => prev - 1)}>-</button>
                                </td>
                                <td><button className='btn btn-danger' onClick={ ()=> deleteUser(index)}>-</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
