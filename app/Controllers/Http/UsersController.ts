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
        const users = await User
        .query()
        .where('status', '1')

        return users;
    }

    public async update ({ request, response }: HttpContextContract){
        const {username,name} = request.only(["name", "username"]);
        const id = request.param('id') //id passado pela route
        const user = await User.findOrFail(id)
        
        if (user.status==1) {
             user.username = username
             user.name = name
            await user.save()
            return user; 
    }
        else 
        return response.status(404).json({message: "Usuário não encontrado."});
        
       
 }


    public async getUserByID ({ request,response }: HttpContextContract){
        const id = request.param('id')
        const user = await User.findOrFail(id)
        user.id = id
        await user.save()
        
        if (user.status == 1) {
            return user;
        }
            else
            return response.status(404).json({message: "Usuário não encontrado."});
    }
  

    public async delete ({ request }: HttpContextContract){
        const id = request.param('id')
        const user = await User.findOrFail(id)
        await user.delete()
       

        return true;

        
    }

    public async deletelog ({ request, response }: HttpContextContract){
       // const {status} = request.only(["status"]);
        const id = request.param('id')
        const user = await User.findOrFail(id)
        
        if (user.status==1) {
            
        
        user.status = 0
        await user.save()
        return true;
    }
        else
        return response.status(404).json({message: "Usuário não encontrado."});

        
    }


}
