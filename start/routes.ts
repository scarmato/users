/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.post ("/users", "UsersController.create")
Route.get ("/users", "UsersController.index")
Route.get ("/users/:id", "UsersController.getUserByID")
Route.put ("/users/:id", "UsersController.update") 
Route.delete ("/users/:id", "UsersController.delete")
Route.put ("/users/del/:id", "UsersController.deletelog")



