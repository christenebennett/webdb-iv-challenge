const knex = require('knex');

const dbConfig = require('../knexfile');

const db = knex(dbConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe,
  findRecipeIngredients,
  addIngredient,
  addRecipeIngredient,
  getRecipeIngredients
}
  // getDishes(): should return a list of all dishes in the database.
  function getDishes() {
    return db('dishes');
  }

// addDish(dish): should add the dish to the database and return the id of the new dish.
  function addDish(dish) {
    return db('dishes')
      .insert(dish)
      .then(ids => ({id: ids[0]}));
  }

// getDish(id): should return the dish with the provided id and include a list of the related recipes.
function getDish(id) {
  return db('dishes')
    .where({id: Number(id)})
}
// getRecipes(): should return a list of all recipes in the database including the dish they belong to.
function getRecipes() {
  return db('recipes');
}

// addRecipe(recipe): should add a recipe to the database and return the id of the new recipe.
function addRecipe(recipe) {
  return db('recipes')
    .insert(recipe)
    .then(ids => ({id: ids[0]}));
}

// find all ingredients for given recipe id
function findRecipeIngredients(recipeId) {
  return db.select('recipe_id', 'ingredient_id')
    .from('recipeIngredients')
    .where({recipe_id: recipeId})
}

// add ingredients
function addIngredient(ingredient) {
  return db('ingredients')
    .insert(ingredient)
    .then(ids => ({id: ids[0]}));
}

// add ingredient to recipe
function addRecipeIngredient(ingredient) {
  return db('recipeIngredients')
    .insert(ingredient)
    .then(ids => ({id: ids[0]}));
}

// list recipe ingredients
function getRecipeIngredients(recipeId) {
  return db.select('recipes.recipe_name', 'ingredients.ingredient_name')
    .from('recipes')
    // .where({id: Number(recipeId)})
    .innerJoin('recipeIngredients', 'recipes.id', 'recipeIngredients.recipe_id')
    .innerJoin('ingredients', 'ingredients.id', 'recipeIngredients.ingredient_id')
}