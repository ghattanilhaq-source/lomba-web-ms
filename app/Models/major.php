<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use App\Models\student_work;
use App\Models\teaching_factory;
use App\Models\alumni;
class Major extends Model
{
    protected $fillable = ['name', 'slug', 'description', 'image_path'];

    public function works(): HasMany
    {
        return $this->hasMany(student_work::class);
    }

    public function tefa(): HasOne
    {
        return $this->hasOne(teaching_factory::class);
    }

    public function alumni(): HasMany
    {
        return $this->hasMany(alumni::class);
    }
}
