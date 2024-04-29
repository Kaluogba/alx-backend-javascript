function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by city
  const filteredStudents = students.filter((student) => student.location === city);

  // Map over the filtered students array and update their grades
  return filteredStudents.map((student) => {
    const newGradeObj = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: newGradeObj ? newGradeObj.grade : 'N/A',
    };
  });
}

export default updateStudentGradeByCity;
