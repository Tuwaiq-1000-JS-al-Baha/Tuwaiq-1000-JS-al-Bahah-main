
# Week 2 day 1. JS Object lab

### Lab: The Reading List

Keep track of which books you read and which books you want to read!

- Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
- Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
- Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

### Lab: Modeling a recipe

Try to come up with a way to represent the abstractions given below using the
tools we've learned about so far (basic types like numbers, strings, and
booleans; reference types like arrays, objects, and functions).

Say we are building a recipe website. Suppose that after careful research, we've
determined that the following things must be true about the application.

A recipe object must have:

- a name
- an author
- a list of steps
- a list of ingredients
- a number of servings that the recipe yields

An ingredient must have:

- a name
- a unit of measure (e.g. teaspoons)
- a quantity
- notes (e.g. chopped fine)

Additionally, as a bonus, the recipe should be able to:

- Print a list of its ingredients, in the following format:

  > 1 cup of flour
  >
  > 2 tablespoons of butter
  >
  > ...
