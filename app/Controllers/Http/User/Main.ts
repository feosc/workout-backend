import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { User }  from 'App/Models'
import { StoreValidator } from 'App/Validators/Auth'

export default class UserController {

  public async store({request, response}: HttpContextContract) {
    const data = request.only([
      'name',
      'email',
      'password',
    ])

    function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    const validadeEmail = validateEmail(data.email)

    if(!validadeEmail){
      return response.status(500).send('Email Invalido')
    }

    const newUser = await User.create(data)
    return newUser
  }

  public async show({auth}: HttpContextContract) {
    const user = auth.user!

    return user
  }

  public async update({ request, auth, response}: HttpContextContract) {
    const user = await User.findBy('id', auth.user!.id)

    const data = request.only([
      'name',
      'email',
      'password',
    ])

    if(user == null){
      return response.status(500).send('Usuário não encontrado')
    }

    user.merge(data)
    await user.save()
    
    return user
  }

  public async destroy({auth, response, request}: HttpContextContract) {
    const user = await User.findBy('id', auth.user!.id)

    if(user == null){
      return response.status(500).send('Usuário não encontrado')
    }

    // else if(auth.user!.password != request.input('password')){
    //   return response.status(401).send('Não autorizado')
    // } 

    await user.delete()
    return user
  }
}
