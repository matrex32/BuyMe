import React from 'react';

import './Global CSS/App.css';
import { Button } from 'react-bootstrap';
import Header from './Global Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login & Register/Login';
import Register from './Login & Register/Register';
import AddProduct from './Product Component/AddProduct';
import UpdateProduct from './Product Component/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
