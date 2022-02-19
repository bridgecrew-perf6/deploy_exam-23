import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { myContext } from '../context/Mycontext'

export default () => {

  const {removeFromDom} = useContext(myContext);

  const {id} = useParams();

  
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then(res => setProduct(res.data))
  }, [])



  const deleteProduct = (productId) => {
    axios.delete("http://localhost:8000/api/product/"+ productId)
        .then(res => {
          removeFromDom(productId)
          console.log(res)})
}


  return (

    <div className="card" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{product._id}</h6>
        <p className="card-text">{product.description}</p>
        <Link className='btn btn-success mx-2' to={"/"+id+"/edit"}>Edit</Link>
        <Link className='btn btn-info mx-2' to={"/"}>Return</Link>
        {/* <button onClick = {(e) => {deleteProduct(product._id)}} type="button" class="btn btn-danger mx-2">Delete</button> */}
        <Link onClick = {(e) => {deleteProduct(product._id)}} to={"/"} type="button" className="btn btn-danger mx-2">Delete</Link>
      </div>
    </div>

  )
}
