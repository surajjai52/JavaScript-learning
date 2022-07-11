let animal = {
    eats: true
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  
  console.log(Object.keys(rabbit)); 
  
  // for..in loops over both own and inherited keys
  for(let prop in rabbit) console.log(prop); 