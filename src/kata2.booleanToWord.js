const booleanToWord = (boolean) => {
    if (boolean === true) {
        return 'Yes'
    }
    if (boolean === false) {
        return 'No'
    }
}

console.log(booleanToWord(true))
console.log(booleanToWord(false))

module.exports = booleanToWord;
