import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Photos() {
    const [photos, setPhotos] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos').then(response=>{
            setPhotos(response.data)
        })
    })
  return (
    <div className='my-5'>
    <table className='table table-bordered table-striped table-hover'>
        <thead>
            <tr>
                <th>AlbumId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Url</th>
                <th>ThumbnailUrl</th>
            </tr>
        </thead>
        <tbody>
            {
                photos.map((item,index)=>{
                    return <tr key={index}>
                        {/* <td>{item.albumId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.url}</td>
                        <td>{item.thumbnailUrl}</td> */}
                    </tr>
                })
            }
        </tbody>
    </table>
</div>
  )
}