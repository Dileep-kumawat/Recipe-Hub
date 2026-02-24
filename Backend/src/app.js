const express = require("express");
const recipeRouter = require("./routes/recipe.route");

const app = express();

app.use(express.json());

/**
 * Recipe Routes
 */
app.use("/api/recipes", recipeRouter);

module.exports = app;