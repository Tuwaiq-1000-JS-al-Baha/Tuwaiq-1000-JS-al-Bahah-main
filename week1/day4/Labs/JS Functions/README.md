
### Lab: Functions

## [Solutions!](functions-lab1-solution.js)

Create a file named `functions.js`.

1.  Define a `youRock` function that accepts a string argument of a name and returns a string using that name.
```js
youRock('Samar') // 'You rock Samar!'
youRock('Sara') //'You rock Sara!'
```

2.  Define a `square` function that accepts a number argument and returns that number multipled by itself.
```js
square(2) // 4
square(3) // 9
```

3.  Define a `cube` function that accepts a number argument and returns that number raised to the third power.
```js
cube(2) // 8
cube(3) // 27
```

4.  Define a `power` function that accepts two numbers as argument and returns the first number raised to the second number power.
```js
power(5, 3) // 125
power(3, 2) // 9
```

#### Extra Practice

If you finish the Lab, try this challenge.

Write a function that will add, subtract, multiply or divide two numbers and return the answer 
```js
calculator(1, 2, "add") // should return 3 
calculator(1, 2, "subtract") // should return -1
calculator(1, 2, "divide") // should return .5
calculator(1, 2, "multiply") // should return 2
calculator(1, 2, "something else") // should return "calculator can only add, subtract, divide, or multiply
calculator("cat", 2, "add") // should return "calculator only accepts numbers"
```
