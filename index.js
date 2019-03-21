const db = require('./data/dbHelpers');

//express server goes here

db.findDishes()
  .then(dishes => {
    console.log('dishes', dishes);
  })
  .catch(error => console.log(error))