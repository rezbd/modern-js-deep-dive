//Simple example
let age = 17;
let isAdult = age >= 18 ? "officially adult" : "not adult";
console.log(isAdult);

//Example 2
let greetings = (person) => {
	let name = person ? person.name : `stranger`;
	return `hello ${name}`;
};
console.log(greetings({ name: "Rezwan" }));
console.log(greetings());

//I plan to add more examples later
