import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Albums() {
    const [item, setItem] = useState([])
    const [page, setPage] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limits=5`).then(response=>{
            setItem(response.data)
        })
    })
  return (
    <div className='my-5'>
    <table className='table table-bordered table-striped table-hover'>
        <thead>
            <tr>
                <th>AlbumID</th>
                <th>Id</th>
                <th>Title</th>
                <th>Url</th>
            </tr>
        </thead>
        <tbody>
            {
                item.map((item,index)=>{
                    return <tr key={index}>
                        <td>{item.albumId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.url}</td>
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
