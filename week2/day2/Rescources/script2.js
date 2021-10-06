
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
        },
        {
            date: '2017-05-25 15:00',
            distance: 1400,
            timeTaken: 800
        }
    ],
    totalDistance: function () {
        let total = 0
        for (let i = 0; i < this.runs.length; i++) {
            total += this.runs[i].distance
        }
        return total
    },
    longestRunDistance: function () {
        let longest = 0
        for (let i = 0; i < this.runs.length; i++) {
            if (this.runs[i].distance > longest) {
                longest = this.runs[i].distance
            }
        }
        return longest
    },
    averageSpeed: function () {
        let totalDistance = this.totalDistance()
        return totalDistance / this.runs.length
    }
}

console.log(user.averageSpeed())