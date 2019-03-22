const db = require('./data/dbHelpers');

//express server goes here

// db.getDishes()
//   .then(dishes => {
//     console.log('dishes', dishes);
//   })
//   .catch(error => console.log(error))

// db.getDish(2)
//   .then(dish => {
//     console.log('dish', dish);
//   })
//   .catch(error => console.log(error))

// db.addDish({name: 'stir fry'})
//   .then(dish => {
//     console.log('new dish', dish)
//   })
//   .catch (error => console.log(error));

// db.getRecipes()
//   .then(dishes => {
//     console.log('dishes', dishes);
//   })
//   .catch(error => console.log(error))

// db.addRecipe({dish_id: 2, recipe_name: 'Spaghetti and Meatballs', instructions: 'Cook pasta. Cook meatballs.'})
//   .then(recipe => {
//     console.log('new recipe', recipe)
//   })
//   .catch (error => console.log(error));

// db.findRecipeIngredients(1)
//   .then(ingredients => {
//     console.log('ingredients', ingredients);
//   })
//   .catch(error => console.log(error))

// db.addIngredient({ingredient_name: 'shredded beef'})
//   .then(ingredient => {
//     console.log('added ingredient', ingredient);
//   })
//   .catch(error => console.log(error));

// db.addRecipeIngredient({recipe_id: 1, ingredient_id: 4, qty: 2})
//   .then(ingredient => {
//     console.log('added ingredient', ingredient);
//   })
//   .catch(error => console.log(error));

db.getRecipeIngredients(1)
  .then(ingredients => {
    console.log('ingredients', ingredients)
  })
  .catch(error => console.log(error));

