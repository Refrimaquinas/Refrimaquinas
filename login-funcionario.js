document.getElementById("loginFuncionarioForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const funcUsername = document.getElementById("funcUsername").value;
    const funcPassword = document.getElementById("funcPassword").value;

    // Validação das credenciais do funcionário
    if (funcUsername === "funcionario" && funcPassword === "func123") {
        localStorage.setItem("userType", "funcionario");  // Armazenar o tipo de usuário como "funcionario"
        window.location.href = "dashboard-funcionario.html";  // Redirecionar para o painel de funcionário
    } else {
        alert("Credenciais inválidas para o funcionário!");
    }
});
