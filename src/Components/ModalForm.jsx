import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default function ModalForm({active, toggle, handleSubmit, text}) {
  return (
    <>
    <Modal isOpen={active} toggle={toggle}>
        <ModalHeader className='text-center'>
            <h1>Add User</h1>
        </ModalHeader>

        <ModalBody>
            <form id='form' onSubmit={handleSubmit}>
                <input type="text" placeholder='title' className='form-control my-2' defaultValue={text?.title}/>
                <select className='form-control' defaultValue={text?.status}>
                    <option value="select" hidden>select page</option>
                    <option value="open">open</option>
                    <option value="pending">pending</option>
                    <option value="inproge">inproge</option>
                    <option value="progress">progress</option>
                </select>
            </form>
        </ModalBody>

        <ModalFooter>
            <button className='btn btn-success' form='form' type='submit' >save</button>
        </ModalFooter>
    </Modal>
    </>
  )
}
