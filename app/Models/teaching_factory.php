<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class teaching_factory extends Model
{
    protected $fillable = [
        'major_id', 
        'name', 
        'description'
        ];
    public function major() { return $this->belongsTo(Major::class); }
}
