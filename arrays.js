//1. What is the lenth of the following contacts array? 0

var contacts = [];

let len = contacts.length //0
console.log(len)
//2. Add the following people to the contacts array.

var jake = {
	name: 'Jake Overall',
	email: 'jake.overall@boisecodeworks.com',
	title: 'founder'
};
var matt = {
	name: 'Matt Overall',
	email: 'matt.overall@boisecodeworks.com',
	title: 'founder'
};

var tony = {
	name: 'Mark Ohnsman',
	email: 'mark@boisecodeworks.com',
	title: 'instructor'
};
var andrew = {
	name: 'Darryl Kilzer',
	email: 'darryl@boisecodeworks.com',
	title: 'instructor'
};
var tom = {
	name: 'Tom Day',
	email: 'tom@boisecodeworks.com',
	title: 'instructor'
};

contacts.push(tom, andrew, tony, matt, jake)
console.log(contacts)

//3. Woops after adding all of those people to the same contacts list you realized you need a list just the instructors. Create a new variable named instructors populate it using contacts array. 


let instructors = contacts.filter(contact => contact.title = 'instructor')
console.log(instructors)