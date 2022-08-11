/*

    Encapsulamento
    - Códigos separados que não interferem em outros códigos

    Instânciar
    - Criar um objeto que é "baseado" em uma classe existente

*/

export default class ClsCadastro {

    protected tmpLimiteCredito: number = 0

    public endereco: string = ''
    public cep: string = ''

    public get limiteCredito(): number {
        console.log('Dentro do Get Limite de Crédito')
        return this.tmpLimiteCredito
    }

    public set limiteCredito(limite: number) {
        console.log('Dentro do Set Limite de Crédito')
        this.tmpLimiteCredito = limite
    }

}