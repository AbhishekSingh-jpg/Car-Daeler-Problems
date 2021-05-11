
var inventory = require("./inventory");

const problem3 = (inventory) => {
    var sorted_inventory=inventory.slice(0,)
    sorted_inventory.sort((a, b) => {
      var nameA = a.car_model.toUpperCase();
      var nameB = b.car_model.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
  
      
      return 0;
    });
    console.log(sorted_inventory)
  };
  
  module.exports = problem3;
  
  