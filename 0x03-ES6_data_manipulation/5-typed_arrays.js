function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Check if the position is within the range of the ArrayBuffer
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a DataView object to access and manipulate the bytes within the ArrayBuffer
  const view = new DataView(buffer);

  // Set the Int8 value at the specified position
  view.setInt8(position, value);

  return view;
}

export default createInt8TypedArray;
