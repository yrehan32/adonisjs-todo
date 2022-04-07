'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')
Route.get('/', 'TodoController.index').as('todos.index')

Route.get('/todos', 'TodoController.index').as('todos.index')

Route.get('/todos/create', 'TodoController.create').as('todos.create')
Route.post('/todos/store', 'TodoController.store').as('todos.store')

Route.get('/todos/edit/:id', 'TodoController.edit').as('todos.edit')
Route.post('/todos/update/:id', 'TodoController.update').as('todos.update')

Route.get('/todos/delete/:id', 'TodoController.delete').as('todos.delete')

// API
Route.group(() => {
    Route.get('/get-data', 'TodoController.getData').as('todos.data')
    Route.post('/get-data-by-id', 'TodoController.getDataById').as('todos.dataById')
    Route.post('/insert-data', 'TodoController.insertData').as('todos.insertData')
}).prefix('/api/v1')