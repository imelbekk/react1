import React, { useEffect, useState } from 'react'
import '../Components/layout/layout.scss'
import { Link } from 'react-router-dom'

export default function Menu() {
    const [link, setLink] = useState([
        {id: 1, name: 'Products', path: '/products'},
        {id: 2, name: 'Posts', path: '/posts'},
        {id: 3, name: 'Comments', path: '/comments'},
        {id: 4, name: 'Albums', path: '/albums'},
        {id: 5, name: 'Photos', path: '/photos'},
        {id: 6, name: 'Todos', path: '/todos'},
        {id: 7, name: 'Users', path: '/users'},
    ])
    const [active, setActive] = useState(1)
    const activeBtn =(id)=>{
      localStorage.setItem('id', id)
      setActive(id)
    }
    useEffect(()=>{
      let val = +localStorage.getItem('id')
      if(val){
        setActive(val)
      }else{
        setActive(1)
      }
    })
  return (
    <div className='sidebar_items'>
      <ul>
        {
          link.map((item,index)=>{
            return <li key={index}>
              <Link to={item?.path} className={active === item.id ? 'active_btn' : ""} onClick={()=> activeBtn(item.id)}>{item.name}</Link>
            </li>
          })
        }
      </ul>
    </div>
  
  )
}
