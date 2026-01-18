<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class student_work extends Model
{
    protected $fillable = [
        'major_id', 
        'title', 
        'description', 
        'image_path', 
        'student_name'
        ];
    public function major() { return $this->belongsTo(Major::class); }
}
