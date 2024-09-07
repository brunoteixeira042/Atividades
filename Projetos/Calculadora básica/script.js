function LimparDisplay(){
    document.getElementById('display').value = '';
}

function deleCaractere(){
    const display = document.getElementById('display');
    display.value = display.value.slice(0,-1);
}

function addValorDisplay(value){
    const display = document.getElementById('display');
    display.value += value;
}

function calcResultado(){
    const display = document.getElementById('display')
    try{
        display.value = eval(display.value);
    }catch{
        display.value ='Erro';
    }
}