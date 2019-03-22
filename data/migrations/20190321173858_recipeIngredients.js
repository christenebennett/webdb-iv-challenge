
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipeIngredients', tbl => {
    tbl.increments();
    tbl.integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipes')
    tbl.integer('ingredient_id')
      .notNullable()
      .references('id')
      .inTable('ingredients')
    tbl.float('qty')
      .notNullable()
      .unsigned();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipeIngredients');
};
