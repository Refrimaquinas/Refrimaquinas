// Função para adicionar agendamento no LocalStorage
function adicionarAgendamento(nome, endereco, telefone, data) {
    let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    const novoAgendamento = {
        id: Date.now(), // Usando timestamp como ID único
        nome: nome,
        endereco: endereco,
        telefone: telefone,
        data: data
    };
    
    agendamentos.push(novoAgendamento);
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

    exibirAgendamentos(); // Atualiza a lista exibida
}

// Função para exibir agendamentos no painel
function exibirAgendamentos() {
    const listaAgendamentos = document.getElementById('listaAgendamentos');
    listaAgendamentos.innerHTML = ''; // Limpa a lista atual

    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];

    agendamentos.forEach(agendamento => {
        const itemAgendamento = document.createElement('li');
        itemAgendamento.id = `agendamento-${agendamento.id}`;

        itemAgendamento.innerHTML = `
            <p>Nome do cliente: ${agendamento.nome}</p>
            <p>Endereço: ${agendamento.endereco}</p>
            <p>Telefone: ${agendamento.telefone}</p>
            <p>Data: ${agendamento.data}</p>
            <button onclick="excluirAgendamento(${agendamento.id})">Excluir</button>
        `;

        listaAgendamentos.appendChild(itemAgendamento);
    });
}

// Função para excluir agendamento
function excluirAgendamento(id) {
    if (confirm("Você tem certeza que deseja excluir este agendamento?")) {
        let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
        agendamentos = agendamentos.filter(agendamento => agendamento.id !== id);

        localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
        exibirAgendamentos(); // Atualiza a lista de agendamentos
    }
}

// Lidar com a submissão do formulário de agendamento
document.getElementById('formAgendamento').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const data = document.getElementById('data').value;

    adicionarAgendamento(nome, endereco, telefone, data);

    // Limpar o formulário após a submissão
    document.getElementById('formAgendamento').reset();
});
 
// Exibir os agendamentos quando a página for carregada
document.addEventListener('DOMContentLoaded', exibirAgendamentos);
