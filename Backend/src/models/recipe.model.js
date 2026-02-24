const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    id: String,
    image: String,
    title: String,
    desc: String,
    instructions: String,
    chefName: String,
    ingredients: String,
    difficultyLevel: {
        type: String,
        enum: ['easy', 'medium', 'hard']
    },
    category: String,
    makingTime: String
}, {
    timestamps: true
});

const recipeModel = mongoose.model("recipe", recipeSchema);

module.exports = recipeModel;