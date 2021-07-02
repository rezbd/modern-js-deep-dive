/**
 * Array.prototype.splice()
 * 
 * Splice() can't take three parameters. (indexNumber to start slice, how many elements, what to add)
 * It changes the original array.
 */

const animals = ['camel', 'cow', 'ants', 'mosquito', 'beetles', 'flies'];
//going to remove the insects and add some livestock
const removeInsects = animals.splice(2, 4, 'goat', 'buffalo', 'oxen');
console.log(animals)