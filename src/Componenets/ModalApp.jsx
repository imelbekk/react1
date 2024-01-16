import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import axiosCleint from '../plugins/Axios'
import { useNavigate } from 'react-router-dom'

export default function ModalApp({open, toggle, roles}) {
    const navigate = useNavigate()
    const handleRole=(e)=>{
        e.preventDefault()
        let role = e.target[0].value
        axiosCleint.post('/admins/set-role',{
            role: role
        }).then((res)=>{
            console.log(res);
            if(res.status === 202){
                if(role === 'admin'){
                    navigate('/admin')
                }
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <Modal isOpen={open} toggle={toggle}>
        <ModalHeader>
            <h1>Select your role</h1>
        </ModalHeader>
        <ModalBody>
            <form id='role' onSubmit={handleRole}>
                <select className='form-control my-2'>
                    <option value="select" hidden>Select your role</option>
                    {
                        roles.map((item,index)=>{
                            return <option value={item} key={index}>{item}</option>
                        })
                    }
                </select>
            </form>
        </ModalBody>
        <ModalFooter>
            <button className='btn btn-success' form='role'>save</button>
        </ModalFooter>
    </Modal>
  )
}
