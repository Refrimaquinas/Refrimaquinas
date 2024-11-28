document.addEventListener("DOMContentLoaded", function() {
    const userType = localStorage.getItem("userType");

    // Verifica se o usuário é funcionário, se não redireciona para o login
    if (userType !== "funcionario") {
        window.location.href = "login-funcionario.html";  // Redireciona para login do funcionário
    }

    // Função para exibir agendamentos
    function exibirAgendamentos() {
        let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
        const lista = document.getElementById("listaAgendamentos");
        lista.innerHTML = '';

        agendamentos.forEach((agendamento) => {
            const li = document.createElement("li");
            li.innerHTML = `${agendamento.nome} - ${agendamento.endereco} - ${agendamento.telefone} - ${agendamento.data}`;
            lista.appendChild(li);
        });
    }

    exibirAgendamentos();  // Exibe a lista de agendamentos
});
