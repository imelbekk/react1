import React from 'react'
import { useState } from 'react'

export default function Users() {
    const [users, setUsers] = useState([
        {id: 1, title: 'Alisher Hoshimov', check: false},
        {id: 2, title: 'Sarvar Odashaliyev', check: false},
        {id: 3, title: 'Odil Salimboyev',  check: false},
    ])
    const [actives, setActives] = useState([])
    const moveItems=(value)=>{
        if(value === 'users'){
        users.forEach((item,index)=>{
            if(item.check === true){
                actives.push({...item, check: false})
                users.splice(index,1)
                setActives([...actives])
                setUsers([...users])
            }
        })
    }else{
        actives.forEach((item,index)=>{
            if(item.check === true){
                users.push({...item, check: false})
                actives.splice(index,1)
                setUsers([...users])
                setActives([...actives])
            }
        }) 
    }
    }
    const handleUsers=(id)=>{
        users.forEach((item)=>{
            if(item.id === id){
                item.check = !item.check
            }
        })
    }
    const handleActives=(id)=>{
        actives.forEach((item)=>{
            if(item.id === id){
                item.check = !item.check
            }
        })
    }
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                <div className="card-header">
                <h1 className='text-center'>Users</h1>
                </div>
                <div className="card-body">
                {
                    users.map((item,index)=>{
                        return <div key={index} className='d-flex align-items-center gap-3'>
                            <span>{item.title}</span>
                            <span><input type="checkbox" onChange={()=> handleUsers(item.id)}/></span>
                        </div>
                    })
                }
                </div>
                <div className="card-footer">
                <button className='btn btn-danger my-3' onClick={()=>moveItems('users')}>o'tkazish</button>
                </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                <div className="card-header">
                <h1 className='text-center'>Actives</h1>
                </div>
                <div className="card-body">
                {
                    actives.map((item,index)=>{
                        return <div key={index} className='d-flex align-items-center gap-3'>
                            <span>{item.title}</span>
                            <span><input type="checkbox" onChange={()=> handleActives(item.id)}/></span>
                        </div>
                    })
                }
                </div>
                <div className="card-footer">
                <button className='btn btn-danger my-3' onClick={()=>moveItems('actives')}>o'tkazish</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
