## JS Callbacks

Along with primitives and reference types, you can also pass in functions
into other functions. A function at the end of the day is just another kind
of object.

A function that is passed to another function is called a _callback_.

```js
const add = function (num1, num2) {
  return num1 + num2
}

const subtract = function (num1, num2) {
  return num1 - num2
}

const doMath = function (num1, num2, operation) {
  return operation(num1, num2)
}

doMath(2,1, add) // 3
doMath(2,1, subtract) // 1
```

This is a *very important term*: What is a *callback*?

A callback is a function that is passed to another function.

## Array Iteration Methods

We'll explore the array methods that allow us to test and transform arrays more
simply and consistently, [Iteration
methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods),
and optionally at the end, we'll model some of these JavaScript Array methods as
functions. Being able to use these methods correctly is our main goal.

There are two main groups of array iteration methods:

1. Those that must process all of the array elements
1. Those that may only process a subset of the array elements

### Processing all array elements

#### Demo: using `forEach`

The
[forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
method iterates over all of the elements in an array. Unlike a `for` loop, it
cannot be stopped (all elements are processed).  `forEach` returns `undefined`.

From the MDN documentation:

    There is no way to stop or break a forEach() loop other than by throwing an
    exception. If you need such behavior, the forEach() method is the wrong
    tool, use a plain loop instead. If you are testing the array elements for a
    predicate and need a Boolean return value, you can use every() or some()
    instead. If available, the new methods find() or findIndex() can be used for
    early termination upon true predicates as well.

This means that `forEach` is a poor choice for an array operation that may
terminate early.

#### Code along: using `map`

The
[map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
method returns a **new** array the same size as the existing array.  The
elements of the new array are set to the return value of the callback passed to
`map` invoked with the corresponding element from the original array as its
argument (e.g. `newArray[i] = callback(array[i])`).  The array `map` is called
upon is **not** mutated.

#### Lab: using `filter`

The
[filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
method returns a **new** array containing elements from the original array for
which the callback returns `true`.  `filter` uses a predicate callback method to
decide on which elements to add to the new array that it returns. The length of
the new array may be 0 if the callback returned `false` for every element, or
equal to the length of the original array, if the callback returned `true` for
every element in the original array.

Callbacks passed to `filter` should be predicate functions.

### Processing a subset of the array elements

#### Demo: using `findIndex`

The
[findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
method returns the index of the first element in the array for which the
callback returns true.

Why do we need `findIndex`?  Why not just use
[indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)?

#### Code along: using `find`

The
[find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
method returns the first element in the array for which the callback returns
true.

#### Code along: using `some`

The
[some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
method return true if the callback returns `true` for any element of the array.

Callbacks passed to `some` should be predicate functions.

#### Lab: using `every`

The [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
method checks to see if all elements of the array meet some test.  The function
used for this should only return `true` or `false`.  This type of function is
often called a predicate.

Callbacks passed to `every` should be predicate functions.
