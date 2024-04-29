function getListStudentIds(arr) {
  // Check if the argument is an array
  if (!Array.isArray(arr)) {
    return [];
  }

  // Use map function to extract ids from the array of objects
  return arr.map((student) => student.id);
}

export default getListStudentIds;
