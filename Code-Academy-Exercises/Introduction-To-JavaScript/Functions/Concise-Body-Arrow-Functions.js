const plantNeedsWater = function(day) {
  if(day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));

//learned about the concise body arrow function, which, just as you'd imagine from the name, is a more concise way to write the arrow function
