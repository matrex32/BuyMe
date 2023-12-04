import React, { useState, useEffect } from 'react';
import Header from '../Global Components/Header';
import { useParams } from 'react-router-dom';

/**
 * Component for updating a product.
 * 
 * This component fetches the product details based on the ID from the URL
 * and allows the user to update the product information.
 */
function UpdateProduct() {
    const [data, setData] = useState({
        name: '',
        price: '',
        description: '',
        file_path: ''
    });
    const { id } = useParams(); // Get the ID from the URL

    /**
     * Fetches the product data when the component mounts or the ID changes.
     */
    useEffect(() => {
        async function fetchData() {
            let result = await fetch(`http://localhost:8000/api/product/${id}`);
            result = await result.json();
            setData(result);
        }

        fetchData();
    }, [id]); // Add ID as a dependency for useEffect

    /**
     * Handles the update operation for the product.
     * 
     * This function should be implemented based on your API.
     */
    async function updateProduct() {
        // Logic for updating the product
        // You will need to implement this function based on your API.
    }

    return (
        <div>
            <Header/>
            <h1>Update Product</h1>
            <div className="form-group">
                <input 
                    type='text' 
                    value={data.name} 
                    onChange={(e) => setData({ ...data, name: e.target.value })} 
                    className='form-control' 
                />
                <br/>
                <input 
                    type='text' 
                    value={data.price} 
                    onChange={(e) => setData({ ...data, price: e.target.value })} 
                    className='form-control' 
                />
                <br/>
                <input 
                    type='text' 
                    value={data.description} 
                    onChange={(e) => setData({ ...data, description: e.target.value })} 
                    className='form-control' 
                />
                <br/>
                <input 
                    type='file' 
                    onChange={(e) => setData({ ...data, file_path: e.target.files[0] })} 
                    className='form-control' 
                />
                <br/>
                {data.file_path && (
                    <img 
                        style={{width: 100}} 
                        src={`http://localhost:8000/${data.file_path}`} 
                        alt={data.name} 
                    />
                )}
                <br/>
                <button onClick={updateProduct} className="btn btn-primary">Update Product</button>
            </div>
        </div>
    );
}

export default UpdateProduct;
