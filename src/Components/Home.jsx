import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const {id}=useParams();
    const [products,setProducts]= useState([]);
    const API= "http://localhost:9092/products"

    const getProductData = async()=>{
     try {
      const res = await   axios.get(API);
      setProducts(res.data);
    }catch(error){
        console.log(error);
    }
    
    }
    useEffect(() =>{
    getProductData();
    },[])

    const deleteProduct =async (id)=>{
        await axios.delete(`http://localhost:9092/products/delete/${id}`)
        getProductData();

    }

  return (
    <div className="container">
        <div className='py4'>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">SR No</th>
      <th scope="col">Product Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {products.map((product,index)=>(
    <tr key={index}> 
      <th scope="row">{index+1}</th>
      <td>{product.name}</td>
      <td>{product.qty}</td>
      <td>{product.price}</td>
      <td>
     <Link className='btn btn-primary mx-2' to={`/viewproduct/${product.id}`}>View</Link>
     <Link className='btn btn-outline-primary mx-2' to={`/editproduct/${product.id}`} >Edit</Link>
     <button className='btn btn-danger mx-2' onClick={()=> deleteProduct(product.id)}>Delete</button>


      </td>
    </tr>
   ))
}
  
            


    
    
  </tbody>
</table>
        </div>

    </div>
  )
}
