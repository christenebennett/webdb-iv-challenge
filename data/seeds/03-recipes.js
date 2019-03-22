
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, dish_id: 1, recipe_name: 'Shredded Beef Tacos'},
        {id: 2, dish_id: 2, recipe_name: 'Cacio e Pepe'},
        {id: 3, dish_id: 3, recipe_name: 'Pepperoni Pizza'}
      ]);
    });
};
