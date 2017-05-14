//1 The sum of range
function range(start, end, step) {
  if (step == null || step == 0) {
    step = 1;
  }
  var array = [];
  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}
console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

//2 Reversing an array
function reverseArray(arrayValue) {
  var result = [];
  for (var i = 0; i <= arrayValue.length - 1; i++) {
    result.unshift(arrayValue[i]);
  }
  return result;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

//3
function arrayToList(arrayValue) {
  var list = null;
  for (i = arrayValue.length - 1; i >= 0; i--) {
    list = {
      value: arrayValue[i],
      rest: list
    }
  }
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function prepend(value, list) {
  return {
    value: value,
    rest: list
  };
}

function nth(list, n) {
  if (!list) {
    return undefined;
  } else if (n == 0) {
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  }
}
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

//4
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (a == null || typeof a != "object" || b == null || typeof b != "object") {
    return false;
  }
  var propertyCountA = 0,
    propertyCountB = 0;
  for (var property in a) {
    propertyCountA++;
  }
  for (var property in b) {
    propertyCountB++;
    if (!(property in a) || !deepEqual(a[property], b[property])) {
      return false;
    }
  }
  return propertyCountA == propertyCountA;
}

var obj = {
  here: {
    is: "an"
  },
  object: 2
};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {
  here: 1,
  object: 2
}));
console.log(deepEqual(obj, {
  here: {
    is: "an"
  },
  object: 2
}));
