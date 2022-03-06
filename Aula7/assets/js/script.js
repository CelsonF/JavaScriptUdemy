/*
Celson Fernando Rodrigues tem 24 anos , pesa 75kg tem 1.86 de altura e seu IMC é x 
*/

const firstName = 'Celson Fernando'
const lastName = 'Rodrigues'
const age = 24
const weight = 75
const height = 1.86

function calculateImc(firstname,lastname,weight,height,age) {
    
    let indiceMassaCorporal =  weight / Math.pow(height,2)
    
    return `O usuário ${firstname} ${lastname}, tem ${age} anos, pesa ${weight}kg  tem ${height} de altura e seu IMC é ${indiceMassaCorporal.toFixed(2)};` 
}

console.log(calculateImc(firstName,lastName,weight,height,age))
