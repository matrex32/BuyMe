import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Header from '../Global Components/Header';

/**
 * Component for user login.
 * 
 * This component provides a form for user login including fields for email and password.
 * It also displays a snackbar for error messages.
 */
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    /**
     * Redirects to the 'add' page if the user is already logged in.
     */
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/add");
        }
    }, [navigate]);

    /**
     * Opens the snackbar with a provided message.
     * 
     * @param {string} message - The message to display in the snackbar.
     */
    const handleOpenSnackbar = (message) => {
        setSnackbarMessage(message);
        setOpenSnackbar(true);
    };
    
    /**
     * Closes the snackbar.
     */
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    /**
     * Handles the login process.
     * 
     * Sends a POST request to the server for login. On success, stores user information in local storage
     * and navigates to the 'add' page. On failure, displays an error message in the snackbar.
     */
    async function login() {
        let item = { email, password };
        let result = await fetch("http://localhost:8000/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        if (result.error) {
            handleOpenSnackbar(result.error);
        } else {
            localStorage.setItem('user-info', JSON.stringify(result));
            navigate("/add");
        }
    }

    return (
        <div>
            <Header/>
            <h1>Login page</h1>
            <div className="col-sm-6 offset-sm-3">
                <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} className='form-control'/>
                <br/>
                <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} className='form-control'/>
                <br/>
                <button onClick={login} className="btn btn-primary">Login</button>
            </div>

            <Snackbar open={openSnackbar} autoHideDuration={5000} onClose={handleCloseSnackbar} className="col-sm-6 offset-sm-5">
                <MuiAlert onClose={handleCloseSnackbar} severity="error" elevation={6} variant="filled">
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </div>
    );
}

export default Login;
