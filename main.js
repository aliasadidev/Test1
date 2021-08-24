let student = {
	firstName: "ali",
	lastName: "asadi",
	Id: "10221",
	getFullName: function () {
		return `${this.firstName}/${this.lastName}`
	}
}

let fullName = student.getFullName();

console.log(student.firstName);// ali


var teacher = function (_firstName, _lastName) {
	let firstName = _firstName;
	let lastName = _lastName;
	this.getFullName = function () {
		return `${firstName}/${lastName}`;
	}
}

var teacherObj = new teacher("ali", "asadi");//erro

console.log(teacherObj.firstName);//

console.log(teacherObj.getFullName());

