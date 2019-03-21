
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();
    tbl.string('recipe_name')
      .notNullable()
      .unique();
    tbl.integer('dish_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('dishes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.integer('ingredient_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('ingredients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.integer('recipe_ingredient_qty')
      .notNullable()
      .unsigned()
    })
};

exports.down = function(knex, Promise) {
  
};
