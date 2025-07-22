<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'role', 'is_active', 'avatar'];

    public function tips()
    {
        return $this->hasMany(Tip::class);
    }
}