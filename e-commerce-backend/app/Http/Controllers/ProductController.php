<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Adds a new product to the database.
     * 
     * @param Request $req
     * @return Product The newly created product.
     */
    function addProduct(Request $req) {
        
        $product = new Product();
        $product->name = $req->input('name');
        $product->price = $req->input('price');
        $product->description = $req->input('description');
        $product->file_path = $req->file('file')->store('products');
        $product->save();

        return $product;
    }

    /**
     * Retrieves a list of all products.
     * 
     * @return \Illuminate\Database\Eloquent\Collection
     */
    function list() {
        return Product::all();
    }

    /**
     * Deletes a product based on the provided ID.
     * 
     * @param int $id The ID of the product to delete.
     * @return array Result of the deletion.
     */
    function delete($id) {
        $result = Product::where('id', $id)->delete();
        if ($result) {
            return ["result" => "Product has been deleted"];
        } else {
            return ["result" => "This product doesn't exist"];
        }
    }

    /**
     * Retrieves a single product by its ID.
     * 
     * @param int $id The ID of the product.
     * @return Product|null
     */
    function getProduct($id) {
        return Product::find($id);
    }

    /**
     * Searches for products by a given key in their names.
     * 
     * @param string $key The search key.
     * @return \Illuminate\Database\Eloquent\Collection
     */
    function search($key) {
        return Product::where('name', 'LIKE', "%$key%")->get();
    }
}
