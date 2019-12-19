/**
 * You are given a string and an integer K as arguments. Return an array of strings that is K elements long, where each element is the string that was provided.
 
 * Requirements
Must return an array of strings
Must work with uppercase, lowercase and special characters

Example #1
solve("abc", 5)
> ["abc", "abc", "abc", "abc", "abc",]
Example #2
solve("Hi!", 3)
> ["Hi!", "Hi!", "Hi!"]
*/

// Elementary way

const solve = (strArg, k) => {
  let arr = [];

  for (let i = 0; i < k; i++) {
    arr.push(strArg);
  }

  return arr;
};

console.log(solve("abc", 5));

// Succinct way
const solve = (strArg, k) => {
  return new Array(k).fill(strArg);
};

// or

const solve = (strArg, k) => {
  return Array(k).fill(strArg);
};

console.log(solve("abc", 5));

// Array(k) creates a new array of the given length, then the fill statement puts in strArg at each index.

// Array.prototype.fill()

// The fill() method fills (modifies) all the elements of an array from a start index (default zero) to an end index (default array length) with a static value. It returns the modified array.

const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

Note:
To create new array you can use `new Array()` syntax which is different from Array.from()

The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

// Therefore array.from makes another array instance from the given array