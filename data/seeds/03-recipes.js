
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, dish_id: 1, recipe_name: 'Shredded Beef Tacos', instructions: 'Cook beef. Insert into taco shells.'},
        {id: 2, dish_id: 2, recipe_name: 'Cacio e Pepe', instructions: 'Boil water. Cook spaghetti noodles. Add pepper and cheese.'},
        {id: 3, dish_id: 3, recipe_name: 'Pepperoni Pizza', instructions: 'Make dough with flour and water. Add toppings. Bake in oven.'},
        {id: 4, dish_id: 3, recipe_name: 'Cheesy Beef Pizza', instructions: 'Make dough with flour and water. Add toppings. Bake in oven.'}
      ]);
    });
};
