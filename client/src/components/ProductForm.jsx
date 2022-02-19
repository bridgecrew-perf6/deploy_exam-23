import React, { useState , useContext} from 'react'
import axios from 'axios';
import { myContext } from '../context/Mycontext';


export const ProductForm = () => {

    const {products,setProducts} = useContext(myContext);

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

   

    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res=> {
                setProducts([...products,res.data])
                console.log(res);

            })
            .catch(err=> console.log(err))
    
        e.target.reset();
        setTitle("");
        setPrice("");
        setDescription("");

    }


    return (

        <>
        <form onSubmit={onSubmitHandler}>
            <h2>Product Control</h2>
            <div className="mb-3">
                <label className="form-label"  >Title</label>
                <input onChange = {(e) => setTitle(e.target.value)} type="text" className="form-control"  />
            </div>
            <div className="mb-3">
                <label className="form-label" >Price</label>
                <input onChange = {(e) => setPrice(e.target.value) } type="number" step="0.01" className="form-control"  />
            </div>
            <div className="mb-3">
                <label className="form-label" >Description</label>
                <textarea onChange = {(e) => setDescription(e.target.value) } className="form-control"  rows="3"></textarea>

            </div>
            <button type="submit" className="btn btn-primary">Save Product</button>
        </form>

        

        </>        
    )
}
