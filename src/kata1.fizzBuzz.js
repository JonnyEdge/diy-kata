const fizzBuzz = (number) => {
    if ((number % 3 === 0) && (number % 5 === 0)) {
        return 'FizzBuzz'
    }
    if (number % 3 === 0) {
        return 'Fizz'
    }
    if (number % 5 === 0) {
        return 'Buzz'
    }
    if ((number % 3 !== 0) && (number % 5 !== 0)) {
        return number
    }
}

console.log(fizzBuzz(3))
console.log(fizzBuzz(27))
console.log(fizzBuzz(96))
console.log(fizzBuzz(5))
console.log(fizzBuzz(125))
console.log(fizzBuzz(10750))
console.log(fizzBuzz(15))
console.log(fizzBuzz(150))
console.log(fizzBuzz(480))
console.log(fizzBuzz(16))
console.log(fizzBuzz(11111))
console.log(fizzBuzz(27053))

module.exports = fizzBuzz;
