
let palavra = prompt("Diga a palavra: ")
let palavraInvertida = ""

for(let i = palavra.length -1; 0 <= i ;i--){
    palavraInvertida += palavra[i]

}
if (palavra === palavraInvertida){
    alert("É um palíndromo")
}else{
    alert(
        "Não é um palíndromo " + palavra + " ==! " + palavraInvertida)
}
