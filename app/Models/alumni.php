<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class alumni extends Model
{
    protected $fillable = [
        'major_id', 
        'name', 
        'graduation_year', 
        'job', 
        'testimonial', 
        'image_path'];

    public function major(): BelongsTo
    {
        return $this->belongsTo(Major::class);
    }
}
