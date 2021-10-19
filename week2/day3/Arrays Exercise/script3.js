const prices = [100, 20, 38, 1, 12, 200]
// Sum
let total = 0
for (let i = 0; i < prices.length; i++) {
    console.log("total before:", total)
    console.log("prices[", i, "]:", prices[i])
    total = total + prices[i]
    console.log("total after:", total)
    console.log("--")

}
console.log(total)