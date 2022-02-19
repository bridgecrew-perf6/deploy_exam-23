import React, { useState, useContext } from 'react'
import axios from 'axios';
import { myContext } from '../context/Mycontext';
import { Link, useNavigate } from 'react-router-dom';

export const ProductForm = () => {

    const { products, setProducts } = useContext(myContext);

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");

    const [error, setError] = useState('');
    const [validation, setValidation] = useState('');

    const [error1, setError1] = useState('');
    const [validation1, setValidation1] = useState('');

    const [error2, setError2] = useState('');
    const [validation2, setValidation2] = useState('');

    const navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/product', {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
            .then(res => {
                setProducts([...products, res.data])
                e.target.reset();
                setName("");
                setType("");
                setDescription("");
                setSkill1("");
                setSkill2("");
                setSkill3("");

                alert("Pet saved!");
                navigate('/');


            })
            .catch(err => {
                // console.log("error")
                // setValidation('is-invalid')
                if(err.response.data.errors.name){
                    setError(err.response.data.errors.name.message)
                    setValidation('is-invalid')
                }
                if(err.response.data.errors.type){
                    setError1(err.response.data.errors.type.message)
                    setValidation1('is-invalid')
                }
                if(err.response.data.errors.description){
                    setError2(err.response.data.errors.description.message)
                    setValidation2('is-invalid')
                }
                
                
            })




    }
    console.log(error);

    return (

        <>
            <div className="row">
                <h1>Pet Shelter</h1>
                <div className="col-md-9">
                    <h3>Know a pet needing a home?</h3>
                </div>
                <div className="col-md-3">
                    <Link to={"/"}>Back to home</Link>
                </div>




                <form onSubmit={onSubmitHandler}>
                   
                    <div className='row'>   
                        <div className="col-md-5">

                            <div className="mb-3">
                                <label className="form-label"  >Pet Name:</label>
                                {/* <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" /> */}
                                <input onChange={(e) => {
                                    setName(e.target.value)
                                    setValidation('')
                                }}
                                    id="validationServer03"
                                    type="text"
                                    className={`form-control ${validation}`} />
                                <div id="validationServer03Feedback" className="invalid-feedback">                                
                                    {error} 
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" >Pet Type:</label>

                                <input onChange={(e) => {
                                    setType(e.target.value)
                                    setValidation1('')
                                }}
                                    id="validationServer03"
                                    type="text"
                                    className={`form-control ${validation1}`} />
                                <div id="validationServer03Feedback" className="invalid-feedback">                                
                                    {error1} 
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" >Description</label>
                                {/* <input onChange={(e) => setDescription(e.target.value)} className="form-control" rows="3"></input> */}

                                <input onChange={(e) => {
                                    setDescription(e.target.value)
                                    setValidation2('')
                                }}
                                    id="validationServer03"
                                    type="text"
                                    className={`form-control ${validation2}`} />
                                <div id="validationServer03Feedback" className="invalid-feedback">
                                    {error2} 
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">Add Pet</button>
                        </div>



                        <div className="col-md-5">

                            <h5>Skills (Optional):</h5>

                            <div className="mb-3">
                                <label className="form-label"  >Skill 1:</label>
                                <input onChange={(e) => setSkill1(e.target.value)} type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" >Skill 2:</label>
                                <input onChange={(e) => setSkill2(e.target.value)} type="text" step="0.01" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" >Skill 3</label>
                                <input onChange={(e) => setSkill3(e.target.value)} className="form-control" rows="3"></input>
                            </div>

                        </div>

                    </div>

                </form>

            </div>

        </>
    )
}
