const car = {
    make: "Mercedes",
    model: 2022,
    color: "white",
    new: true,
    kilometers: 0,
    run: function () {
        console.log("make inside run:", this.make)
        this.kilometers = this.kilometers + 20
        console.log("run.... !")
    },
    wheels: {
        maker: "ABC",
        type: "Summer",
        roll: function () {
            console.log("inside roll:", this.maker)
        }
    }
}

console.log(car.make)
console.log(car.model)
console.log(car.color)
console.log("kilometers:", car.kilometers)
console.log("this ::::", this)
car.run()
console.log("kilometers:", car.kilometers)
car.run()
console.log("kilometers:", car.kilometers)
console.log(car)
const a = "aaaa"

car.wheels.roll()