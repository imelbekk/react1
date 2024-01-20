import React from 'react'
import CRUD from './Crud/CRUD'
import Users from './Crud/Users'

export default function App(){
    return (
        <div className='container'>
            <CRUD/> <hr/>
            <Users/>
        </div>
    )
}