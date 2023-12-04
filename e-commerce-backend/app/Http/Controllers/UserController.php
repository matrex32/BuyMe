<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Handles user registration.
     * 
     * Creates a new user with the provided name, email, and password.
     * The password is hashed before storing it in the database.
     * 
     * @param Request $req The request object containing user input.
     * @return User The newly created user object.
     */
    function register(Request $req) {
        $user = new User;
        $user->name = $req->input('name');
        $user->email = $req->input('email');
        $user->password = Hash::make($req->input('password'));
        $user->save();

        return $user;
    }

    /**
     * Handles user login.
     * 
     * Checks if a user with the given email exists and if the provided
     * password matches the stored hashed password. If authentication
     * fails, returns an error message.
     * 
     * @param Request $req The request object containing user input.
     * @return mixed The user object if authentication is successful, or an error array.
     */
    function login(Request $req) {
        $user = User::where('email', $req->email)->first();
        if (!$user || !Hash::check($req->password, $user->password)) {
            return ["error" => "Incorrect email or password"];
        }
        return $user;
    }
}
