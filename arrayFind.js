/**
 * Array.prototype.find()
 * when the find function returns true, it breaks.
 * Find used to find something in an array in a particular condition
 * returns the value of the first element in the provided array that satisfies the provided testing function
 * Array.find() doesn't change the original array
 * Possible to call (currentValue, currentIndex, array)
 */

//Example 1
let ages = [18, 17, 33, 36, 29, 16, 54, 16, 14, 87, 19, 10, 44, 52];

let findAge = ages.find(function (desiredAge) {
	return desiredAge > 50;
});
console.log(findAge);

// Example 2
const people = [
	{
		name: "Sumit",
		occupation: "Software Developer",
	},
	{
		name: "Russell",
		occupation: "Wordpress",
	},
	{
		name: "Kate",
		occupation: "Designer",
	},
	{
		name: "Eric",
		occupation: "Dentist",
	},
	{
		name: "John",
		occupation: "Dentist",
	},
];

function isDentist(person) {
	return person.occupation === "Dentist";
}

const output = people.find(isDentist).name; //returns the first element
const output2 = people.reverse().find(isDentist).name;

console.log(output);
console.log(output2);
