const express = require('express');
const router = express.Router();

const recipe = require('../controllers/recipeController')

router.get('/',recipe.fetchAllRecipe);

router.get('/:id',recipe.fetchRecipeById);

router.get('/ingredient',recipe.fetchRecipeByIngredient);
router.get('/name',recipe.fetchRecipeByName);

module.exports = router;