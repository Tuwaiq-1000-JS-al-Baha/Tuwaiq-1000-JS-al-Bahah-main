const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]

const inventors1500 = inventors.filter(inventor => {
    return inventor.year >= 1500 && inventor.year < 1600
})

console.log(inventors1500)

// ["Albert Einstein", "Isaac Newton", ..]

const inventorsFirstLast = inventors.map(inventor => {
    return inventor.first + " " + inventor.last
})

console.log(inventorsFirstLast)

const inventorsOldest = inventors.sort((inventorA, inventorB) => {
    return inventorA.year - inventorB.year
})

console.log(inventorsOldest)

const inventorsLived = inventors.sort((inventorA, inventorB) => {
    const ageA = inventorA.passed - inventorA.year
    const ageB = inventorB.passed - inventorB.year

    return ageA - ageB
})

console.log(inventorsLived)

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.find()
// 10. Find the comment with the id of 823423
const commentSearch = comments.find(comment => {
    return comment.id === 823423
})

console.log(commentSearch)


// Array.prototype.findIndex()
// 11. Find the index of the comment with an id of 123523
const commentSearchIndex = comments.findIndex(comment => {
    return comment.id === 123523
})

console.log(commentSearchIndex)