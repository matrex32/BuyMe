import React, { useState } from 'react';
import Header from '../Global Components/Header';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

/**
 * Component for searching and displaying products.
 * 
 * This component allows users to search for products by name.
 * It displays the results in a table with options to delete or update each product.
 */
function SearchProduct() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    /**
     * Searches for products based on the provided key.
     * 
     * If the key is empty, it fetches all products.
     * 
     * @param {string} key - The search term.
     */
    async function search(key) {
        if (!key) {
            fetchData();
            return;
        }

        let result = await fetch(`http://localhost:8000/api/search/${key}`);
        if (!result.ok) {
            console.error('Failed to fetch:', result.status);
            return;
        }

        try {
            const data = await result.json();
            setData(data);
        } catch (error) {
            console.error('Failed to parse JSON:', error);
        }
    }

    /**
     * Fetches the list of all products.
     */
    async function fetchData() {
        let result = await fetch("http://localhost:8000/api/list");
        result = await result.json();
        setData(result);
    }

    /**
     * Deletes a product based on its ID.
     * 
     * @param {number} id - The ID of the product to delete.
     */
    async function deleteOperation(id) {
        let result = await fetch(`http://localhost:8000/api/delete/${id}`, {
            method: "DELETE"
        });

        result = await result.json();
        fetchData();
    }

    /**
     * Navigates to the update page for a specific product.
     * 
     * @param {number} id - The ID of the product to update.
     */
    const handleUpdateClick = (id) => {
        navigate(`/update/${id}`);
    };

    return (
        <div>
            <Header/>
            <div className='col-sm-6 offset-sm-3'>
                <h1>Search Product</h1>
                <br/>
                <input 
                    type='text' 
                    onChange={(e) => search(e.target.value)} 
                    className="form-control" 
                    placeholder='Search Product'
                />

                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>
                                    <img 
                                        style={{width: 100}} 
                                        src={`http://localhost:8000/${item.file_path}`} 
                                        alt={item.name} 
                                    />
                                </td>
                                <td>
                                    <span 
                                        onClick={() => deleteOperation(item.id)} 
                                        className='delete'
                                    >
                                        Delete
                                    </span>
                                </td>
                                <td>
                                    <span 
                                        onClick={() => handleUpdateClick(item.id)} 
                                        className='update'
                                    >
                                        Update
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default SearchProduct;
