import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Global Components/Header';

function Protected(props) {
    let Cmp = props.Cmp
    const navigate=useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem('user-info')) {
            navigate("/register")
        }
    }, [])

    return (
        <div>
            <Cmp/>
        </div>
    )
}

export default Protected;