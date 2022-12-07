import Route from '@ioc:Adonis/Core/Route'

Route.post('/user', 'User/Main.store')
Route.get('/user', 'User/Main.show').middleware('auth')
Route.put('/user', 'User/Main.update').middleware('auth')
Route.delete('/user', 'User/Main.destroy').middleware('auth')