[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Objects

Exercising the JavaScript Reference Types.

## Objectives

By the end of this, developers should be able to:

- Store, access, and update data values in objects
- Iterate through an object and operate on its elements
- Define and use methods
- Use `this` keyword to reference object
- Model real world entities with JavaScript


## Introduction

Let’s create a person in JavaScript.  We could use a variable and a string...

```js
const person = "John Doe"
```

To print our person’s name we could do...

```js
const person = "John Doe"
console.log(person)
```

Well a person has more than a name so let’s add an age and eye color.  

```js
const person = "John Doe"
const age = 50
const eyeColor = "Blue"
```

That data isn't grouped very well, they are all independent variables.  We could use an array...

```js
const person = ["John Doe", 50, "Blue"]
```

To print our person’s name, age, and eye color we could do...

```js
const person = ["John Doe", 150, "Blue"]

console.log(person[0]) // John Doe

console.log(person[1]) // 150

console.log(person[2]) // Blue
```

Ok, now lets print a sentence with our person in it like we might do on a webpage, maybe a profile.

```js
const person = ["John Doe", 150, "Blue"]

console.log("The great" + person[0] + ", with striking " + person[2] + " eyes, was a spry " + person[1] + " years old.")
```

There are other qualities we might want to add to describe our person like maybe species, number of legs, and number of arms.  We could do…

```js
const person = ["John Doe", 150, "Blue", "Human", 2, 2]
 ```

Ok, now lets print a sentence with our person in it like we might do on a webpage again.

```js
const person = ["John Doe", 150, "Blue", "Human", 2, 2]

console.log("The great" + person[0] + ", with striking " + person[2] + " eyes, was a spry " + person[1] + " years old. A " + person[3] + "with " + person[4) + "legs and " + person[5] + " arms.")
```

Yikes, that doesn’t look very readable.  It seems like we should use an object to organize our data better.  Let’s create a person object and we might as well also separate the first and last name too.

```js
const person = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "John",
     lastName: "Doe",
     age: 150,
     eyeColor: "Blue"
};
```

What if we want two different people.  We could do

```js
const person2 = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "Jane",
     lastName: "Doe",
     age: 120,
     eyeColor: "Green"
};

```

Now when we write our sentence again, it is much easier to read!

```js
const person = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "John",
     lastName: "Doe",
     age: 150,
     eyeColor: "Blue"
};

console.log("The great" + person.firstName + " " + person.lastName + ", with striking " + person.eyeColor + " eyes, was a spry " + person.age + " years old. A " + person.species + "with " + person.legs + "legs and " + person.arms + " arms.")
```

## Objects

```js
const dictionary = {}
```

### Demo: Objects

In JavaScript to represent a dictionary of data with key/value pairs, we can use
an [Object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics).

```js
// Create an empty object literal
const emptyDictionary = {}

// Create an object literal with values
const car = {
  make: 'Ford',
  model: 'Mustang',
  year: 1999
}

// Read value from an Object, use key
car['make'] // 'Ford'
car.make // 'Ford'

// Update value in an Object, use key
car.make = 'Toyota'
car // { make: 'Toyota', model: 'Mustang', year: 1999 }

// Add value to an Object, use key
car.topSpeed = 120
car // { make: 'Toyota', model: 'Mustang', year: 1999, topSpeed: 120 }
```

### Code Along: Iterating through an Object

```js
const car = {
  make: 'Ford',
  model: 'Mustang',
  year: 1999
}

// Individually print message for each property of object
console.log(car.make)
console.log(car.model)
console.log(car['year'])

// Loop through object using key
for (const key in car){
  console.log(car[key])
}
```

### Lab1: The Reading List & The Movie Database


### Code Along: Collections

- Create a list of words from a paragraph of text.
- Create an object with each word as a key and the word frequencies (how many times does each unique word appear in
  the string) as the value.

## Object Methods

Keys of an object can also point to functions.  We call those functions, methods!

```js
const car = {
  make: 'Ford',
  model: 'Mustang',
  year: 1999,
  drive: function(distance) {
    return "Vroooom! We drove " + distance + " miles";
  }
}

car.make // 'Ford'
car.drive(20) // 'Vroooom! We drove 20 miles"
```

## Abstraction and Modeling

The world is full of complex systems. Take weather, for example.

![Weather Forecast](https://upload.wikimedia.org/wikipedia/commons/c/c0/NOAA_Wavewatch_III_Sample_Forecast.gif)

There's a ton of information we could record about the weather. Yet, when you
read the weather report in the morning, all of that information is distilled
down to a handful of numbers: 34 degrees fahrenheit, 20% chance of
precipitation, 4 degree windchill...

Why do you think that might be?

When you take something complex and then hide that complexity under a more
simple interface, you are using a technique called **abstraction**.

From [Wikipedia](https://en.wikipedia.org/wiki/Abstraction_(software_engineering)):
> In software engineering and computer science,
> abstraction is a technique for arranging complexity of computer systems. It
> works by establishing a level of complexity on which a person interacts with the
> system, suppressing the more complex details below the current level.

<!-- Think-Pair-Share -->

<details>
  <summary>How might abstraction be relevant as software developers? Take a
  minute and discuss this with your team.</summary>

  We can use abstraction to represent real-world entities when we write software.
  This allows us to hide complex systems underneath easy to grasp objects and
  models.
</details>
<br />

Think about the weather report that you are given by the weather person. They give
you the temperature in your city, if it's going to rain or snow, level of
precipitation, and the wind speed. This model of the weather system hides the
complexity that is behind these measurements.

A **model** is a simplified or partial representation of the real thing. Models
are based on a real entity, and are used to represent the real entity in a
system. Modeling is great for planning, designing, discussing, and understanding
a system.

### Discussion

Let's take a look at a specific example: a Laptop. Suppose that we need to
represent a laptop in an application. What attributes are most important to
include in our model?

As it turns out, the answer to that question depends heavily on what the
application will do and how it will be used. If the application is for selling
laptops, we might pick attributes like sale price, brand, amount of RAM, disc
space, and processor speed. However, if the application is for factories, e.g.
tracking laptops as they're being manufactured, things like sale price are
irrelevant; instead, we might want our model to include the production line
where the laptop was assembled, or the laptop's current stage of completion.

In order to decide what attributes we need to model, we use user stories, which
we'll talk about in more depth as we introduce the first project.

### Lab: Brainstorm


## Demo: Modeling in JavaScript

Let's think about how might we construct a model in JavaScript as part of an
application. Models can be as simple as a single number -- for instance, a day's
weather can be modeled as 'temperature' or  'inches of snow expected'. Other
things, such as lists of similar items, are typically modeled by arrays; since
the items are all similar, an index is sufficient to distinguish them.

```js
const crayons = ['blue', 'green', 'orange', 'yellow']
```

- Note that we're also abstracting away each crayon as a String - at the
  moment, we're only interested in their colors.

Most of the time, though, what we want to model has **multiple attributes**,
often of different types: for instance, a car might have a make (String), model
(String), a release year (Number), and a mileage (Number). Because these
attributes are different, we also probably want to refer to them using
descriptive names. For this kind of use case, an Object is the best fit, since
its _properties_ are key-value pairs with String keys. Objects can also have
properties that hold functions, called _methods_, and these can stand in neatly
for any behaviors that we might want our model to have.

Suppose we needed to model a single crayon in JavaScript. We might come up with
something like this:

```js
const crayon = {
  color: 'blue',
  lengthInCM: 8,
  getUsedUp: function () {
    crayon.lengthInCM -= 0.5
  }
}
```

As you can see, `crayon` has two ordinary traits, (which we call properties),
(`color` and `lengthInCM`); these map to attributes of the crayon that
(presumably) are relevant to our application. In addition, it also has a method
called `getUsedUp`, which corresponds with a behavior that real crayons exhibit:
getting shorter as they get used.

- Let's do a quick refresher on object dot notation:

  <details>
    <summary>What do we write if we want to access a crayon's `color`
    property?</summary>
    `crayon.color`
  </details>
  <br />
  <details>
    <summary>Similarly, if we want to access the _function stored inside_
    the <code>getUsedUp</code> property, what can we write? </summary>
    `crayon.getUsedUp`
  </details>
  <br />
  <details>
    <summary>Lastly, if we want to
    treat that function as a method and invoke it from the object, what can we write?</summary>
    `crayon.getUsedUp()`
  </details>
  <br />

Back to our car example. We have a method, `addMileage`, which adjusts the
`mileage` property of our `car` object.

```js
const car = {
  make: 'Toyota',
  model: '4Runner',
  releaseYear: 1992,
  mileage: 78062,
  addMileage: function () {
    car.mileage += 50
  }
}
```

### Code Along: Television

Now, let's consider how we might model a TV. How could we do this in JavaScript?
Together, we'll write out a JavaScript object that represents all of the
features and behaviors of a TV listed below.

Let's assume that we're only concerned with using the TV, not selling it or
anything like that.

When we interact with a TV, there's a short list of things that we typically do:

- Turn it on/off (toggle power).
- Increase or decrease the volume.
- Increase or decrease the channel.

In addition, there are a number of other features of the TV that might interest
us:

- Is it a plasma/LCD/LED TV?
- What's the resolution?
- How much power does it consume?

### Lab: Modeling in JavaScript & Modeling Run Tracker


## Code Along: Write Methods With `this`

When we start thinking about how the methods for 'User' will work, we run into a
difficulty. A method for calculating the longest distance run so far needs to be
able to access, and refer to, all of the runs associated with that particular
user. How do we do that?

Watch as I demonstrate how to complete writing each method.

```js
const user = {
  name: 'Christopher Robin',
  email: 'wdi@christopherRobin.com',
  address: 'home',
  runs: [
    {
      date: '2017-05-25 15:00',
      distance: 1200,
      timeTaken: 600
    },
    {
      date: '2017-05-25 15:00',
      distance: 1400,
      timeTaken: 800
    }
  ],
  totalDistance: function () {},
  longestRunDistance: function () {},
  averageSpeed: function () {}
}
```

## Lab: Self-Referential Objects


    
## Additional Resources

### Objects

- [Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [Objects JS Info](https://javascript.info/object)
- [MDN `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [Understand JavaScript's `this` with Clarity](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
- [`this` in JavaScript](https://john-dugan.com/this-in-javascript/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.