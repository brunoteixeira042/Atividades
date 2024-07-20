let imoveisCadastrados = []
let NumeroImoveis = 0
let opcao
do {
    opcao = prompt(
    "Imoveis castrados: "+ imoveisCadastrados.length +    
    "\n1.Salvar Imóvel" +
    "\n2.Mostrar Imoveis Salvos" +
    "\n3.Sair") 
    switch (opcao) {
        case "1":
            const imovel =  {
                nome: "nome",
                quantidadeQuartos: 0,
                quantidadeBanheiros: 0,
                possuiGaragem:false,
            }
                imovel.nome = prompt("Digite o nome do imóvel: ")
                imovel.quantidadeQuartos = prompt("Digite quantidade de Quartos: ")
                imovel.quantidadeBanheiros = prompt("Digite quantidade de banheiros: ")
                let possuiGaragem = prompt("Digite garagem (sim ou nao):  ")
                if(possuiGaragem.toLowerCase() === "sim")
                    imovel.possuiGaragem=true
            
            imoveisCadastrados.push(imovel)
            
            break;
        case "2":
            let nomeImoveis = ""
            for(let i=0; i < imoveisCadastrados.length;i++){
                let imovel = imoveisCadastrados[i]

                nomeImoveis +=
                    `nome: ${imovel.nome}`+
                    `\nQuartos: ${imovel.quantidadeQuartos}`+
                    `\nBanheiros: ${imovel.quantidadeBanheiros}`+ 
                    `\nGaragem: ${imovel.possuiGaragem}`
                    +"\n"   
            }
            alert(nomeImoveis)
            break
        case "3":
            alert("Saindo")
            break
        default:
            alert("Opção Invalida")
            break;
    }
    

} while (opcao!=="3");