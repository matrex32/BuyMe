import React from 'react';

import './Global CSS/App.css';
import { Button } from 'react-bootstrap';
import Header from './Global Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login & Register/Login';
import Register from './Login & Register/Register';
import AddProduct from './Product Component/AddProduct';
import UpdateProduct from './Product Component/UpdateProduct';
import Protected from './Protected/Protected';
import ProductList from './Product Component/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<Protected Cmp={AddProduct} />} />
          <Route path="/update" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
