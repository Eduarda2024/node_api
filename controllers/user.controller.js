const User = require("../models/user.model")
exports.getUsers = async (request, response) =>{
    try {
      
        const { name } = request.query
        let data;
        if(name) { 
            data = await User.find({
             name: { '$regex': `.*${name}.*`, '$options': 'i' }
            }) 
        } else {
            data = await User.find({})
        }
       
        response.send(data);
    } catch (error) {
        return response.status(400).send({message: error.message}) 
    }    
}

exports.getUser = async (request, response) => {
    try {
        const id = request.params.id;
        const data = await User.findById(id);
        if(!data){
            response.status(404).send("Usuario nao encontrado!");
        }
        return response.send(data);
    } catch (error) {
        return response.status(400).send({message: error.message})
    } 
}

exports.createUser = async (request, response) => {
    try {
        const data = request.body;
        const user = await User.create(data);
        response.send(user);
      
    } catch (error){
        return response.status(400).send({message: error.message});
    }
}

exports.updateUser =  async (request, response) => {
    try {
        const data = request.body;
        const id = request.params.id;
        const updateUser = await User.findByIdAndUpdate(id, data);
        if(!updateUser){
            return response.status(404).send ("Usuario nao encontrado!");
        } 
        return response.send("Usuario atualizado com sucesso!");
    } catch (error){
        return response.status(400).send({message: error.message});
    }
}

exports.deleteUser = async (request, response) => {
    try {
        const id = request.params.id;
        const data = await User.findByIdAndDelete(id);
        if (!data){
            return response.status(404).send ("Usuario nao encontrado!");
        } 
        response.send({message: "Usuario removido com sucesso"});
    } catch (error){
        return response.status(400).send({message: error.message});
    }
}