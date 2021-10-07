
async function fetchData(url) {
    const res = await fetch(url)
    console.log(res)
    const data = await res.json()

    console.log(data)
}

fetchData("https://api.thecatapi.com/v1/images/search")


axios.get("https://api.thecatapi.com/v1/images/search")
    .then(res => {
        console.log(res.data)
    })

async function fetchData2(url) {
    const res = await axios.get("https://api.thecatapi.com/v1/images/search")
    console.log(res)
    const data = res.data
    console.log(data)
}

fetchData2("https://api.thecatapi.com/v1/images/search")