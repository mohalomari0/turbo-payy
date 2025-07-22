<?php

// database/factories/TipFactory.php
namespace Database\Factories;

use App\Models\Employee;
use Illuminate\Database\Eloquent\Factories\Factory;

class TipFactory extends Factory
{
    public function definition()
    {
        $methods = ['card', 'google_pay', 'apple_pay', 'cash'];
        
        return [
            'employee_id' => Employee::factory(),
            'amount' => $this->faker->numberBetween(5, 100),
            'payment_method' => $this->faker->randomElement($methods),
            'date' => $this->faker->dateTimeBetween('-1 month', 'now'),
        ];
    }
}