## JavaScript Arrow functions


## Arrow functions

ES6 introduces a new syntax for writing anonymous functions in JavaScript. It has a much more concise syntax and should be easier to pick up after using function expressions. Arrow functions gets its name from its syntax `=>`, which in other languages, is knows as: the fat arrow, the rocket or the Lamda operator.

**Example 1:**

```js
// Function Declaration
function sayHello() {
  console.log('Hello World!');  // Block of statements
}

// Function Expression
const sayHello = function() {
  console.log('Hello World!');  // Block of statements
}

// Arrow function expression
const sayHello = () => {
  console.log('Hello World!');  // Block of statements
}

// Arrow function expression (compact)
const sayHello = () => console.log('Hello World!');  // Expression

// Arrow function expression (compact) with single param
const greetWorld = greeting => console.log(`${greeting} World!`); // Expression

// Arrow function expression (compact) with single param & return value
const greetWorld = greeting => `${greeting} World!`;  // Expression
```

**Example 2:**

```js
// Function Declaration
function add(x, y) {
  return x + y;
}

// Function Expression
const add = function(x, y) {
  return x + y;
}

// Arrow function expression
const add = (x, y) => {
  return x + y;
}

// Arrow function expression with implicit return
const add = (x, y) => x + y;
```

#### Lab: (15 mins)

##### 1. Convert the following functions to arrow functions.

```js
function addFive(num) {
  return 5 + num;
}

function divide(num1, num2) {
  return num1 / num2;
}

function whoIsTheBestIA() {
  let iaName = 'Sara';
  console.log(iaName);
}
```

Your solution:

```js

```

##### 2. Create a function called `fullName`

`fullName` receives two parameters, `first` and `last` and returns the full name.

**Steps:**

1. Use the function keyword to write a function expression
2. Rewrite using an arrow function
3. Rewrite and use implicit return

Your solution:

```js

```

##### 3. Turn `sayHello` into an arrow function

```js
function sayHello(name = "World") {
  console.log("Hello " + name);
}

sayHello();
```

Your solution:

```js

```

**Resources:**

1. [MDN: Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
2. [ES6 In Depth: Arrow functions" on hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)
