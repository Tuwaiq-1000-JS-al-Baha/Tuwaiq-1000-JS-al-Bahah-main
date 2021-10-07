# JavaScript Promises

---
## Learning Objectives
<br>

Students Will Be Able To:

- Describe the Use Case for Promises
- Create a Promise
- Run code when a Promise resolves
- Run code when a Promise is rejected
- Chain Promises

---
### Roadmap
<br>

1. Setup
2. The Use Case of Promises
3. What's a Promise?
4. Making Promises
5. Resolving Promises
6. Rejecting Promises
7. Chaining Promises

---
#### The Use Case of Promises
<br>

- **Promises** provide another way to deal with _asynchronous_ code execution.

- **💪 Pair up and take two minutes to answer the following:**
	1. What functions/methods have we used that execute _asynchronously_?
	2. What "mechanism" have we used that enables code to be run after an asynchronous operation is complete?

---
#### The Use Case of Promises
<br>

- **Promises** provide an alternative to _callbacks_ as a way to work with asynchronous code execution.

- Functions/methods that implement asynchronous operations must be written to either:
	- Accept a callback
	- Return a promise
	- Or do both (Mongoose queries are an example of this)

---
#### What's a Promise?
<br>

- A **promise** is a special JavaScript object.

- A **promise** represents the eventual completion, or failure, of an asynchronous operation.

- Although we usually _consume_ promises returned by functions, we'll start by creating a promise so that we can better see how they work...

---
#### Making Promises
<br>

- In the **script.js** file, let's make a promise using the `Promise` class/constructor:

	```js
	const p = new Promise();
	```

- Saving and running:

	Will generate an error because a function argument must be passed in...

---
#### Making Promises
<br>

- Let's give `new Promise()` an _executor_ function as an argument that has two parameters:

	```js
	const p = new Promise(function(resolve, reject) {
	  console.log(resolve, reject);
	});
	console.log(p);
	```

- Observations:
	- The _executor_ is immediately called by the Promise constructor passing functions as args for the `resolve` and `reject` parameters.
	- The promise created is an object with a `<pending>` state.

---
#### Making Promises
<br>

- A _promise_ is always in one of three states:
	- `pending`: Initial state, neither fulfilled nor rejected.
	- `fulfilled`: The async operation completed successfully.
	- `rejected`: The async operation failed.

- Once a _promise_ has been _settled_, i.e., it's no longer _pending_, its state will not change again.

---
#### Resolving Promises
<br>

- So, how does a _promise_ become `fulfilled`?<br>By calling the `resolve` function:

	```js
	const p = new Promise(function(resolve, reject) {
	  let value = 42;
	  resolve(value);
	});
	```

- The promise, `p`, has been _resolved_ with the value `42`.

- Note that promises can only be resolved with a single value, however that value can be anything such as an object, etc.

---
#### Resolving Promises
<br>

- How do we get the _value_ of a resolved promise?<br>By calling the promise's `then` method:

	```js
	const p = new Promise(function(resolve, reject) {
	  const value = 42;
	  resolve(value);
	});
	
	p.then(function(result) {
	  console.log(result);
	});
	```

- The `then` method will execute the callback as soon as the promise is resolved. BTW, you can call `then` multiple times to access the value of a resolved promise.

---
#### Resolving Promises
<br>

- So far our code is _synchronous_, let's make it _asynchronous_:

	```js
	const p = new Promise(function(resolve, reject) {
	  setTimeout(function() {
	    resolve('Timed out!');
	  }, 2000);
	});
	
	p.then(function(result) {
	  console.log(result);
	});
	``` 
	We're using `setTimeout` to create an _asynchronous_ operation 

- So, we've seen how the `resolve` function fulfills a promise,<br>I bet you know what the `reject` function does...

---
#### Rejecting Promises
<br>

- Now let's call the `reject` function instead of `resolve`:

	```js
	const p = new Promise(function(resolve, reject) {
	  setTimeout(function() {
	    reject('Something went wrong!');
	  }, 2000);
	});
	```

