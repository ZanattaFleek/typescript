import fs from 'node:fs/promises'
import readline from 'node:readline'

export default class ClsLeituraArquivo {

    constructor(private nomeArquivo: string) {
    }

    public conteudoArquivo: string = ''

    public lerArquivo(): Promise<string> {

        return fs.readFile(this.nomeArquivo).then((conteudo) => {
            this.conteudoArquivo = conteudo.toString()
            return Promise.resolve(conteudo.toString())
        }).catch(err => {
            this.conteudoArquivo = ''
            return Promise.reject('Erro Motivo: '.concat(err.message))
        })

    }

    public lerLinha(): Promise<string> {
        readline.createInterface({
            input: fs.createReadStream()
        })
    }


}