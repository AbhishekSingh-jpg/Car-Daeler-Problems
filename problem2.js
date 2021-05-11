const inventory = require("./inventory");

const problem2 = (inventory) => {
    console.log(`Last car is a ${inventory[inventory.length-1]["car_make"]} ${inventory[inventory.length-1]["car_modal"]}`)
  };
  
  module.exports = problem2;

  
  