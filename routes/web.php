<?php

use App\Http\Controllers\Pokemon;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [ Pokemon::class, 'pokemonPage']);
Route::get('/pokemon/list',[Pokemon::class, 'getList']);
Route::get('/pokemon/list/detail/{url}',[Pokemon::class, 'getListDetail']);
Route::get('/pokemon/types',[Pokemon::class, 'getTypes']);
Route::get('/pokemon/list/types/{type}',[Pokemon::class, 'getListByTypes']);
Route::get('/pokemon/generations',[Pokemon::class, 'getGeneration']);
Route::get('/pokemon/list/generations/{generation}',[Pokemon::class, 'getListByGeneration']);