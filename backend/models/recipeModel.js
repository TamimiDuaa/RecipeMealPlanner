const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    instruction: String,
    imageURL: String,
    videoURL: String,
    cuisine: String,
    category: {
        type: String,
        enum: ['Breakfast', 'Snacks', 'Lunch', 'Dinner', 'Appetizers', 'Desserts', 'Beverages', 'Salads', 'Soups', 'Seafood', 'Baking']
    },
    ingredients: [{
        name: String,
        quantity: Number,
        category: {
            type: String,
            enum: ['Fruits', 'Grain', 'Vegetables', 'Dairy', 'Chicken', 'Beverages', 'Snacks', 'Frozen', 'Pantry', 'Beef', 'Fish', 'Seafood', 'Dressing']
        },
        unit: {
            type: String,
            enum: ['Cups', 'Tbsp', 'Tsp', 'Pcs'],
            default: 'Pcs'
        }
    }]
},
{
    timestamps: true
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
