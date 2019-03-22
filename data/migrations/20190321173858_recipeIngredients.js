
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipeIngredients', tbl => {
    tbl.primary('recipe_id', 'ingredient_id');
    tbl.integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.integer('ingredient_id')
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.float('qty')
      .notNullable()
      .unsigned();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipeIngredients');
};
