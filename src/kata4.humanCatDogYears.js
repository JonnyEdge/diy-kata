const humanCatDogYears = (number) => {
    let ageArray = []
    ageArray.push(number)
    if (ageArray[0] === 1) {
        ageArray[1] = 15
        ageArray[2] = 15
    }
    if (ageArray[0] === 2) {
        ageArray[1] = 15 + 9
        ageArray[2] = 15 + 9
    }
    if (ageArray[0] > 2) {
        ageArray[1] = ((ageArray[0] - 2) * 4 + 15 + 9)
        ageArray[2] = ((ageArray[0] - 2) * 5 + 15 + 9)
    }

    return ageArray
}

// let stringArray = number.toString().split('')
// let numberArray = stringArray.map(Number).reverse()
// return numberArray

console.log(humanCatDogYears(1))
console.log(humanCatDogYears(2))
console.log(humanCatDogYears(10))
console.log(humanCatDogYears(12))
console.log(humanCatDogYears(25))
console.log(humanCatDogYears(37))

module.exports = humanCatDogYears;
