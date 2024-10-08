const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.querySelector('input')
const resultInput = document.getElementById('result')


const arrayTeclas = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function(clickKey){
    clickKey.addEventListener('click',function(){
        const value = clickKey.dataset.value
        input.value += value
    })
})

document.getElementById('clear').addEventListener('click',()=>{
    input.value = ''
    input.focus
})

document.getElementById('equal').addEventListener('click',calcular
)

input.addEventListener('keydown',  (ev)=> {
    ev.preventDefault()
    if (arrayTeclas.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if (ev.key == 'Backspace') {
        input.value = input.value.slice(0, -1)

    }
    if (ev.key == 'Enter') {
        calcular()
    }
})

function calcular() {
    resultInput.value='ERROR'
    resultInput.classList.add('error')
    const result = eval(input.value)
    resultInput.value = result
    result.value = ''
    resultInput.classList.remove('error')
}

document.getElementById('themeSwitcher').addEventListener('click',()=>{
    if(main.dataset.theme==='dark'){
        root.style.setProperty('--bg-color','#f1f5f9')
        root.style.setProperty('--border-color','#aaa')
        root.style.setProperty('--font-color','#212529')
        root.style.setProperty('--primary-color','#26834a')
        main.dataset.theme= 'light'
    }else{
        root.style.setProperty('--bg-color','#212529')
        root.style.setProperty('--border-color','#666')
        root.style.setProperty('--font-color','#f1f5f9')
        root.style.setProperty('--primary-color','#4dff91')
        main.dataset.theme= 'dark'
    }

})

document.getElementById('copyToClipboard').addEventListener('click',(ev)=>{
    const button = ev.currentTarget
    if(button.innerText==='Copy'){
        button.innerText = 'Copied'
        button.classList.add('success')
        navigator.clipboard.writeText(result.value)
    }else{
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})