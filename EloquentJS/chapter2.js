// 1.Looping a triangle
for (var symbol = "#"; symbol.length < 8; symbol += "#") {
  console.log(symbol);
}

// 2.FizzBuzz
for (var i = 1; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
// 3. Chessboard
let size = 8
let result = ''
for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    ((i + j) % 2 === 0) ? result += ' ' : result += '#'
  }
  result += '\n'
}
console.log(result);
