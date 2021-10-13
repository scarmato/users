import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User';





 export default class UsersController {
    public async create({ request }: HttpContextContract){
        const {username,name} = request.only(["name", "username"]);

       const user =  await User.create({
            username,
            name,

        })

   
        return user;
    }

    public async index(){
        const user = await User
        .query()
        .where('status', '1')

        return user;
    }

    public async update ({ request }: HttpContextContract){
        const {username,name} = request.only(["name", "username"]);

        const id = request.param('id') //id passado pela route
        const user = await User.findOrFail(id)
        
        user.username = username
        user.name = name
        

        await user.save()
        

        return user;
        

    }


    public async getUserByID ({ request }: HttpContextContract){
        const id = request.param('id')
        const user = await User.findOrFail(id)
        user.id = id
        await user.save()
        
        if (user.status == 1) {
            return user;
        }
            else
            return 'ERROR';
    }
  

    public async delete ({ request }: HttpContextContract){
        const id = request.param('id')
        const user = await User.findOrFail(id)
        await user.delete()
       //await User.query().where('is_verified', false).delete()

        return true;

        
    }

    public async deletelog ({ request }: HttpContextContract){
        const {status} = request.only(["status"]);
        const id = request.param('id')
        const user = await User.findOrFail(id)
        
        user.status = status
        await user.save()
        
       //await User.query().where('is_verified', false).delete()

        return true;

        
    }


}
