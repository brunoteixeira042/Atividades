const nome1 = prompt("Diga o nome do personagem: ")
const poderAtaque =parseFloat(prompt("Diga quantidades de pontos de ataque do " + nome1 +" :"))  
const nome2 = prompt("Diga o nome do personagem: ")
let quantidadeVida = parseFloat(prompt("Diga quantidade de vida do personagem: "))

const poderDefesa = parseFloat(prompt("Diga quantidades de pontos de defesa do " + nome2 +" :")) 

let escudo = prompt("O " + nome2 + " possui um escudo? (sim/não)").toLowerCase() === 'sim';

let resultado = 0
if(poderAtaque>poderDefesa && !escudo){
    resultado = poderAtaque-poderDefesa 

}else if(poderAtaque>poderDefesa && escudo){
    resultado = (poderAtaque-poderDefesa)/2 
    
}else{
    resultado = 0 
    
}
quantidadeVida -= resultado
alert(
  "O personagem " + nome1 + " tem pontos de ataque: " + poderAtaque + "\n" +
    "O personagem " + nome2 + " tem pontos de defesa: " + poderDefesa + "quantidade de vida restante" + nome2+"foi "+ quantidadeVida + "\n" +
    "O dano causado foi: " + resultado 
)
