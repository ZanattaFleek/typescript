export interface clienteInterface {
    idCliente: number
    nome: string
    endereco: string
    cep: string
    ativo: boolean
    limiteCredito: number
    dataNascimento: Date
    cpf?: string
}