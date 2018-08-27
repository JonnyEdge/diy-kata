const joinNames = (namesObj) => {
    let gottenNames = []    
    Object.keys(namesObj).forEach(function(key) {
        let name = namesObj[key]["name"]
        gottenNames.push(name)
    })

    return gottenNames.slice(0, gottenNames.length - 1).join(', ') + " & " + gottenNames.slice(-1)
}

console.log(joinNames([{
    name: 'Homer'
}, {
    name: 'Marge'
}, {
    name: 'Bart'
},{
    name: 'Lisa'
},{
    name: 'Maggie'
}]))

module.exports = joinNames;
