<?php

// app/Http/Controllers/TipController.php
namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Tip;
use App\Models\Employee;
use Illuminate\Http\Request;

class TipController extends Controller
{
    public function index()
    {
        $tips = Tip::with('employee')->latest()->paginate(10);
        return Inertia::render('Tips/Index', compact('tips'));
    }

    public function create()
    {
        $employees = Employee::active()->get();
        return Inertia::render('Tips/Create', compact('employees'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'employee_id' => 'required|exists:employees,id',
            'amount' => 'required|numeric|min:0',
            'payment_method' => 'required|string',
            'date' => 'required|date',
        ]);

        Tip::create($validated);

        return redirect()->route('tips.index');
    }

    public function show(Tip $tip)
    {
        return Inertia::render('Tips/Show', compact('tip'));
    }

    public function edit(Tip $tip)
    {
        $employees = Employee::active()->get();
        return Inertia::render('Tips/Edit', compact('tip', 'employees'));
    }

    public function update(Request $request, Tip $tip)
    {
        $validated = $request->validate([
            'employee_id' => 'required|exists:employees,id',
            'amount' => 'required|numeric|min:0',
            'payment_method' => 'required|string',
            'date' => 'required|date',
        ]);

        $tip->update($validated);

        return redirect()->route('tips.index');
    }

    public function destroy(Tip $tip)
    {
        $tip->delete();
        return redirect()->route('tips.index');
    }
}