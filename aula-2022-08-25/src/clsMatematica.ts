/**
 * Realiza Operações Matemáticas - Básicas
 */
export default class ClsMatematica {

    public somar(numero01: number, numero02: number): Promise<number> {

        return new Promise<number>((resolve, reject) => {

            console.log('02 - Dentro do Código')

            resolve(numero01 + numero02)

        })

    }

    public dividir(dividendo: number, divisor: number): Promise<number> {

        /*
        return new Promise((resolve, reject) => {

            if (divisor) {
                resolve(dividendo / divisor)
            } else {
                reject('O Divisor Precisa ser Diferente de Zero!!!!')
            }
            
        })
        */

        if (divisor) {
            return Promise.resolve(dividendo / divisor)
        } else {
            return Promise.reject('O Divisor Precisa ser Diferente de Zero!!!!')
        }

    }

}