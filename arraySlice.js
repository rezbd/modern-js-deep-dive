/**
 * Array.prototype.slice()
 * 
 * slice() method slice an array and returns
 * The original array doesn't change
 */

 const animals = ['ant', 'bison', 'camel', 'cow', 'goat', 'oxen', 'duck', 'elephant', 'deer'];
 const sliceFromCamel = animals.slice(2); //sliced from index 2 to the rest
 console.log(sliceFromCamel)
 const sliceCattle = animals.slice(2, 6); //sliced the domestic animals
 console.log(sliceCattle)

 //This is really really well documented at MDN.