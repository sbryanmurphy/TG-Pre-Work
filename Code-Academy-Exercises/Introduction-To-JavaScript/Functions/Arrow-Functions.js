const plantNeedsWater = function(day) {
  if(day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));

// this section introduced us to the arrow function and its syntax. The arrow funciton is a shorter way to write a function
