function getStudentIdsSum(students) {
  // Use reduce function to calculate the sum of student ids
  return students.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;
