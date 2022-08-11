import ClsPessoaFisica from "./ClsPessoaFisica";
import ClsPessoaJuridica from "./ClsPessoaJuridica";
import { stringConexaoBanco } from "./configuracoes";

/* Reutilização de Código */

let clsCliente: ClsPessoaFisica = new ClsPessoaFisica()

let clsFornecedor: ClsPessoaJuridica = new ClsPessoaJuridica()


clsCliente.limiteCredito = 90000

console.log(clsFornecedor.limiteCredito)

console.log(clsCliente.limiteCredito)

console.log(stringConexaoBanco)



