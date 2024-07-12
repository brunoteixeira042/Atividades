
const nome1 = prompt("Digite o nome do veiculo 1: ")
const velocidade1 = prompt("Digite o nome do velocidade 1: ")

const nome2 = prompt("Digite o nome do veiculo 2: ")
const velocidade2 = prompt("Digite o nome do velocidade 2: ")

if(velocidade1>velocidade2){
    alert("o " + nome1+" mais rápido")
}else if (velocidade2 === velocidade1){
    alert("velocidades iguais")
}else{
    alert("o" + nome2+" mais rápido")
}