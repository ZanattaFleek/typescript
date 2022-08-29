import ClsMatematica from "./clsMatematica"

let divisao: ClsMatematica = new ClsMatematica()

divisao.dividir(10, 0).then(resultadoDivisao => {
    console.log('Resultado da Divisão: ', resultadoDivisao)
}).catch(err => {
    console.log('Não Foi possível Dividir. Motivo: ', err)
})
