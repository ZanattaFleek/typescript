import { clienteInterface } from "./interfaces/cliente.interfaces"

var cliente: clienteInterface = {
    idCliente: 1,
    nome: 'Frank',
    endereco: 'Av. 21 de Abril, 504',
    cep: '35.500-010',
    ativo: true,
    limiteCredito: 10500.00,
    dataNascimento: new Date(2022, 8, 4)
}

var meusClientes: Array<clienteInterface> = []

meusClientes.push(cliente)

if (cliente.cpf) {
    console.log(cliente.cpf)
}

