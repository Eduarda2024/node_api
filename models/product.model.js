const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    imageUrl: {
        type: String
    },
    category: {
        type: String
    },
    code: {
        type: String
    },
    userSeller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;