class HolbertonCourse {
  constructor(name, length, students) {
    // Verify the type of attributes
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    if (!Array.isArray(students) || students.some(student => typeof student !== 'string')) {
      throw new TypeError('students must be an array of strings');
    }    
    // Store attributes
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = value;
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = value;
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(value) {
    if (!Array.isArray(value) || value.some(student => typeof student !== 'string')) {
      throw new TypeError('students must be an array of strings');
    }
    this._students = value;
  }
}

export default HolbertonCourse;
