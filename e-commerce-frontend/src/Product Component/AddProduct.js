import { useState } from 'react';
import React from 'react';
import Header from '../Global Components/Header';

/**
 * Component for adding a new product.
 * 
 * This component provides a form for entering product details
 * such as name, file, price, and description, and a button to submit the product.
 */
function AddProduct() {
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    /**
     * Handles the submission of the product form.
     * 
     * Gathers form data and sends a POST request to the server.
     * Alerts the user once the data has been saved.
     */
    async function addProduct() {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('price', price);
        formData.append('name', name);
        formData.append('description', description);

        let result = await fetch("http://localhost:8000/api/addproduct", {
            method: 'POST',
            body: formData
        });
        alert("Data has been saved");
    }

    return (
        <div>
            <Header/>
            <div className='col-sm-6 offset-sm-3'>
                <br/>
                <input type='text' className='form-control' onChange={(e) => setName(e.target.value)} placeholder='name'/>
                <br/>
                <input type='file' className='form-control' onChange={(e) => setFile(e.target.files[0])} placeholder='file'/>
                <br/>
                <input type='text' className='form-control' onChange={(e) => setPrice(e.target.value)} placeholder='price'/>
                <br/>
                <input type='text' className='form-control' onChange={(e) => setDescription(e.target.value)} placeholder='description'/>
                <br/>
                <button onClick={addProduct} className='btn btn-primary'>Add product</button>
            </div>
        </div>
    );
}

export default AddProduct;
