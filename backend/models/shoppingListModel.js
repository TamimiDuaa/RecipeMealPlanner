const mongoose = require('mongoose');

const shoppingListSchema = mongoose.Schema({
    ingredient:{
        type: mongoose.Types.ObjectId,
        ref:'Ingredient'
    },
    userId:{
        type: mongoose.Types.ObjectId,
        ref:'User'
    }

})

const ShoppingList = mongoose.model('ShoppingList',shoppingListSchema);

module.exports = ShoppingList;