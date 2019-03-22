const db = require('./data/dbHelpers');

//express server goes here

db.getDishes()
  .then(dishes => {
    console.log('dishes', dishes);
  })
  .catch(error => console.log(error))

db.getDish(2)
  .then(dish => {
    console.log('dish', dish);
  })