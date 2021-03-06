<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index');

// Task
Route::get('/tasks', 'TaskController@index');
Route::post('/task', 'TaskController@store');
Route::delete('/task/{task}', 'TaskController@destroy');

// React ** DEPRECATE **
Route::get('/react/tasks', function () {
    return view('react');
});

// Flux
Route::get('/flux/tasks', function () {
    return view('flux');
});

Route::get('/flux/contact', function () {
    return view('flux');
});

Route::get('/flux/about', function () {
    return view('flux');
});
