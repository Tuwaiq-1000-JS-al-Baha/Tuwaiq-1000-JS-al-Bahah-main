// OR
// true || true     => true
// true || false    => true
// false || false   => false

// AND
// true && true     => true
// true && false    => false
// false && false   => false

let age = -5

// age < 18  => "child"
// age >= 18 and age < 60  => "adult"
// age >= 60  => "old"

if (age < 18 && age >= 0) {
    console.log('you are a child')
} else if (age >= 18 && age < 60) {
    console.log('you are an adult')
} else if (age >= 60) {
    console.log("you are old")
} else {
    console.log("you are not born yet")
}