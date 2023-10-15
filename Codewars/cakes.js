function cakes(recipe, available) {
  const ingredients = Object.keys(recipe);
  // Initialize with a large value to ensure it's greater than or equal to the first calculation
  let minCakes = Infinity;
  for (let ingredient of ingredients) {
    if (
      !(ingredient in available) ||
      available[ingredient] < recipe[ingredient]
    ) {
      // If the ingredient is missing or not enough, return 0 cakes
      return 0;
    }
    // Calculate the possible number of cakes based on the current ingredient
    const possibleCakes = Math.floor(
      available[ingredient] / recipe[ingredient]
    );
    // Update minCakes if the current ingredient allows for fewer cakes
    minCakes = Math.min(minCakes, possibleCakes);
  }
  return minCakes;
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
