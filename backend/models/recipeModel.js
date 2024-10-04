const mongoose = require('monogoose');

const recipeSchema = mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    description:String,
    instruction:String,
    imageURL:String,
    videoURL:String,
    cuisine:String,
    category:{
        type:String,
        enum:['Breakfast','Snacks', 'Lunch', 'Dinner','Appetizers','Desserts','Beverages','Salads','Soups','Seafood','Baking']
    },
    ingredientsId:[{
        type: mongoose.Types.ObjectId,
        ref:'Ingredient'        
    }]
})

const recipe = mongoose.model('Recipe',recipeSchema)
module.exports = recipe