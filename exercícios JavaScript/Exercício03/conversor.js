
const valorMetro = parseFloat(prompt("Digite o valor em metros: "))

const valor = parseFloat(prompt(
    "Digite o valor da conversão:" +
    "\n 1. metros para mm \n" +
    "2. metros para cm \n" +
    "3. metros para dm \n "+
    "4. metros para dam \n" + 
    "5. metros para cm \n"+
    "6. metros para cm "))
switch (valor) {
    case 1:
        alert(valorMetro * 1000 + " mm")
        break
    case 2:
        alert(valorMetro * 100 + " cm")
        break
    case 3:
        alert(valorMetro * 10 + " dm")
        break
    case 4:
        alert(valorMetro / 10 + " dam")
        break
    case 5:
        alert(valorMetro / 10 + " hm")
        break
    case 6:
        alert(valorMetro / 100 + " km")
    default:
        alert("opção invalida")
}