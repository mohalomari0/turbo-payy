<?php



// app/Models/Tip.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tip extends Model
{
    use HasFactory;

    protected $fillable = ['employee_id', 'amount', 'payment_method', 'date'];
    
    protected $casts = [
        'date' => 'date', // هذا السطر مهم لتحويل الحقل إلى Carbon instance
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}