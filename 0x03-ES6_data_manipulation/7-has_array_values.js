function hasValuesFromArray(set, array) {
  // Iterate over each element in the array
  for (const element of array) {
    // Check if the element exists in the set
    if (!set.has(element)) {
      return false;
    }
  }
  // If all elements exist in the set, return true
  return true;
}

export default hasValuesFromArray;
