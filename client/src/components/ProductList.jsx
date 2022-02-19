import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useParams } from 'react-router'
import { myContext } from '../context/Mycontext';


export const ProductList = () => {

    const { products, removeFromDom } = useContext(myContext);

    const { id } = useParams();


    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/product/" + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    return (
        
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
            {products?.map((product, index) => {
                     return (     

                <tr key = {index}>
                    <td scope="row">{product.name}</td>
                    <td scope="row">{product.type}</td>                                 
                    <td>
                        
                        <Link to={"/pets/"+product._id} className='btn btn-info'>details</Link>
                        <Link className='btn btn-warning mx-2' to={"/pets/"+ product._id+"/edit"}>Edit</Link>
                        {/* <Link to="/pets/:id" className='btn btn-warning'>edit</Link> */}
                    </td>                    
                </tr>

            )
            })}

            </tbody>
        </table>

        

    )
}
