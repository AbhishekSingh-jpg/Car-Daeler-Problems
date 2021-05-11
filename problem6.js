const inventory = require("./inventory");
const problem6 = (inventory) => {
    
    const arr = [];
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].car_make ==='BMW' || inventory[i].car_make==='Audi' ) {
          arr.push(inventory[i]);
        }
      }
      return arr;
    }
  
    

  
  module.exports = problem6;
  
  