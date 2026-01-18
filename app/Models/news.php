<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
class news extends Model
{
    protected $fillable = [
        'title', 
        'slug', '
        content', 
        'thumbnail', 
        'user_id'
        ];

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
