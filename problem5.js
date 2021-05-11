const inventory = require("./inventory");
const problem5 = (inventory) => {
    var no_of_cars=0;
    
    for (let i = 0; i < inventory.length; i++) {
        if(inventory[i].car_year<2000){
            no_of_cars+=1
        };
    }
    return no_of_cars;
  };
  
  module.exports = problem5;
 