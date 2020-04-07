class Main {
  constructor() {
    this.students = [];
  }

  // get students() { //TODO: make the variables private
  // 	return this.students;
  // }
  // set students(students){
  //     this.students = students
  // }

  addTable({ user_name: pair1, text, user_id }) {
    const [pair2, zoomLink] =
      text.split(",").length === 1 ? text.split(" ") : text.split(",");
    this.removeTableByName(pair1);
    this.removeTableByName(pair2);
    this.students.push({
      pair1,
      user_id,
      pair2: pair2[0] === "@" ? pair2.substring(1).trim() : pair2.trim(),
      zoomLink: zoomLink.trim(),
    });
  }

  retriveTable(studentName) {
    return this.students.reduce(
      (acc, table) =>
        table.pair1 === studentName || table.pair2 === studentName
          ? table
          : acc,
      undefined
    );
  }

  removeTableById(studentId) {
    this.students = this.students.filter(
      (table) => table.user_id !== studentId
    );
  }

  removeTableByName(studentName) {
    this.students = this.students.filter(
      (table) => !(table.pair1 === studentName || table.pair2 === studentName)
    );
  }

  emptyStudents() {
    this.students = [];
  }
}
module.exports = Main;
