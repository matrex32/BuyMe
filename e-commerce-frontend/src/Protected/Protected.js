import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Global Components/Header';

/**
 * A higher-order component that protects a route.
 * 
 * This component checks if the user is logged in (by checking local storage).
 * If the user is not logged in, it redirects them to the registration page.
 * Otherwise, it renders the component passed in props.
 * 
 * @param {Object} props - The component props.
 * @param {React.Component} props.Cmp - The component to render if the user is authenticated.
 */
function Protected(props) {
    let Cmp = props.Cmp;
    const navigate = useNavigate();

    /**
     * Redirects to the registration page if the user is not logged in.
     */
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            navigate("/register");
        }
    }, [navigate]);

    return (
        <div>
            <Cmp/>
        </div>
    );
}

export default Protected;
