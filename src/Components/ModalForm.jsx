import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useState } from 'react'

export default function ModalForm({users, setUsers, toggle, active}) {
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const addUsers=()=>{
    let payload = {
      first_name, last_name, phone
    }
    users.push({...payload})
    setUsers([...users])
    toggle()
  }
  return (
    <>
    <Modal isOpen={active} toggle={toggle}>
      <ModalHeader>
        <h1>Add User</h1>
      </ModalHeader>

      <ModalBody>
        <form action="">
          <input type="text" className='form-control my-2' onChange={(e)=>setFirstName(e.target.value)} placeholder='First Name' />
          <input type="text" className='form-control my-2' onChange={(e)=>setLastName(e.target.value)} placeholder='Last Name' />
          <input type="text" className='form-control my-2' onChange={(e)=>setPhone(e.target.value)} placeholder='Phone' />
        </form>
      </ModalBody>

      <ModalFooter>
        <button onClick={addUsers}>add</button>
      </ModalFooter>

    </Modal>


    </>
  )
}

