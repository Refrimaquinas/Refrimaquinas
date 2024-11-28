// Função para excluir agendamento
function excluirAgendamento(id) {
    // Perguntar se o usuário realmente deseja excluir
    if (confirm("Você tem certeza que deseja excluir este agendamento?")) {
        // Encontrar o agendamento pelo ID
        let agendamento = document.getElementById(id);

        if (agendamento) {
            // Remover o agendamento do DOM
            agendamento.remove();

            // Se você estiver usando LocalStorage, remova o agendamento do armazenamento
            let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
            let novosAgendamentos = agendamentos.filter(item => item.id !== id);
            localStorage.setItem('agendamentos', JSON.stringify(novosAgendamentos));

            alert("Agendamento excluído com sucesso!");
        } else {
            alert("Agendamento não encontrado.");
        }
    }
}
