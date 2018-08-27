const numberToReversedDigits = (number) => {
    let stringArray = number.toString().split('')
    let numberArray = stringArray.map(Number).reverse()
    return numberArray
}

console.log(numberToReversedDigits(196))
console.log(numberToReversedDigits(1992))
console.log(numberToReversedDigits(678543671))
console.log(numberToReversedDigits(147852369))
console.log(numberToReversedDigits(789456123))
console.log(numberToReversedDigits(9517534286))

module.exports = numberToReversedDigits;
