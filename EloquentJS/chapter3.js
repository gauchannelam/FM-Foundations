//1.Minumum
function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}

//2.Recursion

function isEven(num) {
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else if (num < 0) {
    return isEven(-num);
  } else {
    return isEven(num - 2);
  }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

//3. Bean Counting
function countChar(stringA, stringB) {
  var count = 0;
  for (var i = 0; i <= stringA.length; i++) {
    var char = stringA.charAt(i);
    if (char == stringB) {
      count++;
    }
  }
  return count;
}

function countBs(string) {
  return countChar(string, "B");
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlakk", "k"));
