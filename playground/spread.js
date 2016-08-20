// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

// Hi Andrew, you are 25
function greeting(name, age) {
  console.log("Hi " + name + ", you are " + age);
}

greeting(...person);
greeting(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Miranda', ...names];

// Hi Miranda
final.forEach(function(name) {
  console.log("Hi " + name);
});
