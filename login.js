document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // Dados de login - pode ser ajustado para seu sistema de autenticação real
    if (usuario === "admin" && senha === "admin123") {
        window.location.href = "dashboard-admin.html";  // Redireciona para o painel do administrador
    } else if (usuario === "funcionario" && senha === "func123") {
        window.location.href = "dashboard-funcionario.html";  // Redireciona para o painel do funcionário
    } else {
        alert("Usuário ou senha incorretos!");
    }
});
