// 3(Array index)

var numbers = [45, 68, 78, 56, 89, 98];

// 1. get element value by index
var element = numbers[1]; 
// console.log(element);

// 2. set/change element value by index
numbers[1] = 77;
numbers[3] = 44;
// console.log(numbers);

// 3. find index of an element
var positionIndex = numbers.indexOf(89);
// console.log(positionIndex);

// If we try to find an index which is not inside of the array it will return -1
var positionIndex = numbers.indexOf(88);
console.log(positionIndex);
