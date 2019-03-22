
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipeIngredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipeIngredients').insert([
        {recipe_id: 1, ingredient_id: 1, qty: 8},
        {recipe_id: 2, ingredient_id: 2, qty: 8},
        {recipe_id: 3, ingredient_id: 3, qty: 3},
        {recipe_id: 1, ingredient_id: 4, qty: 2},
        {recipe_id: 1, ingredient_id: 5, qty: 1},
        {recipe_id: 1, ingredient_id: 6, qty: 1},
        {recipe_id: 4, ingredient_id: 3, qty: 3},
        {recipe_id: 4, ingredient_id: 4, qty: 1},
        {recipe_id: 4, ingredient_id: 5, qty: 2},
      ]);
    });
};
