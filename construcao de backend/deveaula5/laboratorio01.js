//Crie um POST JSON com os seguintes dados:
//Nome               Nota

//Pablo               10

//Anderson             5

//Zezinho              4
//Se a nota for maior ou igual a 5 o aluno passou.

//Gere uma saída JSON no console com: <NOME> <NOTA>
//<RESULTADO></RESULTADO>

const express = require('express');
const app = express();
const port = 3000

const aluno = []

app.use(express.json())

app.get('/', (req, res) => {
    res.send("ativa")
})

app.post('/alunos', (req, res) => {
    const { nome, nota } = req.body
    let Resposta = (nota >= 5 ? 'passou' : 'reprovou')
    aluno.push({ nome, nota, Resposta })
    
    console.log(aluno)
    return res.json[{ aluno }]
})

app.listen(port, () => {
    console.log(`SERVIDOR RODANDO${port}`);
})