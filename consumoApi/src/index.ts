import axios from "axios";

axios.get('https://xxxxviacep.com.br/ws/35500010/json/').then(rs => {

    if (rs.status == 200) {
        console.log(rs.data)
    } else {
        console.log('Erro na Requisição')
    }

}).catch(err => {
    console.log('Erro na Requisição: ', err.code)
})