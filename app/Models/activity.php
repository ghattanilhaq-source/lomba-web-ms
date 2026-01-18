<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class activity extends Model
{
    protected $fillable = [
        'name', 
        'type', 
        'description', 
        'image_path'
        ];

    public function scopeExtracurricular($query) {
        return $query->where('type', 'extracurricular');
    }

    public function scopeOrganization($query) {
        return $query->where('type', 'organization');
    }
}
