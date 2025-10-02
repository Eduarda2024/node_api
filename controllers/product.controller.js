const Product = require("../models/product.model")
exports.getProducts = async (request, response) =>{
    try {
        const { name } = request.query
        let data;
        if(name){
            data = await Product.find({
                name: { '$regex': `.*${name}.*`, '$options': 'i'}
            })
        }else{
            data = await Product.find({})
        }
        response.send(data);
    } catch (error) {
        return response.status(400).send({message: error.message})

    }
}

exports.getProduct = async (request, response) => {
    try{
        const id = request.params.id;
        const data = await Product.findById(id);
        if(!data){
            response.status(404).send("Produto na encontrado");
        }
        return response.send(data);
    } catch (error) {
        return response.status(400).send({messagem: errror.message})
    }
}

exports.createProduct = async (request, response) => {
    try{
        const data = request.body;
        const product = await Product.create(data);
        response.send(product);
    } catch (error) {
        return response.status(400).send({message: error.message});
    }
}

exports.updateProduct = async (request, response) => {
    try {
        const data = request.body;
        const id = request.params.id;
        const updateProduct = await Product.findByIdAndUpdate(id, data);
        if(!updateProduct) {
            return response.status(404).send ("Produto nao encontrado!");
        }
        return response.send("Produto atualizado com sucesso!");
    } catch (error){
        return response.status(400).send({message: error.message});
    }
}

exports.deleteProduct = async (request, response) => {
    try{
        const id = request.params.id;
        const data  = await Product.findByIdAndDelete(id);
        if(!data){
            return response.status(404).send ("Produto nao encontrado!");
        }
        response.send("Produto deletado");
    } catch (error) {
        return response.status(400).send({message: error.message});
    }
}