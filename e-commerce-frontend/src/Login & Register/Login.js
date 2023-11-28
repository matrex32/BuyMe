import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Global Components/Header';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate()

    useEffect(()=>{
        if(localStorage.getItem('user-info')) {
            navigate("/add")
        }
    }, [])
    
    async function login() {
        console.warn(email, password)
        let item = {email, password};
        let result =  await fetch("http://localhost:8000/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"

            },
            body: JSON.stringify(item)

        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/add")
    }
    return (
        <div>
            <Header/>
            <h1>Login page</h1>
            <div className="col-sm-6 offset-sm-3">
                <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} className='form-control'/>
                <br/>
                <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)} className='form-control'/>
                <br/>
                <button onClick={login} className="btn btn-primary">Login</button>
            </div>
        </div>
    )
}

export default Login;