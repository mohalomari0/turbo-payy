<?php

// database/factories/EmployeeFactory.php
namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    public function definition()
    {
        $roles = ['Barber', 'Stylist', 'Senior Barber', 'Apprentice'];
        
        return [
            'name' => $this->faker->name(),
            'role' => $this->faker->randomElement($roles),
            'is_active' => $this->faker->boolean(90),
        ];
    }
}