import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom';

export const Update = () => {

    const { id } = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() => {

        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);

            })

    }, [])

    const updateProductHandler = e =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            description
        }
        )
        .then(res => console.log(res));
        alert("Changes saved!");
        navigate('/');
    }

    return (

        <form onSubmit={updateProductHandler}>
            <h2>Product Updater</h2>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input value = {title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label" >Price</label>
                <input value = {price} onChange={(e) => setPrice(e.target.value)} type="number" step="0.01" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label" >Description</label>
                <textarea value = {description} onChange={(e) => setDescription(e.target.value)} className="form-control" rows="3"></textarea>

            </div>
            <button type="submit" className="btn btn-primary">Save Changes</button>
            <Link className='btn btn-warning mx-2' to={"/"}>Return</Link>
    
        </form>
    )
}
