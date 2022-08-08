export default class ClsCliente {
    public nome: string
    public endereco: string = ''

    private fieldCPF: string = ''

    private sobrenome: string = ''

    constructor(nome: string, endereco: string) {
        this.nome = nome
        this.endereco = endereco
        this.CPF = '55555555555555'
    }

    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome
    }

    public getNomeCompleto(): string {
        return this.nome.concat(this.sobrenome)
    }

    public get CPF(): string {
        return this.fieldCPF
    }
    
    public set CPF(cpf: string) {
        this.fieldCPF = cpf
    }

}
