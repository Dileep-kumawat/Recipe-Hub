const ImageKit = require('@imagekit/nodejs');
const { toFile } = require("@imagekit/nodejs");
const recipeModel = require('../models/recipe.model');

const client = new ImageKit({
    privateKey: process.env['IMAGEKIT_PRIVATE_KEY'],
});

async function createRecipeController(req, res) {
    const { id, title, desc, instructions, chefName, ingredients, difficultyLevel, category, makingTime } = req.body;
    const image = req.file;

    const requiredFields = {
        id,
        title,
        desc,
        instructions,
        chefName,
        ingredients,
        difficultyLevel,
        category,
        makingTime,
        image
    };

    const missingFields = Object.entries(requiredFields)
        .filter(([_, value]) => !value)
        .map(([key]) => key);

    if (missingFields.length > 0) {
        return res.status(400).json({
            msg: "Fields not completed",
            missingFields
        });
    }

    try {
        const response = await client.files.upload({
            file: await toFile(Buffer.from(image.buffer), 'file'),
            fileName: `${title}-${Date.now()}`,
            folder: "Recipe-Hub"
        });

        const recipe = await recipeModel.create({
            id,
            image: response.url,
            title,
            desc,
            instructions,
            chefName,
            ingredients,
            difficultyLevel,
            category,
            makingTime
        });

        return res.status(201).json({
            msg: "Created a recipe",
            recipe
        });

    } catch (error) {
        return res.status(500).json({
            msg: "Something went wrong",
            error: error.message
        });
    }
}

async function fetchRecipesController(req, res) {
    try {
        const recipes = await recipeModel.find();

        res.status(200).json({
            "msg": "All recipes are fetched",
            recipes
        });
    } catch (error) {
        return res.status(500).json({
            msg: "Something went wrong",
            error: error.message
        });
    }
}

async function updateRecipeController(req, res) {
    const { title, desc, instructions, chefName, ingredients, difficultyLevel, category, makingTime } = req.body;

    const allFields = {
        title,
        desc,
        instructions,
        chefName,
        ingredients,
        difficultyLevel,
        category,
        makingTime
    };

    const updateFields = {};

    const updateKeys = Object.entries(allFields)
        .filter(([_, value]) => value)
        .map(([key]) => key);

    updateKeys.forEach(key => {
        updateFields[key] = allFields[key];
    })

    try {
        const updatedRecipe = await recipeModel.findOneAndUpdate(
            { id: req.params.id },
            updateFields,
            { returnDocument: 'after' }
        );

        if (updatedRecipe.matchedCount <= 0) {
            return res.status(404).json({
                "msg": "Recipe not found"
            });
        }

        if (updatedRecipe.modifiedCount <= 0) {
            return res.status(200).json({
                "msg": "Nothing to modify"
            });
        }

        res.status(200).json({
            "msg": "The recipe is updated successfully",
            updatedRecipe
        });
    } catch (error) {
        return res.status(500).json({
            msg: "Something went wrong",
            error: error.message
        });
    }
}

async function getRecipeDetailsController(req, res) {
    try {
        const recipe = await recipeModel.findOne({ id: req.params.id });

        if (!recipe) {
            return res.status(404).json({
                "msg": "The recipe not found"
            });
        }
        res.status(200).json({
            "msg": "The recipe is fetched",
            recipe
        });
    } catch (error) {
        return res.status(500).json({
            msg: "Something went wrong",
            error: error.message
        });
    }
}

module.exports = {
    createRecipeController,
    fetchRecipesController,
    updateRecipeController,
    getRecipeDetailsController
}