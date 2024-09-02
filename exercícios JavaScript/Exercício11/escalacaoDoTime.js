function escalarJogador() {
    const posicao = document.getElementById('position').value;
    const nome = document.getElementById('name').value;
    const numero = document.getElementById('number').value;
    const confirmacao = confirm(`Deseja salvar o jogador ${nome} número ${numero} e que atua na posição ${posicao}`);
    if (confirmacao) {
        const listTeam = document.getElementById('list-team');
        const li = document.createElement('li');
         li.id = `jogador-${numero}`;
        li.innerText = `${posicao} ${nome} ${numero}`;
        listTeam.appendChild(li)
        posicao = document.getElementById('position').value = '';
        nome = document.getElementById('name').value = '';
        numero = document.getElementById('number').value = '';
    };

};

function removerJogador() {
    const listTeam = document.getElementById('list-team')
    const numero = document.getElementById('number').value;
     const liId = document.getElementById(`jogador-${numero}`)
    let confirmacao = confirm(`Quer remover o jogador número ${numero}`);
    if (confirmacao) {
        document.getElementById('list-team').removeChild(liId)
        document.getElementById('number').value='';
    }

}