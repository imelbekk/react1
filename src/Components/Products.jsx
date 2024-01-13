import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './layout/layout.scss'
import { Link } from 'react-router-dom'


export default function Products() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then(response=>{
        setProducts(response.data)
    })
  })
  return (
    <div className='product_page'>
        {
          products.map((item,index)=>{
            return <div className='card_boxs' key={index}>
              <div className="card_img">
                <img src={item.image} alt="product" laziy='loading'/>
              </div>
              <div className='card_name'>
                <h6>{item.title}</h6>
              </div>
              <div className='card_footer'>
                <Link to={`/product_details/${item.id}`}>View Details</Link>
              </div>
            </div>
          })
        }
    </div>
  )
}