import React, { useContext } from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios';
import { useParams } from 'react-router'
import { myContext } from '../context/Mycontext';


export const ProductList = () => {

    const {products,removeFromDom} = useContext(myContext);

    const { id } = useParams();


    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/product/"+ productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    return (

        <ol className="list-group list-group-numbered">
            <hr className='mt-5'/>
            <h3>List of Products</h3>
            {products?.map((product, index) => {
                return (                  
                        <li key= {product._id} className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <Link to={product._id}>{product.title}</Link>
                                <div className="fw-bold">{product._id}</div>    
                            </div>
                            <button onClick = {(e) => {deleteProduct(product._id)}} type="button" className="btn btn-danger mx-5">Delete</button>
                        </li>
                   
                )
            })}
     </ol>



    )
}
