//Case 1
//Normal function
var javascript = {
	name: "JavaScript",
	myName: "Rezwan",
	libraries: ["React", "Vue", "Angular"],
	printLibraries: function () {
		/**
		 * this inside forEach and this outside forEach are different
		 * this inside forEach changing the outer this to something else
		 * because forEach is a js built in function
		 * console.log(this) inside forEach() shows object: global
		 * to solve this problem this stored into a variable inside forEach
		 * In arrow function there is no such a confusion
		 */
		var self = this;
		this.libraries.forEach(function (libs) {
			console.log(`${self.name} loves ${libs}`);
		});
	},
};
javascript.printLibraries();

//Fat Arrow Function

//Fat Arrow function
var javascript = {
	name: "JavaScript",
	myName: "Rezwan",
	libraries: ["React", "Vue", "Angular"],
	printLibraries: function () {
		this.libraries.forEach((libs) => console.log(`${this.name} loves ${libs}`));
	},
};
javascript.printLibraries();

/**
 * Case 2
 * Where normal function is better
 * fatArrow.html is attached for this case
 */
const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");

function show() {
	display.innerHTML = this.value;
	var self = this;
	setTimeout(function () {
		thanks.innerHTML = `You have typed: ${self.value}`;
	}, 1000);
}

//Here, fat arrow function shows undefined, because arrow function doesn't 'understand' this. normal function is the way to do it right.
/*
const show = () => {
	display.innerHTML = this.value;
};
*/

searchInput.addEventListener("keyup", show);

/**
 * Case 3
 * Constructor Function
 * The following normal function can't be converted to an arrow function.
 * new keyword doesn't work in arrow function
 */
function Person(userName) {
	this.userName = userName;
}
var rez = new Person("Rezwan");

//I'm grateful to Sumit Saha for teaching this.
