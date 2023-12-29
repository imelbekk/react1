import React from 'react'
import { useState } from 'react'

export default function App() {
  const [users, setUsers] = useState([
    {id: 1, first_name: 'Elbek', last_name: 'Imomaliyev', phone: 986753235},
  ])
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const changeFirstName=(e)=>{
    setFirstName(e.target.value)
  }
  const changeLastName=(e)=>{
    setLastName(e.target.value)
  }
  const changePhone=(e)=>{
    setPhone(e.target.value)
  }
  const addBtn=()=>{
    let payload = {
      first_name: first_name,
      last_name: last_name,
      phone: phone
    }
    setUsers([...users, payload])
  }
  return (
    <div className='container'>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>ID</th>
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
              return <tr>
                <td>{index + 1}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.phone}</td>
                <td>
                  <input type='checkbox' />
                </td>
                <td>
                  <button>+</button>
                  <span>0</span>
                  <button>-</button>
                </td>
                <td>action</td>
              </tr>
            })
          }
        </tbody>
      </table>

      <div className='d-flex flex-column gap-3 w-75 align-items-center'>
      <input type="text" placeholder='First Name' className='w-50' onChange={changeFirstName}/>
      <input type="text" placeholder='Last Name' className='w-50' onChange={changeLastName}/>
      <input type="text" placeholder='Phone' className='w-50' onChange={changePhone}/>
      <button className='btn btn-secondary w-50' onClick={addBtn} >add</button>
      </div>
    </div>
  )
}




