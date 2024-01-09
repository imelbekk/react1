import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Pages from './Pages'

export default function ModalForm({active, toggle, setName, setSelect, save,pages}) {
  return (
    <>
    <Modal isOpen={active} toggle={toggle}>
        <ModalHeader>
            <h1>Add User</h1>
        </ModalHeader>

        <ModalBody>
            <form>
                <input type="text" placeholder='title' className='form-control' onChange={(e)=>setName(e.target.value)} />
                <select className='form-control my-3' onChange={(e)=>setSelect(e.target.value)}>
                    <option value="Select Page" hidden selected>Select Page</option>
                    {
                        pages.map((item,index)=>{
                            return <option value={item.id} key={index}>
                                {item.title}
                            </option>
                        })
                    }
                </select>
            </form>
        </ModalBody>

        <ModalFooter>
            <button className='btn btn-info' onClick={save}>save</button>
        </ModalFooter>
    </Modal>
    </>
  )
}
