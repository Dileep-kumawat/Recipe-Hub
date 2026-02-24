const express = require("express");
const { createRecipeController, fetchRecipesController, updateRecipeController, getRecipeDetailsController } = require("../controllers/recipe.controller");

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const recipeRouter = express.Router();

/**
 * @route POST api/recipes/create
 * @description This api helps in creating a new recipe
 */
recipeRouter.post('/create', upload.single("image"), createRecipeController);

/**
 * @route GEt api/recipes/
 * @description This api helps in Fetching all the recipes from the database
 */
recipeRouter.get('/', fetchRecipesController);

/**
 * @route PATCH api/recipes/update/:id
 * @description This api helps in updating an recipe
 */
recipeRouter.patch('/update/:id', updateRecipeController);

/**
 * @route GET api/recipes/recipe/:id
 * @description This api helps in fetching an required recipe details
 */
recipeRouter.get('/recipe/:id', getRecipeDetailsController);

module.exports = recipeRouter;