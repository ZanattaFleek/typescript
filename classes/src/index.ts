import ClsCliente from "./entity/ClsCliente";

let fleek: ClsCliente = new ClsCliente('Fleek', 'Av. 21 de Abril, 504')
let aluno: ClsCliente = new ClsCliente('Aluno', 'Fleek Cursos')

aluno.setSobrenome(' - Divinópolis')

// console.log('Fleek Nome:', fleek.nome, 'Fleek Endereco: ', fleek.endereco)
// console.log('Aluno Nome:', aluno.nome, 'Aluno Endereco: ', aluno.endereco)

// console.log('Nome Completo do Aluno: ', aluno.getNomeCompleto())
// console.log('Nome Completo da Fleek: ', fleek.getNomeCompleto())

fleek.CPF = '000000121515251'

console.log(fleek.CPF)
