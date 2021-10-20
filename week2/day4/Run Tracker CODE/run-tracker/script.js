const person = {
    name: "Ahmad",
    email: "ahmad@gmail.com",
    address: "al baha",
    runs: [
        {
            datetime: "2021/10/19 2:30",
            distance: 2000,
            timeTaken: 1500
        },
        {
            datetime: "2021/10/20 12:30",
            distance: 100,
            timeTaken: 60
        },
        {
            datetime: "2021/10/22 4:30",
            distance: 3000,
            timeTaken: 220
        }
    ],
    totalDistance: function () {
        let total = 0
        this.runs.forEach(function (run) {
            total = total + run.distance
        })
        console.log("total distance:", total, "m")
    },
    longestDistance: function () {
        let max = 0

        this.runs.forEach(function (run) {
            if (run.distance > max) {
                max = run.distance
            }
        })
        console.log("max distance:", max, "m")
    },
    averageSpeed: function () {
        let total = 0
        this.runs.forEach(function (run) {
            let speed = run.distance / run.timeTaken
            total = total + speed
        })
        let average = total / this.runs.length
        console.log("average speed:", average, "m/s")

    }
}

person.totalDistance()
person.longestDistance()
person.averageSpeed()