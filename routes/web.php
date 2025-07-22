<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\TipController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// الصفحة الرئيسية (Dashboard)
Route::get('/', [DashboardController::class, 'index'])
    ->name('dashboard');

// مسارات الموظفين (Employees)
Route::resource('employees', EmployeeController::class)
    ->except(['show']); // يمكنك إزالة except إذا كنت تريد صفحة العرض

// مسارات الباقات (Tips)
Route::resource('tips', TipController::class);

// (اختياري) إذا أردت إضافة مسارات إضافية للتقارير
Route::prefix('reports')->group(function () {
    Route::get('tips-export', [TipController::class, 'export'])
        ->name('tips.export');
    Route::get('employees-export', [EmployeeController::class, 'export'])
        ->name('employees.export');
});

// (اختياري) إذا كنت تستخدم نظام المصادقة
// Auth::routes();

// (اختياري) صفحة الرئيسية بعد التسجيل
// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])
//     ->name('home');