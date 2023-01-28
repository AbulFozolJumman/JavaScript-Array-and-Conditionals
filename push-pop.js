// 4(Array element push and pop, shift and unshift)

var numbers = [78, 45, 98, 45];

//use push to add element to an array as the last element array
// numbers.push(63);
// console.log(numbers);

var friends = ['balam', 'kalam','salam' ];
friends.push('gelam');
friends.push('pailam')
// console.log(friends);

// use pop to remove the last element
// console.log(numbers);
// numbers.pop();
// console.log(numbers);

// To remember or find the popped element if needed 
var element = numbers.pop();
// console.log(element);
// console.log(numbers);

// Use unshift to add element at the start of an arrow
numbers.unshift(77);
// console.log(numbers);

friends.unshift('Raihan');
// console.log(friends);

// Use shift to remove element from the start of an arrow
numbers.shift();
console.log(numbers);

friends.shift();
console.log(friends);
