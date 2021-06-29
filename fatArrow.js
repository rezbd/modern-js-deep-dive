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

//Far Arrow Function

//Far Arrow function
var javascript = {
	name: "JavaScript",
	myName: "Rezwan",
	libraries: ["React", "Vue", "Angular"],
	printLibraries: function () {
		this.libraries.forEach((libs) => console.log(`${this.name} loves ${libs}`));
	},
};
javascript.printLibraries();
