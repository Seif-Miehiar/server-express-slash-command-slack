const Main = require("./main.js");
const { expect } = require("chai");
describe("#main()", function () {
	let main;
	let seifsTable = {
		user_name: "seif",
		text: "@mohameddhia , zoomLinkRightHere",
		command: " ",
		user_id: "119922883377",
	};
	let jihadsTable = {
		user_name: "jihad",
		text: "@hachem zoomLinkRightHere",
		command: " ",
		user_id: "11111q4d5465",
	};
	beforeEach(function () {
		main = new Main();
	});

	it('should have methods named "addTable", "retriveTable", and "removeTable', function () {
		expect(main.addTable).to.be.a("function");
		expect(main.retriveTable).to.be.a("function");
		expect(main.removeTable).to.be.a("function");
		expect(main.emptyStudents).to.be.a("function");
	});
	it("should start with an empty array of students", function () {
		expect(main.students).to.eql([]);
	});

	it("should add a student to the students array", function () {
		main.addTable(seifsTable);
		main.addTable(jihadsTable);
		expect(main.students).to.eql([
			{
				pair1: "seif",
				pair2: "mohameddhia",
				zoomLink: "zoomLinkRightHere",
			},
			{
				pair1: "jihad",
				pair2: "hachem",
				zoomLink: "zoomLinkRightHere",
			},
		]);
	});
	it("should return an existing table", function () {
		main.addTable(seifsTable);
		expect(main.retriveTable("seif")).to.eql({
			pair1: "seif",
			pair2: "mohameddhia",
			zoomLink: "zoomLinkRightHere",
		});
		expect(main.retriveTable("mohameddhia")).to.eql({
			pair1: "seif",
			pair2: "mohameddhia",
			zoomLink: "zoomLinkRightHere",
		});
		expect(main.retriveTable("jihad")).to.equal(undefined);
	});
	it("should delete a table", function () {
		main.addTable(seifsTable);
		main.addTable(jihadsTable);
		main.removeTable("seif");
		expect(main.retriveTable("seif")).to.equal(undefined);
		expect(main.retriveTable("mohameddhia")).to.equal(undefined);
		expect(main.retriveTable("jihad")).to.eql({
			pair1: "jihad",
			pair2: "hachem",
			zoomLink: "zoomLinkRightHere",
		});

		main.removeTable("hachem");
		expect(main.removeTable("jihad")).to.equal(undefined);
	});

	it("should replace an already existing pair", function () {
		main.addTable(seifsTable);
		main.addTable({
			user_name: "seif",
			text: "@hachem , zoomLinkRightHere",
			command: " ",
			user_id: "119922883377",
		});
		expect(main.retriveTable("seif")).to.eql({
			pair1: "seif",
			pair2: "hachem",
			zoomLink: "zoomLinkRightHere",
		});
		main.addTable(jihadsTable);
		expect(main.retriveTable("hachem")).to.eql({
			pair1: "jihad",
			pair2: "hachem",
			zoomLink: "zoomLinkRightHere",
		});
	});
	it("should empty out the students array", function () {
		main.addTable(seifsTable);
		main.emptyStudents();
		expect(main.students).to.eql([]);
	});
});
