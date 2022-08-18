import exp from "constants"

const expCEP: RegExp = new RegExp('^[0-9][0-9].[0-9]{3}-[0-9]{3}$', 'gi')

const CEP: string = ' 35.500-010'

console.log('O CEP: '.concat(CEP).concat(' é: ').concat(expCEP.test(CEP) ? 'Válido' : 'Inválido'))

