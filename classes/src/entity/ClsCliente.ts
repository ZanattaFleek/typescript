export default class ClsCliente {
    public nome: string
    public endereco: string = ''

    private sobrenome: string = ''

    constructor(nome: string, endereco: string) {
        this.nome = nome
        this.endereco = endereco
    }

    public setSobrenome(sobrenome: string) {
        this.sobrenome = sobrenome
    }

    public getNomeCompleto(): string {
        return this.nome.concat(this.sobrenome)
    }

}
