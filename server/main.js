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

	addTable({ user_name: pair1, text, user_id: pair1Id }) {
		const [pair2, zoomLink] =
			text.split(",").length === 1 ? text.split(" ") : text.split(",");
		this.removeTable(pair1);
		this.removeTable(pair2);
		this.students.push({
			pair1,
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
	removeTable(studentName) {
		this.students = this.students.filter(
			(table) => !(table.pair1 === studentName || table.pair2 === studentName)
		);
	}
}

const main = new Main();
main.addTable({
	user_name: "seif",
	text: "@mohameddhia , zoomLinkRightHere",
	command: " ",
	user_id: "119922883377",
});
console.log(main.retriveTable("seif"));
console.log(main.removeTable("seif"));
console.log(main.retriveTable("seif"));
module.exports = Main;
