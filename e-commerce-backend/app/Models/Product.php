<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * The Product model.
 *
 * Represents a product entity in the database. This model uses Eloquent,
 * Laravel's default ORM, for interacting with the database.
 * The HasFactory trait is included to enable the use of factories for testing and seeding.
 */
class Product extends Model
{
    use HasFactory;
}
