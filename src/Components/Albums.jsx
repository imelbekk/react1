import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Albums() {
    const [albums, setAlbums] = useState([])
    const [page, setPage] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/albums?_page=${page}&_limits=5`).then(response=>{
            setAlbums(response.data)
        })
    })
  return (
    <div className='my-5'>
    <table className='table table-bordered table-striped table-hover'>
        <thead>
            <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
            </tr>
        </thead>
        <tbody>
            {
                albums.map((item,index)=>{
                    return <tr key={index}>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
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
