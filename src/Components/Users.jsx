import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Posts() {
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const recordPage = 5
    const lastIndex = currentPage * recordPage
    const firstIndex = lastIndex - recordPage
    const records = users.splice(firstIndex, lastIndex)
    const npage = Math.ceil(users.length/ recordPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
            setUsers(response.data)
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
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address (City)</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    records.map((item,index)=>{
                        return <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.address.city}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                            <td>{item.company.name}</td>
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