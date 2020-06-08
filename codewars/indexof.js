function stray(numbers) {
  for (let i in numbers) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      return numbers[i];
    }
  }
}

console.log(stray([8, 1, 1, 1, 1, 1, 1])); // 8
