<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Returns the authenticated user's details
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// User registration
Route::post('register', [UserController::class, 'register']);

// User login
Route::post('login', [UserController::class, 'login']);

// Adds a new product
Route::post('addproduct', [ProductController::class, 'addProduct']);

// Retrieves a list of all products
Route::get('list', [ProductController::class, 'list']);

// Deletes a product by ID
Route::delete('delete/{id}', [ProductController::class, 'delete']);

// Retrieves a single product by ID
Route::get('product/{id}', [ProductController::class, 'getProduct']);

// Searches for products by a key in their names
Route::get('search/{key}', [ProductController::class, 'search']);
