
let escolha;

do {
    escolha = prompt("escolha um número de 1 a 4 para mudar de menu, a opção 5 ")
    switch(escolha){
        case "1":
            alert("menu 1 selecionado")
            break
        case "2":
            alert("menu 2 selecionado")
            break
        case "3":
            alert("menu 3 selecionado")
            break
        case "4":
           alert("menu 4 selecionado")
           break
        case "5": 
            alert("saindo...") 
            break

    }
} while (escolha !=="5")