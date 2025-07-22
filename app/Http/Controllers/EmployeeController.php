<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Employee::all();
        return Inertia::render('Employees/Index', compact('employees'));
    }

    public function create()
    {
        return Inertia::render('Employees/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'is_active' => 'boolean',
        ]);

        Employee::create($validated);

        return redirect()->route('employees.index');
    }

    public function show(Employee $employee)
    {
        return Inertia::render('Employees/Show', compact('employee'));
    }

    public function edit(Employee $employee)
    {
        return Inertia::render('Employees/Edit', compact('employee'));
    }

    public function update(Request $request, Employee $employee)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'is_active' => 'boolean',
        ]);

        $employee->update($validated);

        return redirect()->route('employees.index');
    }

    public function destroy(Employee $employee)
    {
        $employee->delete();
        return redirect()->route('employees.index');
    }
}