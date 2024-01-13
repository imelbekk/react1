import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './layout/layout.scss'

export default function ProductsDetails() {
    const id = +window.location.href.split('/')[4]
    console.log(id)
    const [items, setItems] = useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then(res=>{
            setItems(res.data)
            console.log(items)
        })
    })
  return (
    <div className='details_box'>
        <div className="sm_details_box">
            <div className="left_box">
                <img src={items.image} alt={items.title} />
            </div>
            <div className="rigth_box">
                <h3>{items.title}</h3>
                <h6>Price - ${items.price}</h6>
                <h5>Product description:</h5> <hr />
                <p>{items.description}</p>
                <button>Add to cart</button>
            </div>
        </div>
    </div>
  )
}
