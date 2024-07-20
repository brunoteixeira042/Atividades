let escolha
let calculo

function calcularAreaTriangulo() {
    let areaBase = prompt("Digite o valor da base: ")
    let areaAltura = prompt("Digite o valor da altura: ")
    return  (parseFloat(areaBase) * parseFloat(areaAltura) / 2)
}
function calcularAreaRetangulo() {
    let areaBase = prompt("Digite o valor da base: ")
    let areaAltura = prompt("Digite o valor da altura: ")
    return parseFloat(areaBase) * parseFloat(areaAltura)
    
}

function calcularAreaQuadrado() {
    let areaLateral = prompt("Digite o valor do Lado: ")
    return  (parseFloat(areaLateral) ** 2)
    
}

function calcularAreaTrapezio() {
    let areaBaseMenor = prompt("Digite o valor da base menor: ")
    let areaBaseMaior = prompt("Digite o valor da base Maior: ")
    let areaAltura = prompt("Digite o valor da Altura: ")
    return((parseFloat(areaBaseMenor) + parseFloat(areaBaseMaior)) * parseFloat(areaAltura) / 2)
}

function calcularAreaCirculo() {
    let areaRaio = prompt("Digite o valor do Raio: ")
    return ((parseFloat(areaRaio) ** 2) * 3.14)
}


do {
    escolha = prompt(
        "Escolha a figura para calcular Área : " +
        "\n1.Área do triângulo" +
        "\n2.Área do Retângulo" +
        "\n3.Área do Quadrado" +
        "\n4.Área do Trapézio" +
        "\n5.Área do Círculo" +
        "\n6.Sair")
    switch (escolha) {
        case "1":
           calculo = calcularAreaTriangulo()
            alert("o valor da área do triângulo: " + calculo)
            break
        case "2":
            calculo = calcularAreaRetangulo()
            alert("o valor da área do Retângulo: " + calculo)
            break;

        case "3":
            calculo = calcularAreaQuadrado()
            alert("o valor da área do Quadrado: " + calculo)
            break
        case "4":
            calculo = calcularAreaTrapezio()
            alert("o valor da área do Trapézio: " + calculo)
            break
        case "5":
           calculo = calcularAreaCirculo()
            alert("o valor da área do Círculo: " + calculo)
            break;
        case "6":
            alert("Saindo..")
            break
        default:
            alert("Opção Invalida")
            break;
    }
} while (escolha !== "6");