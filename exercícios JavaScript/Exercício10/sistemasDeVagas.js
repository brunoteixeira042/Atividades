let escolha;
let arrayDeVagas = [];

function menu() {
  escolha = prompt(
    'Escolha Uma Opção:' +
    '\n1. Listar vagas disponíveis' +
    '\n2. Criar uma nova vaga' +
    '\n3. Visualizar uma vaga' +
    '\n4. Inscrever um candidato em uma vaga' +
    '\n5. Excluir uma vaga' +
    '\n6. Sair\n'
  );
}

function criarVaga() {
  const id = parseInt(prompt('Digite o Id da vaga: '));
  const nome = prompt('Digite o nome da vaga: ');
  const descricao = prompt('Digite a descrição: ');
  const data = prompt('Digite a data: ');
  const vaga = {
    id,
    nome,
    descricao,
    data,
    candidatos: []
  };

  arrayDeVagas.push(vaga);
  alert('Vaga criada com sucesso' +
    '\nId: ' + id +
    '\nNome: ' + nome +
    '\nDescrição: ' + descricao +
    '\nData: ' + data
  );
}

function visualizarVaga() {
  const id = parseInt(prompt('Digite o Id da vaga: '));
  const vagaEncontrada = arrayDeVagas.find(vaga => vaga.id === id);
  if (vagaEncontrada) {
    alert('Vaga encontrada:' +
      '\nId: ' + vagaEncontrada.id +
      '\nNome: ' + vagaEncontrada.nome +
      '\nDescrição: ' + vagaEncontrada.descricao +
      '\nData: ' + vagaEncontrada.data +
      '\nQuantidade de Candidatos: ' + vagaEncontrada.candidatos.length +
      '\nNome dos Candidatos: ' + vagaEncontrada.candidatos.join(', ')
    );
  } else {
    alert('Id não encontrado');
  }
}

function excluirVaga() {
  const id = parseInt(prompt('Digite o Id da vaga: '));
  const index = arrayDeVagas.findIndex(vaga => vaga.id === id);
  if (index !== -1) {
    arrayDeVagas.splice(index, 1);
    alert('Vaga excluída com sucesso');
  } else {
    alert('Id não encontrado');
  }
}

function adicionarUsuario() {
  const id = parseInt(prompt('Digite o Id da vaga: '));
  const vaga = arrayDeVagas.find(vaga => vaga.id === id);
  if (vaga) {
    const nomeCandidato = prompt('Digite o nome do Candidato: ');
    vaga.candidatos.push(nomeCandidato);
    alert('Candidato adicionado com sucesso');
  } else {
    alert('Id não encontrado');
  }
}

function verVagas() {
  if (arrayDeVagas.length > 0) {
    alert('Lista de Vagas:');
    arrayDeVagas.forEach(vaga => {
      alert(
        'Id: ' + vaga.id +
        ', Nome: ' + vaga.nome +
        ', Descrição: ' + vaga.descricao +
        ', Data: ' + vaga.data
      );
    });
  } else {
    alert('Nenhuma vaga disponível');
  }
}

do {
  menu();
  switch (escolha) {
    case "1":
      verVagas();
      break;
    case "2":
      criarVaga();
      break;
    case "3":
      visualizarVaga();
      break;
    case "4":
      adicionarUsuario();
      break;
    case "5":
      excluirVaga();
      break;
    case "6":
      alert('Saindo...');
      break;
    default:
      alert('Opção inválida');
  }
} while (escolha !== "6");
