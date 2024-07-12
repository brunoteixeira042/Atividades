
let nomeCidade = ""
const nomeTurista = prompt("Qual seu nome ")

let visitouCidade =  prompt("Já visitou alguma cidade: ")
let contador = 0
while (visitouCidade === 'sim') {
    nomeCidade += prompt("Digite o nome da cidade: ")
    contador += 1
    visitouCidade = prompt("Já visitou alguma cidade: ")
    nomeCidade += " "
    }
    alert(
        nomeTurista + " já visitou " + contador + " cidade(s) com os nomes  " +nomeCidade
    )