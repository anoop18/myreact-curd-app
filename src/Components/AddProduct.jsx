import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddProduct() {

  let navigate= useNavigate();
  const [product,setProduct]=useState({
    name:"",
    qty:"",
    price:""
  })
  const{name,qty,price}=product;
 const onInputChange=(e)=>{
   setProduct({...product,[e.target.name]:e.target.value});
 };
  const API= "http://localhost:9092/products"
  const onSubmit = async(e)=>{
    e.preventDefault();
    await axios.post(API,product)
    navigate("/")

 };

  return (
    <div className='container'>
    <div className='row'>
<div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
  <h2 className='text-center m-4'>Add Product</h2>
  <form onSubmit={(e)  =>onSubmit(e)}>
  <div className='text-center mb-3' >
    <label htmlFor="Name" className='form-label'>
      Name
    </label>
    <input type='text' className='form-control' placeholder='Enter Prodcut Name' name='name' value={name}
    onChange={(e)=>onInputChange(e)}
    />
  </div>
  <div className='text-center mb-3' >
    <label htmlFor="Quantity" className='form-label'>
      Quantity
    </label>
    <input type='text' className='form-control' placeholder='Enter Quantity' name='qty' value={qty} 
        onChange={(e)=>onInputChange(e)}

    />
  </div>
  <div className='text-center mb-3' >
    <label htmlFor="Price" className='form-label'>
      Price
    </label>
    <input type='text' className='form-control' placeholder='Enter Price' name='price' value={price} 
        onChange={(e)=>onInputChange(e)}

    />
  </div>
  <div className='text-center mb-3' >

  <button type='submit' className='btn btn-outline-primary'>Submit</button>
  <Link  className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
  </div>
  </form>
</div>

    </div>
    
    </div>
  )
}