- After 2 seconds, we'll see a `UnhandledPromiseRejectionWarning: ...` error.

- Reading the error more closely reveals that we need a `.catch()` to handle the promise rejection...  

---
#### Rejecting Promises
<br>

- Let's _chain_ a `catch` method call:

	```js
	p.then(function(result) {
	  console.log(result);
	}).catch(function(err) {
	  console.log(err);
	});
	```

- That's better!

- The next slide shows a graphic summarizing what we've learned so far about promises...

---
#### Promises - Review

<img src="https://i.imgur.com/B0nzUpC.png">

- We've covered the fundamentals of promises. Next we'll see how we can chain multiple promises. But first...

---
#### ❓ Promises - Review Questions
<br>

1. **As a way of working with asynchronous operations, promises provide an alternative to _________ functions.**

2. **What three states can a promise be in?**

3. **What method do we call on a promise to obtain its resolved value?**

---
#### Chaining Promises
<br>

- Do you remember having to nest callback functions?

- It can get ugly:

	<img src="https://i.imgur.com/Zyq5zZU.png">

- The advantage of promises is that they "flatten" the async flow and thus avoid the so-called _pyramid of doom_.

---
#### Chaining Promises
<br>

- We can chain as many `.then` methods we want:

	```js
	p
	.then(function(result) {
	  console.log(result);
	  return 42;
	})
	.then(function(result) {
	  console.log(result);
	  return 'Done!'
	})
	.then(function(result) {
	  console.log(result);
	});
	```

- Let's see what happens if we return promises instead of primitives...

---
#### Chaining Promises
<br>

- First we need a cool function with an asynchronous operation:

	```js
	function asyncAdd(a, b, delay) {
	  return new Promise(function(resolve) {
	    setTimeout(function() {
	      resolve(a + b);
	    }, delay);
	  });
	}
	```

- The function returns a promise that resolves to the result of adding two numbers after a delay (ms).

---
#### Chaining Promises
<br>

- This code demonstrates promise chaining in action:

	```js
	asyncAdd(5, 10, 2000)
	.then(function(sum) {
	  console.log(sum);
	  return asyncAdd(sum, 100, 1000);
	})
	.then(function(sum) {
	  console.log(sum);
	  return asyncAdd(sum, 1000, 2000);
	})
	.then(function(sum) {
	  console.log(sum);
	});
	```

- Note how when the `then` callback returns a promise, the next `then` is called when _that_ promise resolves.

---
#### Chaining Promises
<br>

- Nice!

- We've made our own promises, resolved them, and chained them!

---
---
#### Example - Parallel Promises
<br>

- Imagine two promises chained together that are not necessarily dependent on each other:

	```js
	movie.deleteMany()
	.then(function(results) {
	  console.log('Deleted movies: ', results);
	  return performer.deleteMany();
	})
	.then(function(results) {
	  console.log('Deleted performers:', results);
	})
	.then(function() {
	  process.exit();
	});
	``` 

- The above works, but there's a better way...

---
#### Example - Parallel Promises
<br>

- There's nothing _wrong_ with the code as written - it works.  However, the code first deletes movies, then afterwards, deletes the performers in series.

- Because they are not dependent upon each other, it would be more efficient to perform both operations **simultaneously** - the `Promise.all` method can make this happen...

---
#### Example - Seeding a Database
<br>

- `Promise.all` accepts an array of promises and returns a _single_ promise in their place:

	```js
	// clear out all movies and performers to prevent dups
	const p1 = movie.deleteMany();
	const p2 = performer.deleteMany();
	Promise.all([p1, p2])
	.then(function(results) {
	  console.log(results);
	})
	.then(function() {
	  process.exit();
	});
	```

- The above code now removes documents from the _movies_ & _performers_  collections in **parallel**!

---

#### References
<br>

- [MDN - Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)


