const express = require('express');
const router = express.Router();

const recipe = require('../controllers/recipeController')

router.get('/',recipe.fetchAllRecipe);
router.get('/ingredient',recipe.fetchRecipeByIngredient);
router.get('/name',recipe.fetchRecipeByName);
router.get('/:id',recipe.fetchRecipeById);

module.exports = router;