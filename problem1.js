const inventory = require("./inventory");
const problem1 = (inventory) => {
    console.log(
        `"Car 33 is a ${inventory[33].car_year} ${inventory[33].car_make} ${inventory[33].car_model}"`)
    
  };
  
  module.exports = problem1;
  
  