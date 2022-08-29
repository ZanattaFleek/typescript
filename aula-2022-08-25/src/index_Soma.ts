import ClsMatematica from "./clsMatematica";

function calcular(n1: number, n2: number): Promise<number> {

    let clsMat: ClsMatematica = new ClsMatematica()

    console.log('01 - Início do Código')

    /*
    return new Promise((resolve, reject) => {
        clsMat.somar(n1, n2).then(jacare => {
            console.log('03 - Dentro do Then da Promise', jacare)
            resolve(jacare)
        })
    })

    */

    return clsMat.somar(n1, n2).then(jacare => {
        console.log('03 - Dentro do Then da Promise', jacare)
        return jacare
    })

}

calcular(10, 20).then(calculo => {
    console.log('Valor da Função Calcular: ', calculo)
})



