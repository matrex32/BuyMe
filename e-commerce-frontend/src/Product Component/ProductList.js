import React, { useState, useEffect } from 'react';
import Header from '../Global Components/Header';
import { Table } from 'react-bootstrap';
import '../Global CSS/App.css';
import {Link} from 'react-router-dom';

function ProductList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        let result = await fetch("http://localhost:8000/api/list");
        result = await result.json();
        setData(result);
    }

    async function deleteOperation(id) {
        let result = await fetch("http://localhost:8000/api/delete/" + id, {
            method: "DELETE"
        });

        result = await result.json();
        console.warn(result)
        fetchData();
    }

    return (
        <div>
            <Header/>
            <h1>Product list</h1>
            <div className="col-sm-8 offset-sm-2">
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
                                <td><img style={{width: 100}} src={"http://localhost:8000/" + item.file_path} alt={item.name} /></td>
                                <td><span onClick={()=> deleteOperation(item.id)} className='delete'>Delete</span></td>
                                <td>
                                    <Link to={"update/"+item.id}>
                                    <span className='update'>Update</span>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default ProductList;
