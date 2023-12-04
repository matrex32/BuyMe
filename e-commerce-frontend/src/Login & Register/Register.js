import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Global Components/Header';

/**
 * Component for user registration.
 * 
 * This component provides a form for user registration including fields for name, email, and password.
 * After registration, the user is navigated to the 'add' page.
 */
function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    /**
     * Redirects to the 'add' page if the user is already logged in.
     */
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/add");
        }
    }, [navigate]);

    /**
     * Handles the registration process.
     * 
     * Collects user input data and sends a POST request to the server for registration.
     * Stores user information in local storage and navigates to the 'add' page upon successful registration.
     */
    async function signUp() {
        let item = { name, email, password };
        console.warn(item);

        let result = await fetch("http://localhost:8000/api/register", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-type": 'application/json',
                "Accept": 'application/json'
            }
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/add");
    }

    return (
        <>
            <Header/>
            <div className="col-sm-6 offset-sm-3">
                <h1>Register</h1>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder='name'/>
                <br/>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder='email'/>
                <br/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder='password'/> 
                <br/>

                <button onClick={signUp} className="btn btn-primary">Sign up</button>
            </div>
        </>
    );
}

export default Register;
