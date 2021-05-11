const inventory = require("./inventory");
const problem4 = (inventory) => {
    
    var years = [];
    for (let i = 0; i < inventory.length; i++) {
      years.push(inventory[i].car_year);
    }
    return years;
  };
  
  module.exports = problem4;
  
  