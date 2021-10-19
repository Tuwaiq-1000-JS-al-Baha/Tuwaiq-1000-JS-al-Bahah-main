const cake = (afterCake) => {
    // prepare
    console.log("take eggs")
    console.log("mix eggs")
    console.log("take flour")
    console.log("mix with eggs")
    console.log("add sugar")
    console.log("put in oven")
    console.log("wait 15 mins")
    console.log("take out of oven")

    // do something with cake
    afterCake()
}

function sayHello() {
    console.log("hello")
}

const putInFreezer = () => {
    console.log("put in freezer")
}

const eatCake = () => {
    console.log("eat cake")
    console.log("....")
    console.log("finish")
}

console.log("** first time:")
cake(eatCake)

console.log("** second time:")
cake(putInFreezer)


cake(sayHello)