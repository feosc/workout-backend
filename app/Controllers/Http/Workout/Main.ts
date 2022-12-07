import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class WorkoutController {
  public async store({auth, request}: HttpContextContract) {]
    const data = request.only([
      'name',
      'password',
      'day_of_the_week_fk'
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
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
