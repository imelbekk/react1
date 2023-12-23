import React from 'react'
import { useState } from 'react'

export default function App() {
    const [users, setUsers] = useState([
        {id: 1, name: 'John', last_name: 'Smith', age: 40, number: 100, city: 'Chicago', state: 'IL', salery: 1000},
        {id: 2, name: 'Jane', last_name: 'Doe', age: 25, number: 100, city: 'Phoenix', state: 'AZ', salery: 5000},
        {id: 3, name: 'Mary', last_name: 'Smith', age: 50, number: 200, city: 'Chicago', state: 'IL', salery: 2500},
        {id: 4, name: 'George', last_name: 'Edwards', age: 45, number: 300, city: 'Phoenix', state: 'AZ', salery: 3000}
    ])
    const [text, setText] = useState('')
    const filter=()=>{
        const result = users.filter((item)=> item.age <= 40)
        setUsers(result)
    }
    const yes=()=>{
        let yes = 'Ushbu amalga rozisiz'
        setText(yes)
    }
    const no=()=>{
        let yes = 'Siz bunga qarshisiz'
        setText(yes)
    }
  return (
    <div className='container'>
        <table className='table table-bordered '>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Number</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Salery</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item,index)=>{
                        return <tr>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.age}</td>
                            <td>{item.number}</td>
                            <td>{item.city}</td>
                            <td>{item.state}</td>
                            <td>{item.salery}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <div  className='text-center'>
        <button className='btn btn-info' onClick={filter}>armiyaga qabul qilish</button>
        </div>

        <div>
            <input type="radio" onClick={yes} name='text' id='text1'/>
            <label for='text1'>yes</label>
            <input type="radio" onClick={no} name='text' id='text2' />
            <label for='text2'>no</label>
            <h1>{text}</h1>
        </div>
    </div>
  )
}

