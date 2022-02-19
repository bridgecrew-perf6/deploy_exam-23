import React from 'react'
import { Link } from 'react-router-dom';

const subheader = "This pets are looking for a good home";
// const link = "Mundo";
const nLink = "Add a pet to the shelter";

function Header() {
    return (


        <div className="row">
            <h1>Pet Shelter</h1>
            <div className="col-md-9">
                <h3>{subheader}</h3>
            </div>
            <div className="col-md-3">
                <Link to={"/pet/new"}>{nLink}</Link>
            </div>

        </div>


    )
}

export default Header;