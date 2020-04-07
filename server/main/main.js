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

<<<<<<< HEAD
  addTable({ user_name: pair1, text, user_id: pair1Id }) {
    const [pair2, zoomLink] =
      text.split(",").length === 1 ? text.split(" ") : text.split(",");
    this.removeTable(pair1);
    this.removeTable(pair2);
    this.students.push({
      user_id,
      pair1,
      pair2: pair2[0] === "@" ? pair2.substring(1).trim() : pair2.trim(),
      zoomLink: zoomLink.trim(),
    });
  }
=======
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
>>>>>>> 8e4ea944bbf6b764dca0e3b142340afafefdfd35

  retriveTable(studentName) {
    return this.students.reduce(
      (acc, table) =>
        table.pair1 === studentName || table.pair2 === studentName
          ? table
          : acc,
      undefined
    );
  }

<<<<<<< HEAD
  removeTable(studentName) {
    this.students = this.students.filter(
      (table) => !(table.pair1 === studentName || table.pair2 === studentName)
    );
  }
=======
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
>>>>>>> 8e4ea944bbf6b764dca0e3b142340afafefdfd35

  emptyStudents() {
    this.students = [];
  }
}
module.exports = Main;
