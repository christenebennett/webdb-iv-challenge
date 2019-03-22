
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'taco shells'},
        {id: 2, ingredient_name: '8 oz spaghetti noodles'},
        {id: 3, ingredient_name: 'cups of flour'},
        {id: 4, ingredient_name: 'cups of shredded beef'},
        {id: 5, ingredient_name: 'cup of shredded cheddar cheese'},
        {id: 6, ingredient_name: 'tsp of ground black pepper'}
      ]);
    });
};
