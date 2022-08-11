import ClsLeituraArquivo from "./ClsLeituraArquivo"

let clsLeitura: ClsLeituraArquivo = new ClsLeituraArquivo('arquivo.txt')

clsLeitura.lerArquivo().then(conteudoLidoDoArquivo => {

    console.log('Resultado da leitura do Arquivo: ', conteudoLidoDoArquivo)
    console.log('\n\n==============\n\n')
    console.log('Conteúdo Armazenado na Classe: ', clsLeitura.conteudoArquivo)
    
}).catch(err => {
    
    console.log('Erro na Leitura do Arquivo. Motivo: ', err)
    
})

console.log('\n\n==============\n\n')
console.log('Conteúdo Armazenado na Classe Fora da promise: ', clsLeitura.conteudoArquivo)
console.log('\n\n==============\n\n')
