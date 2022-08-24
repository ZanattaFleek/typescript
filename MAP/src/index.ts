let mapCliente = new Map<number, string>()

mapCliente.set(2, 'Fleek Cursos')
mapCliente.set(1, 'Zanatta')
mapCliente.set(10, 'Alunos')
mapCliente.set(5, 'Marcelo')
mapCliente.set(3, 'João')

console.log('Size: ', mapCliente.size) // 5
console.log('get 10: ', mapCliente.get(10)) // Alunos
console.log('get 9: ', mapCliente.get(9)) // Undefined

mapCliente.delete(5)

mapCliente.set(2,'Substituida Chave 02')

console.log('Entries: ', mapCliente.entries())

mapCliente.forEach((v, k) => {
    console.log('Chave: ', k, 'Valor: ', v)
})