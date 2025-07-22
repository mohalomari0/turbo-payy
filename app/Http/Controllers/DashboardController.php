<?php

// app/Http/Controllers/DashboardController.php
namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Employee;
use App\Models\Tip;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DashboardController extends Controller
{
public function index()
{
    return inertia('Dashboard', [
        'metrics' => [
            'todayTips' => Tip::whereDate('date', today())->count(),
            'totalTipsAmount' => Tip::sum('amount'),
            'activeEmployees' => Employee::where('is_active', true)->count(),
            'recentTipsCount' => Tip::whereDate('date', '>=', now()->subDays(7))->count(),
        ],
        'topEmployees' => Employee::withSum('tips', 'amount')
            ->orderBy('tips_sum_amount', 'desc')
            ->take(5)
            ->get(),
        'recentTips' => Tip::with('employee')
            ->latest()
            ->take(5)
            ->get(),
        'chartData' => Tip::select(
                DB::raw('DATE(date) as date'),
                DB::raw('SUM(amount) as total_amount')
            )
            ->whereDate('date', '>=', now()->subDays(10))
            ->groupBy('date')
            ->orderBy('date')
            ->get()
            ->pluck('total_amount', 'date')
    ]);
}

    private function formatPaymentMethod($method)
    {
        $methods = [
            'card' => 'Pay by card',
            'google_pay' => 'Google Pay',
            'apple_pay' => 'Apple Pay',
            'cash' => 'Cash',
        ];

        return $methods[$method] ?? ucfirst(str_replace('_', ' ', $method));
    }
}