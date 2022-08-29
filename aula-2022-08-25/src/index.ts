import ClsMatematica from "./clsMatematica"

let divisao: ClsMatematica = new ClsMatematica()

let x: number | null = await divisao.dividir(10, 0)

console.log('Valor de X Após await: ', x)

/*
divisao.dividir(10, 0).then(resultadoDivisao => {
    console.log('Resultado da Divisão: ', resultadoDivisao)
}).catch(err => {
    console.log('Não Foi possível Dividir. Motivo: ', err)
})
*/
