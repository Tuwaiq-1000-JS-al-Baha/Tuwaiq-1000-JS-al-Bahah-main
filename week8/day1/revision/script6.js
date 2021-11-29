// class Circle

// attributes:
// radius

// methods:
// calculateArea
// calculateCircumference

// class Circle {
//   constructor(radius) {
//     this.radius = radius
//   }

//   calculateArea() {
//     const area = Math.PI * this.radius ** 2
//     console.log(area)
//   }

//   calculateCircumference() {
//     return 2 * Math.PI * this.radius
//   }
// }

// const circle1 = new Circle(12)
// const circle2 = new Circle(24)

// circle1.calculateArea()
// console.log(circle1.calculateCircumference())

const circle = {
  radius: 14,
  calculateArea: () => {
    const area = Math.PI * circle.radius ** 2
    console.log(area)
  },
  calculateCircumference: function () {
    return 2 * Math.PI * this.radius
  },
}

circle.calculateArea()
console.log(circle.calculateCircumference())
