/*
CONTADOR

Criar um contador de quantas vezes uma rota foi
acionada e o tipo de acionamento que ele teve (método – GET ou
POST).

Esse contador deve devolver o objeto JSON com a contagem
separada por método.

Além de contar, o contador deve ser permitir incrementar e
decrementar uma quantidade de acessos de uma vez. Também deve
permitir resetar a contagem (reiniciar) sem recomeçar o servidor. Ao
resetar deve logar no console a data e hora do reset e as quantidades
registradas naquele momento.
*/

const express = require("express");
const app = express();
const port = 3000

let contador = []

function itemASerContado(rota) {
    this.rota = rota
    this.contador = 1
}

app.use('/', (req, res) => {

    let rota = req.method + req.url
    // console.log (metodo)
    // console.log (rota)

    let existe = false

    contador.forEach(element => {
        if (element.rota == rota) {
            element.contador++
            existe = true

        }
    })

    if (!existe) {
        contador.push(new itemASerContado(rota))
    }

    console.log(contador)

    res.send('rota: ' + rota)

})


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


//const routes = require('routes/,')