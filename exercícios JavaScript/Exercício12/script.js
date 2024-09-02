function createLabel(text,htmlFor){

    const label = document.createElement('label');
    label.textContent = text;
    label.htmlFor = htmlFor;
    return label;
}   

function createInput(id,valeu,name,type = 'text',placeholder=''){
    const input = document.createElement('input');
    input.id = id;
    input.name = name;
    input.valeu = valeu;
    input.type = type;
    input.placeholder = placeholder;
    return input;
}

const addTecnoBtn = document.getElementById('addTechBtn');
const devForm =  document.getElementById('devForm');
const arrayDevelopers = [];
let linhaEntrada = 0;

addTecnoBtn.addEventListener('click',(ev)=>{
    const ulLinha = document.getElementById('stackInputs');
    const novaLinha = document.createElement('li');
    const linhaIndex = linhaEntrada;
    linhaEntrada++;
    novaLinha.id = 'inputLinha' + linhaIndex;
    novaLinha.className = 'inputLinha';
    const tecNomeLabel = createLabel('nome: ','tecNome- '+linhaEntrada);
    const tecNomeInput = createInput('tecNome' + linhaIndex,null,'tecNome');

    const expLabel = createLabel('Experiências: ')
    const id1 = 'expRadio-'+ linhaIndex +'.1'
    const expRadio1 = createInput(id1,'2-3 anos','tecExpe-'+linhaIndex,'radio')
    const expLabel1 = createLabel('2-3 anos',id1) 
    
    const id2 = 'expRadio-'+ linhaIndex +'.2'
    const expRadio2 = createInput(id2,'3-4 anos','tecExpe-'+linhaIndex,'radio')
    const expLabel2 = createLabel('3-4 anos',id2) 

    const id3 = 'expRadio-'+ linhaIndex +'.3'
    const expRadio3 = createInput(id3,'5+ anos','tecExpe-'+linhaIndex,'radio')
    const expLabel3 = createLabel('5+ anos',id3) 

    const botao = document.createElement('button')
    botao.type = 'button'
    botao.innerHTML = 'Remover'
    botao.addEventListener('click',()=>{
        ulLinha.removeChild(novaLinha)
    })

    novaLinha.append(tecNomeLabel,tecNomeInput,expLabel,expRadio1,expLabel1,expRadio2,expLabel2,expRadio3,expLabel3,botao

    )
    ulLinha.append(novaLinha)
} )

devForm.addEventListener('submit',function(ev){
    ev.preventDefault()
   const nomeCompleto = document.getElementById('fullname').value
   const inputLinhas = document.querySelectorAll('.inputLinha')
    let tecArray = []
    inputLinhas.forEach(function(linha) {
        const tecNome = linha.querySelector('input[name="tecNome"]').value
        const tecExpe = linha.querySelector('input[type="radio"]:checked').value
        tecArray.push({name:tecNome,exp: tecExpe})
        const novoDev = {nomeCompleto: nomeCompleto,tecnologia:tecArray}
        arrayDevelopers.push(novoDev)
        alert('deve cadastrado com sucesso')
        nomeCompleto.value = ''
        inputLinhas.forEach(function(linha){
            linha.remove()
        })
        
        console.log(novoDev)
    });
})