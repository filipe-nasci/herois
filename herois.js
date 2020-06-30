// API permite saber mais sobre todos os herois da marvel e DC comics pesquisando pelo ID

const rs = require("readline-sync")
const axios = require("axios")
const fs = require("fs")

var idheroi = rs.question("Digite um numero de 1 a 731): ").toLocaleLowerCase()

axios.get(`https://superheroapi.com/api/10217487131151138/${idheroi}`) 
.then((resposta) => {
    console.log(resposta.data)})
