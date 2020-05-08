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
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.group(() => {
    Route.get('test', 'UserController.test') // .middleware(['auth'])
    Route.post('register', 'Auth/RegisterController.register')
}).prefix('api')

Route.any('*', 'NuxtController.render')
