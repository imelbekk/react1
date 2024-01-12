import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Albums() {
    const [albums, setAlbums] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const recordPage = 5
    const lastIndex = currentPage * recordPage
    const firstIndex = lastIndex - recordPage
    const records = albums.splice(firstIndex, lastIndex)
    const npage = Math.ceil(albums.length/ recordPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/albums').then(response=>{
            setAlbums(response.data)
        })
    })
    const prevPage=()=>{
        if(currentPage !== firstIndex){
            setCurrentPage(currentPage - 1)
        }
    }

    const changeCPage=(item)=>{
        setCurrentPage(item)
    }

    const nextPage=()=>{
        if(currentPage !== lastIndex){
            setCurrentPage(currentPage + 1)
        }
    }
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
                records.map((item,index)=>{
                    return <tr key={index}>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
    <nav>
            <ul className='pagination'>
                <li className='page-item'>
                    <a href='#' className='page-link' onClick={prevPage}>Prev</a>
                </li>
                {
                    numbers.map((item,index)=>{
                        return <li key={index} className={`page-item ${currentPage === item ? 'active' : ''}`} >
                            <a href="#" className='page-link' onClick={()=>changeCPage(item) }>{item}</a>
                        </li>
                    })
                }
                <li className='page-item'>
                    <a href='#' className='page-link' onClick={nextPage}>Next</a>
                </li>
            </ul>
    </nav>
</div>
  )
}
