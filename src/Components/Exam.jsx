import React from 'react'
import ModalForm from './ModalForm'
import { useState } from 'react'

export default function Exam() {
    const [text, setText] = useState('')
    const [users, setUsers] = useState([
        {id: 1, header: 'Open', title: 'task 1', status: 'open'},
        {id: 2, header: 'Pending', title: 'task 1', status: 'pending'},
        {id: 3, header: 'Inproge', title: 'task 1', status: 'inproge'},
        {id: 4, header: 'Progress', title: 'task 1', status: 'progress'},
    ])
    const [active, setActive] = useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault()
        let title = e.target[0].value
        let status = e.target[1].value
        let id = text.id
        if(text !== ''){
            users.map((item)=>{
               if(item.id === id){
               item.title = title
               item.status = status
               }
            })
        }else{
            let payload = {
                id: users.length + 1,
                title,
                status
            }
        users.push({...payload})
        }
        setUsers([...users])
        setActive(false)
    }
    const deleteItem=(id)=>{
        let filter_arr = users.filter((item)=> item.id !== id)
        setUsers([...filter_arr])
    }
    const editItem=(item)=>{
        setActive(true)
        setText(item)
    }
    const toggle=()=>{
        setActive(false)
        setText('')
    }
  return (
    <div className='my-5 container'>
        <div className="row">
        <div className='col-3'>
            <div className="card">
                <div className="card-header text-center">
                    <h1>Open</h1>
                </div>
                {
                    users.filter(item => item.status === 'open').map((item,index)=>{
                        return <div key={index} className='card-body d-flex align-items-center gap-4'>
                            <span>{item.title}</span>
                            <button className='btn btn-info' onClick={()=>editItem(item)}>edit</button>
                            <button className='btn btn-danger' onClick={()=>deleteItem(item.id)}>delete</button>
                        </div>
                    })
                }
                <div className="card-footer text-center">
                    <button className='btn btn-success' onClick={()=>setActive(true)}>Add User</button>
                </div>
            </div>
        </div>
        <div className='col-3'>
            <div className="card">
                <div className="card-header text-center">
                    <h1>Pending</h1>
                </div>
                {
                    users.filter(item => item.status === 'pending').map((item,index)=>{
                        return <div key={index} className='card-body d-flex align-items-center gap-4'>
                            <span>{item.title}</span>
                            <button className='btn btn-info' onClick={()=>editItem(item)}>edit</button>
                            <button className='btn btn-danger' onClick={()=>deleteItem(item.id)} >delete</button>
                        </div>
                    })
                }
                <div className="card-footer text-center">
                    <button className='btn btn-success' onClick={()=>setActive(true)}>Add User</button>
                </div>
            </div>
        </div>
        <div className='col-3'>
            <div className="card">
                <div className="card-header text-center">
                    <h1>Inproge</h1>
                </div>
                {
                    users.filter(item => item.status === 'inproge').map((item,index)=>{
                        return <div key={index} className='card-body d-flex align-items-center gap-4'>
                            <span>{item.title}</span>
                            <button className='btn btn-info' onClick={()=>editItem(item)}>edit</button>
                            <button className='btn btn-danger' onClick={()=>deleteItem(item.id)}>delete</button>
                        </div>
                    })
                }
                <div className="card-footer text-center">
                    <button className='btn btn-success' onClick={()=>setActive(true)}>Add User</button>
                </div>
            </div>
        </div>
        <div className='col-3'>
            <div className="card">
                <div className="card-header text-center">
                    <h1>Progress</h1>
                </div>
                {
                    users.filter(item => item.status === 'progress').map((item,index)=>{
                        return <div key={index} className='card-body d-flex align-items-center gap-4'>
                            <span>{item.title}</span>
                            <button className='btn btn-info' onClick={()=>editItem(item)}>edit</button>
                            <button className='btn btn-danger' onClick={()=>deleteItem(item.id)}>delete</button>
                        </div>
                    })
                }
                <div className="card-footer text-center">
                    <button className='btn btn-success' onClick={()=>setActive(true)}>Add User</button>
                </div>
            </div>
        </div>
        </div>

    <ModalForm active={active} toggle={toggle} handleSubmit={handleSubmit} text={text}></ModalForm>
    </div>
  )
}
