function cleanSet(set, startString) {
  let result = '';
  // Iterate over each element in the set
  for (const value of set) {
    // Check if the element starts with startString
    if (value.startsWith(startString)) {
      // Append the rest of the string to the result using template literal
      result += `${value.slice(startString.length)}-`;
    }
  }
  // Remove the trailing '-' and return the result
  return result.slice(0, -1);
}

export default cleanSet;
