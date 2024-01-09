import React from 'react'
import {useState} from 'react'
import ModalForm from './ModalForm'

export default function Pages() {
    const [pages, setPages] = useState([
        {id: 1, title: 'Open', text: [{name: 'task 1'}]},
        {id: 2, title: 'Pending', text: [{name: 'task 2'}]},
        {id: 3, title: 'Inproge', text: [{name: 'task 3'}]},
        {id: 4, title: 'Progress', text: [{name: 'task 4'}]},
    ])
    const [active, setActive] = useState(false)
    const [name, setName] = useState('')
    const [select, setSelect] = useState('')
    const [select_num, setSelect_num] = useState('')


    const save =()=>{
      let id = select -1
      let payload = {name}
      pages.forEach((item,index)=>{
        if(index === id){
          item.text.push(payload)
        }
      })
      setPages([...pages])
      setActive(false)
    }

    const editItem = () => {
      setActive(true)
    }
    const deleteItem = (instend,index,item) => {
      item.text.splice(instend, 1)
      setPages([...pages])
    }

  return (
    <div className='container'>
        <div className="row">
            {
                pages.map((item,index)=>{
                    return <div className='col-3' key={index}>
                        <div className='card'>
                            <div className="card-header">
                                <h1 className='text-center'>{item.title}</h1>
                            </div>
                            <div className="card-body">
                                {
                                    item.text.map((event,instend)=>{
                                        return <div key={index} className='d-flex gap-5 my-3'>
                                            <h4>{event.name}</h4>
                                            <div className="d-flex gap-3">
                                            <button className='btn btn-info' onClick={editItem}>edit</button>
                                            <button className='btn btn-danger' onClick={()=>deleteItem(instend,index,item)}>delete</button>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                            <div className="card-footer text-center">
                                <button className='btn btn-success' onClick={()=>setActive(true)}>Add User</button>
                                <ModalForm active={active} toggle={()=>setActive(false)} setName={setName} setSelect={setSelect} save={save} select_num={select_num} pages={pages}></ModalForm>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}
