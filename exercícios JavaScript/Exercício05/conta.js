
let conta;
let valor = parseFloat(prompt("Qual valor inicial da sua conta"))
do {
    
     escolha = prompt (
        "Saldo disponível " + valor +
        "\nQual das opções você quer escolher"+
         "\n1.adicionar"+ 
         "\n2.remover"+ 
         "\n3.sair ")
    switch(escolha){
        case "1":
            valor+= parseFloat(prompt ("Valor que deseja adicionar: "))
            break
        case "2":
            valor-= parseFloat( prompt ("Valor que deseja adicionar: "))
            break
        case "3":
            alert("saindo..")
            break
        default:
            alert("opção invalida")       
    }   
} while (escolha !=="3")