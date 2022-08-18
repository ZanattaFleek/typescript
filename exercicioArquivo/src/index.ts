/*

1 - Leitura do Arquivo e incluir no Array


*/

import ClsArquivo from "./clsArquivo";

let clsArquivo: ClsArquivo = new ClsArquivo()

clsArquivo.lerArquivo('alunos2.txt').then(() => {
    console.log('Conseguir Calcular... Vou imprimir....')
}).catch(err => {
    console.log(err)
})