import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewProduct() {
    const {id}=useParams();
    useEffect(()=>{
        loadProduct();
    },[])
    
      const [product,setProduct]=useState({
          name:"",
          qty:"",
          price:""
        })
        const loadProduct = async ()=>{
            const result= await axios.get(`http://localhost:9092/products/${id}`)
            setProduct(result.data);
        
         }
  return (
    <div className='container'>
    <div className='row'>
<div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
  <h2 className='text-center m-4'> Product Details </h2>
  <div className='card'>
    <div className="text-center card-header">
        Details of Product Id : {product.id}
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <b>Name:  {product.name}</b>
            </li>
            <li className="list-group-item">
                <b>Quantity: {product.qty}</b>
            </li>
            <li className="list-group-item">
                <b>Price: {product.price}</b>
            </li>
        </ul>
    </div>
  </div>
  <div className='text-center'>
  <Link  className='btn btn-primary  my-2' to={"/"} >Back To Home</Link>
  </div>
  </div>
  </div>
  </div>
  )
}
