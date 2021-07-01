//Array.prototype.findIndex()

//The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test. - MDN

let numbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let result = numbers.findIndex(element=> element > 9);
console.log(result)