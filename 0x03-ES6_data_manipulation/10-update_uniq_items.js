function updateUniqueItems(map) {
  // Check if the argument is a map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over each entry in the map
  for (const [item, quantity] of map) {
    // Check if the quantity is 1
    if (quantity === 1) {
      // Update the quantity to 100
      map.set(item, 100);
    }
  }
}

export default updateUniqueItems;
