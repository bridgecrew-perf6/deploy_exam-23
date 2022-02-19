import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom';

export const Update = () => {

    const { id } = useParams();
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

    useEffect(() => {

        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);


            })

    }, [])

    const updateProductHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        }
        )
            .then(res => {
                alert("Changes saved!");
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

    return (

        <div className='container w-75'>

            <div className='row'>
                <div className='col-md-9'>
                    <h1>Pet Shelter</h1>
                </div>
                <div className='col-md-2'>
                    <Link to={"/"}>Back to home</Link>
                </div>
                <div className="col-md-9">
                    <h3>Edit: {name}</h3>
                </div>
                <div className="col-md-3">
                    
                </div>

            </div>

            <form onSubmit={updateProductHandler}>
                    <div className='row'>
                        <div className="col-md-5">
                            
                            <div className="mb-3">
                                <label className="form-label"  >Pet Name:</label>
                                {/* <input onChange={(e) => setName(e.target.value)} value ={name}type="text" className="form-control" /> */}
                                <input value ={name} onChange={(e) => {
                                    
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
                                {/* <input onChange={(e) => setType(e.target.value)} value = {type} type="text" step="0.01" className="form-control" /> */}
                                <input value ={type} onChange={(e) => {
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
                                {/* <input onChange={(e) => setDescription(e.target.value)} value = {description} className="form-control" rows="3"></input> */}

                                <input value ={description} onChange={(e) => {
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
                            <button type="submit" className="btn btn-primary">Edit Pet</button>
                        </div>



                        <div className="col-md-5">

                            <h5>Skills (Optional):</h5>

                            <div className="mb-3">
                                <label className="form-label"  >Skill 1:</label>
                                <input onChange={(e) => setSkill1(e.target.value)} value = {skill1} type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" >Skill 2:</label>
                                <input onChange={(e) => setSkill2(e.target.value)} value = {skill2} type="text" step="0.01" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label" >Skill 3</label>
                                <input onChange={(e) => setSkill3(e.target.value)} value = {skill3} className="form-control" rows="3"></input>
                            </div>

                        </div>

                    </div>

                </form>

        </div>


    )
}
