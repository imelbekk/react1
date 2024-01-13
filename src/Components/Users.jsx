import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Albums() {
    const [item, setItem] = useState([])
    const [page, setPage] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limits=3`).then(response=>{
            setItem(response.data)
        })
    })
  return (
    <div className='my-5'>
    <table className='table table-bordered table-striped table-hover'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
            </tr>
        </thead>
        <tbody>
            {
                item.map((item,index)=>{
                    return <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.website}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
    <button onClick={()=>setPage(prev => prev - 1)} className='btn btn-info'>prev</button>
    <span>{page}</span>
    <button onClick={()=>setPage(prev => prev + 1)} className='btn btn-info'>next</button>
    </div>
  )
}
