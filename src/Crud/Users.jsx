import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddModal from '../Components/AddModal'

export default function Users() {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/Users').then(res=>{
            setUsers(res.data) 
        })
    })
    const [open, setOpen] = useState(false)
    const addUser=(e)=>{
        e.preventDefault()
        let full_name = e.target[0].value
        let departament = e.target[1].value
        let gender = e.target[2].value 
        let birth_data = e.target[4].value 
        console.log(e)
        let payload = {
            full_name,
            departament,
            gender,
            birth_data
        }
        console.log(payload)
    }
  return (
    <div className='my-3'>
        <div className="my-4 d-flex justify-content-between">
            <div className='d-flex gap-4'>
            <select className='form-control w-100'>
                <option value="select" hidden>Select departament</option>
                <option value="it">IT</option>
                <option value="accaunting">Accaunting</option>
                <option value="marketing">Marketing</option>
            </select>
            <button className='btn btn-danger'>X</button>
            </div>

            <button className='btn btn-info' onClick={()=>setOpen(true)}>add</button>
        </div>
        <table className='table table-hover'>
            <thead className='table-primary'>
                <tr className='text-center'>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Departament</th>
                    <th>Gender</th>
                    <th>Birth Data</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item,index)=>{
                        return <tr key={index} className='text-center'>
                            <td>{index + 1}</td>
                            <td>{item.full_name}</td>
                            <td>{item.departament}</td>                            
                            <td>{item.gender}</td>
                            <td>{item.birth_data}</td>
                            <td className=''>
                                <button className='btn btn-success mx-3'>edit</button>
                                <button className='btn btn-danger '>delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <AddModal open={open} toggle={()=>setOpen(false)} addUser={addUser}/>
    </div>
  )
}
