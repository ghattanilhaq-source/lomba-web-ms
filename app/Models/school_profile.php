<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class school_profile extends Model
{
    protected $fillable = [
        'name', 
        'history', 
        'vision', 
        'mission', 
        'address', 
        'phone', 
        'email', 
        'logo', 
        'maps_url'
    ];
}
