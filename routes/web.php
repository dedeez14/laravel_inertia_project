<?php

use Illuminate\Support\Facades\Route;

// Controller
use \App\Http\Controllers\PostController;
use \App\Http\Controllers\PeopleController;
use \App\Http\Controllers\LamanController;
use \App\Http\Controllers\ContentController;
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
// Laman
Route::get('/', [LamanController::class, 'index']);
Route::get('/news', [LamanController::class, 'news']);
Route::get('/about-us', [LamanController::class, 'about']);


// Admin Panel
Route::resource('/content', ContentController::class);
Route::resource('/posts', PostController::class);
Route::resource('/people', PeopleController::class);
