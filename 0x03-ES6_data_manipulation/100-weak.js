// Define a new WeakMap to track the number of queries for each endpoint
const weakMap = new WeakMap();

// Define the queryAPI function
function queryAPI(endpoint) {
  // Retrieve the current count for the endpoint from the WeakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the count by 1
  count += 1;

  // Update the count in the WeakMap
  weakMap.set(endpoint, count);

  // Check if the number of queries is greater than or equal to 5
  if (count >= 5) {
    // If so, throw an error
    throw new Error('Endpoint load is high');
  }
}

// Export the weakMap and queryAPI function
export { weakMap, queryAPI };
