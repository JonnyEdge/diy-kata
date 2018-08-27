const employees = [{
    name: 'Satti',
    role: 'Developer'
  }, {
    name: 'Jenny',
    role: 'Sales Associate'
  }, {
    name: 'Javid',
    role: 'Human Recommended Reading Assistant'
  }]

const getEmployerRole = (employeeName, employees) => {
    for (let i = 0; i < employees.length; i++) {
        if (employeeName == employees[i].name) {
            return employees[i]["role"]
        } 
    }
}

console.log(getEmployerRole('Satti', employees))
console.log(getEmployerRole('Jenny', employees))
console.log(getEmployerRole('Javid', employees))

module.exports = getEmployerRole
