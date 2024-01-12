import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Todos() {
    const [todos, setTodos] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const recordPage = 5
    const lastIndex = currentPage * recordPage
    const firstIndex = lastIndex - recordPage
    const records = todos.splice(firstIndex, lastIndex)
    const npage = Math.ceil(todos.length/ recordPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then(response=>{
            setTodos(response.data)
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
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {
                    records.map((item,index)=>{
                        return <tr key={index}>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.completed}</td>
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