const Recipe = require('../models/recipeModel');

// Fetch all recipes
const fetchAllRecipe = async (req, res) => {
    try {
        const allRecipes = await Recipe.find(); 
        res.status(200).json({ success: true, recipes: allRecipes });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch recipes', error: error.message });
    }
};

// Fetch a recipe by its ID
const fetchRecipeById = async (req, res) => {
    try {
        const recipeId = req.params.id;
        const recipe = await Recipe.findById(recipeId);
        console.log("1");
        if (!recipe) {
            console.log("2");
            return res.status(404).json({ success: false, message: 'Recipe not found' });
        }
        console.log("3");
        res.status(200).json({ success: true, recipe: recipe });

    } catch (error) {
        console.log("4");
        res.status(500).json({ success: false, message: 'Failed to fetch recipe', error: error.message });
    }
};

// Fetch recipes by ingredient name
const fetchRecipeByIngredient = async (req, res) => {
    try {
        const ingredientName = req.query.ingredient; 
        const recipes = await Recipe.find({name:ingredientName});
        if (!recipes.length) {
            return res.status(404).json({ success: false, message: 'No recipes found with that ingredient' });
        }
        res.status(200).json({ success: true, recipes: recipes });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch recipes', error: error.message });
    }
};

// Fetch recipes by recipe name
const fetchRecipeByName = async (req, res) => {
    try {
        const recipeName = req.query.name; 
        const recipes = await Recipe.find({
            name: recipeName
        });
        if (!recipes.length) {
            return res.status(404).json({ success: false, message: 'No recipes found with that name' });
        }
        res.status(200).json({ success: true, recipes: recipes });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch recipes', error: error.message });
    }
};

module.exports = {
    fetchAllRecipe,
    fetchRecipeById,
    fetchRecipeByName,
    fetchRecipeByIngredient
};
