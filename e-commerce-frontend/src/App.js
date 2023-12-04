import React from 'react';

import './Global CSS/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Global Components/Header';
import Login from './Login & Register/Login';
import Register from './Login & Register/Register';
import AddProduct from './Product Component/AddProduct';
import UpdateProduct from './Product Component/UpdateProduct';
import Protected from './Protected/Protected';
import ProductList from './Product Component/ProductList';
import SearchProduct from './Product Component/SearchProduct';

/**
 * The main application component.
 * 
 * This component sets up the router and defines the routes for the application.
 * It includes routes for login, registration, adding, updating, and searching products.
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Route for displaying the list of products */}
          <Route path="/" element={<ProductList />} />

          {/* Route for user login */}
          <Route path="/login" element={<Login />} />

          {/* Route for user registration */}
          <Route path="/register" element={<Register />} />

          {/* Protected route for adding a product */}
          <Route path="/add" element={<Protected Cmp={AddProduct} />} />

          {/* Protected route for searching products */}
          <Route path="/search" element={<Protected Cmp={SearchProduct} />} />

          {/* Route for updating a product */}
          <Route path="/update/:id" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
