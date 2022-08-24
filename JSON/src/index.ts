let endereco = {
    "cep": "35500-010",
    "logradouro": "Avenida Vinte e Um de Abril",
    "complemento": "até 1257/1258",
    "bairro": "Centro",
    "localidade": "Divinópolis",
    "uf": "MG",
    "ibge": "3122306",
    "gia": "",
    "ddd": "37",
    "siafi": "4445"
}

let objeto: string = JSON.stringify(endereco)

console.log('Tipo da variavel objeto:', typeof objeto)

let objetoJSON = JSON.parse(objeto)

console.log(objetoJSON.cep)

console.log(objetoJSON)

console.log(typeof objetoJSON)