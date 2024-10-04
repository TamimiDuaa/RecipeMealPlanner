const mongoose = require('mongoose');

const ingredientSchema = mongoose.Schema({
    name: {
        type:String,
        require: true

    },
    quantity:{
        type:Number,
        min:1,
        default:1
    },
    category: {
        type: String,
        enum: ['Fruits','Grain' ,'Vegetables', 'Dairy', 'Chicken', 'Beverages', 'Snacks', 'Frozen', 'Pantry', 'Beef','Fish','Seafood'],
    },
    unit:{
        type:String,
        enum: ['kg', 'g', 'lb', 'oz', 'L', 'ml', 'pcs', 'pack'],
        default: 'pcs'
    }
})


const ingredient = mongoose.model('Ingredient',ingredientSchema);

module.exports = ingredient;