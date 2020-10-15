'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review
Write a function named raisedToTheThird that takes in an array of numbers and returns a new array of each of those numbers raised to the 3rd power (hint: look up Math.pow()). Use forEach to solve this problem.
------------------------------------------------------------------------------------------------ */

const raisedToTheThird = (arr) => {
  // Solution code here...
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(Math.pow(arr[i], 3));
  }
  return newArray;
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function that appends ' The end.' to a string, and returns the modified string. The original source string should not be modified.
------------------------------------------------------------------------------------------------ */

const appendTheEnd = (str) => {
  // Solution code here...
  let newStr = `${str} The end.`;
  return newStr;
};
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function that accepts an array and copies the first element to the end of the array. The change should be reflected in the source array that was passed in to the function. That is, the function should modify the array 'in place'.
Do not use a return statement.
For example:
const a = [1, 2, 3];
appendFirstToLast(a);
console.log(a) prints [1, 2, 3, 1]
------------------------------------------------------------------------------------------------ */

const appendFirstToLast = (arr) => {
  // Solution code here...  
  arr.push(arr[0]);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function that accepts an object and an integer as arguments and adds a new property to the object called yearBorn. The value of the yearBorn property should be the integer that was passed in.
The change should be reflected in the source object that was passed in to the function. That is, the function should modify the object 'in place'.
Do not use a return statement.
For example:
const octavia = { fullName: 'Octavia Estelle Butler' };
addBirthYearProperty(octavia, 1947);
console.log(a) prints { fullName: 'Octavia Estelle Butler', yearBorn: 1947 }
------------------------------------------------------------------------------------------------ */

const addBirthYearProperty = (obj, year) => {
  // Solution code here...
  obj.yearBorn = year;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal
Write a function that accepts an array of people objects and adds a new property called isAuthor to each object in the list. Set the value of the new property to true.
The function should modify the object in place. Do not use a return statement.
For example:
const people = [{ fullName: 'Octavia Butler' }, { fullName: 'Ray Bradbury' }];
setStatusAsAuthor(people);
console.log(people[1].isAuthor) prints true
------------------------------------------------------------------------------------------------ */

const setStatusAsAuthor = (people) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal
Write a function that accepts two arrays. Append the values from the second array into the first,
maintaining the ordering.
The function should modify the first array in place. Do not use a return statement.
For example:
const a = [1, 2]; NOTE: If you assign an array to a `const`, you can't re-assign it later, but you can change the values in the array.
const b = [3, 4];
append(a, b);
console.log(a) prints [1, 2, 3, 4]
------------------------------------------------------------------------------------------------ */

const append = (arr1, arr2) => {
  // Solution code here...

};

/* ------------------------------------------------------------------------------------------------
TESTS
All the code below will verify that your functions are working to solve the challenges.
DO NOT CHANGE any of the below code.
Run your tests from the console: jest challenges-01.test.js
------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return the message with all uppercase characters', () => {
    expect(speaker('hello 301 students!', greeting)).toStrictEqual('HELLO 301 STUDENTS!');
  });
});

describe('Testing challenge 2', () => {
  test('It should add the number 8 to the array five times', () => {
    expect(addNumbers(8, [], 5, addValues)).toStrictEqual([8, 8, 8, 8, 8]);
    expect(addNumbers(8, [], 5, addValues).length).toStrictEqual(5);
  });
});

describe('Testing challenge 3', () => {
  const inventory = [{ name: 'apples', available: true }, { name: 'pears', available: true }, { name: 'oranges', available: false }, { name: 'bananas', available: true }, { name: 'blueberries', available: false }];

  test('It should only add the available items to the list', () => {
    expect(createList(inventory)).toStrictEqual(['apples', 'pears', 'bananas']);
    expect(createList(inventory).length).toStrictEqual(3);
  });
});

describe('Testing challenge 4', () => {
  const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  test('It should print out messages or numbers', () => {
    expect(fizzbuzz(inputs)).toStrictEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz', 16]);
    expect(fizzbuzz(inputs).length).toStrictEqual(16);
  });
});