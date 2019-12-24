# Stephens Algorithms

This repository is dedicated to practice algorithms in JavaScript

## String.prototype.split()
The split() method turns a String into an array of strings, by separating the string at each instance of a specified separator string.

```js
var str = 'The quick brown fox jumps over the lazy dog.';

var words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

var chars = str.split('');
console.log(chars[8]);
// expected output: "k"

var strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
```