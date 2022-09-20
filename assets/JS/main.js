const addTarefa = document.querySelector('[data-add-tarefa]');

const addData = document.querySelector('[data-add-data]');

// eslint-disable-next-line import/prefer-default-export
export const criaNovoItem = (event) => {
  event.preventDefault();
  // const tarefas = JSON.parse(localStorage.getItem('valorNovaTarefa')) || [];

  const novaTarefa = document.querySelector('[data-nova-tarefa]');
  const valorNovaTarefa = novaTarefa.value;

  Tarefa(valorNovaTarefa, addHora());
  novaTarefa.value = ' ';
};

const Tarefa = (valor, horario) => {
  const lista = document.querySelector('[data-list]');
  const criaItem = document.createElement('li');
  const conteudo = `<p class='content'>${horario} * ${valor}</p>`;

  criaItem.classList.add('tarefa');

  criaItem.innerHTML = conteudo;

  lista.appendChild(criaItem);
  criaItem.appendChild(criaDiv());
};

const criaDiv = () => {
  const addDivBotao = document.createElement('div');
  addDivBotao.classList.add('div-botao');

  addDivBotao.appendChild(botaoConclui());
  addDivBotao.appendChild(botaoDeleta());

  return addDivBotao;
};

const botaoConclui = () => {
  const criaBotaoConclui = document.createElement('button');
  criaBotaoConclui.classList.add('botao-conclui');

  criaBotaoConclui.innerHTML = 'Concluir';
  return criaBotaoConclui;
};

const botaoDeleta = () => {
  const criaBotaoDeleta = document.createElement('button');
  criaBotaoDeleta.classList.add('botao-deleta');
  criaBotaoDeleta.innerHTML = 'Deletar';

  return criaBotaoDeleta;
};

const addHora = () => {
  const calendario = document.querySelector('[data-add-horario]');
  const data = calendario.value;
  const dataFormatada = data.substring(11, 16);

  return dataFormatada;
};

addTarefa.addEventListener('click', criaNovoItem);
