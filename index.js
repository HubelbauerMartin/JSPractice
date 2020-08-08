//Example 1
console.log("Yo")
//Example 2
console.log(23 + 54)
//Example 3
console.log(5 * 5)
//Example 4
console.log(5 * 5 / 5)
//Example 5
console.log((5 * 5) / 5)
//Example 6
let a = 10
console.log(a)
//Example 7
const max = 67
const actual = max - 13
const percentage = actual / max
console.log(percentage)
//Example 8
console.log(1 + "one")
//Example 9
console.log("jedna" + "one")

if (a > 0) {
    console.log('neni nula')
} else {
    console.log('je nula')
}

let number = prompt('what is your favorite number')
if (number == 42) {
    console.log('Yay! That\'s my favorite too!')
}
else {
    if (number < 42) {
        console.log('Eh, that\'s OK but ' + (++number) + ' would be even better')
    }
    else {
        console.log('LAME. That number is too large!')
    }
}