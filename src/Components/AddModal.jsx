import React from 'react'
import { Modal, ModalFooter, ModalBody, ModalHeader } from 'reactstrap'

export default function AddModal({open, toggle, addUser}) {
  return (
    <>
    <Modal isOpen={open} toggle={toggle}>
        <ModalHeader>
            <h1>Add User</h1>
        </ModalHeader>
        <ModalBody>
            <form id='form' onSubmit={addUser}>
                <input type="text" placeholder='Full Name' className='form-control my-2' />

                <select className='form-control my-2'>
                    <option value="select" hidden>Select departament</option>
                    <option value="IT" >IT</option>
                    <option value="Accaunting" >Accaunting</option>
                    <option value="Marketing" >Marketing</option>
                </select>

                <input type="radio" name="gender" id="Male" />
                <label htmlFor='Male' className='mx-2'>Male</label>
                <input type="radio" name="gender" id="Famale" />
                <label htmlFor="Famale" className='mx-2'>Female</label>

                <input type="date" className='form-control my-2' />
            </form>
        </ModalBody>
        <ModalFooter>
            <button form='form' type='submit' className='btn btn-success'>save</button>
        </ModalFooter>
    </Modal>
    </>
  )
}
