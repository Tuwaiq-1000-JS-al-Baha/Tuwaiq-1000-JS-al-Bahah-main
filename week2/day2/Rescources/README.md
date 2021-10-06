# Week 2 day 1. JS Object lab

### Runs example:

### Lab: Modeling in JavaScript & Modeling Run Tracker

-[Solution here](script2.js)

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
