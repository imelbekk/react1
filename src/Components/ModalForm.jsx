import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default function ModalForm({open, toggle, setOpen, addUsers}) {
  return (
    <Modal isOpen={open} toggle={toggle}>
        <ModalHeader>
            <h1>Add user</h1>
        </ModalHeader>
        <ModalBody>
          <form id='form' onSubmit={addUsers}>
          <input type='text' placeholder='Name' className='form-control my-3'/>
          <input type="text" placeholder='Last Name' className='form-control my-3' />
          <input type="text" placeholder='Phone' className='form-control my-3' />
          </form>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-success' onClick={()=>setOpen(false)} type='submit' form='form' >save</button>
        </ModalFooter>
    </Modal>
  )
}
