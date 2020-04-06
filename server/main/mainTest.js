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

	it('should have methods named "addTable", "retriveTable" "removeTableByName" , and "removeTableById"', function () {
		expect(main.addTable).to.be.a("function");
		expect(main.retriveTable).to.be.a("function");
		expect(main.removeTableById).to.be.a("function");
		expect(main.removeTableByName).to.be.a("function");
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
				user_id: "119922883377",
				zoomLink: "zoomLinkRightHere",
			},
			{
				pair1: "jihad",
				pair2: "hachem",
				user_id: "11111q4d5465",
				zoomLink: "zoomLinkRightHere",
			},
		]);
	});
	it("should return an existing table", function () {
		main.addTable(seifsTable);
		expect(main.retriveTable("seif")).to.eql({
			pair1: "seif",
			pair2: "mohameddhia",
			user_id: "119922883377",
			zoomLink: "zoomLinkRightHere",
		});
		expect(main.retriveTable("mohameddhia")).to.eql({
			pair1: "seif",
			pair2: "mohameddhia",
			user_id: "119922883377",
			zoomLink: "zoomLinkRightHere",
		});
		expect(main.retriveTable("jihad")).to.equal(undefined);
	});
	it("should delete a table by name", function () {
		main.addTable(seifsTable);
		main.addTable(jihadsTable);
		main.removeTableByName("seif");
		expect(main.retriveTable("seif")).to.equal(undefined);
		expect(main.retriveTable("mohameddhia")).to.equal(undefined);
		expect(main.retriveTable("jihad")).to.eql({
			pair1: "jihad",
			pair2: "hachem",
			user_id: "11111q4d5465",
			zoomLink: "zoomLinkRightHere",
		});

		main.removeTableByName("hachem");
		expect(main.removeTableByName("jihad")).to.equal(undefined);
	});

	it("should delete a table by Id", function () {
		main.addTable(seifsTable);
		main.removeTableById("119922883377");
		expect(main.retriveTable("seif")).to.equal(undefined);
		expect(main.retriveTable("mohameddhia")).to.equal(undefined);
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
			user_id: "119922883377",
			zoomLink: "zoomLinkRightHere",
		});
		main.addTable(jihadsTable);
		expect(main.retriveTable("hachem")).to.eql({
			pair1: "jihad",
			pair2: "hachem",
			user_id: "11111q4d5465",
			zoomLink: "zoomLinkRightHere",
		});
	});
	it("should empty out the students array", function () {
		main.addTable(seifsTable);
		main.emptyStudents();
		expect(main.students).to.eql([]);
	});
});
