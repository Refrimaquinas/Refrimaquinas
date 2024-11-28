document.getElementById("loginAdminForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const adminUsername = document.getElementById("adminUsername").value;
    const adminPassword = document.getElementById("adminPassword").value;

    // Validação das credenciais do administrador
    if (adminUsername === "admin" && adminPassword === "admin123") {
        localStorage.setItem("userType", "admin");  // Armazenar o tipo de usuário como "admin"
        window.location.href = "dashboard-admin.html";  // Redirecionar para o painel de administrador
    } else {
        alert("Credenciais inválidas para o administrador!");
    }
});
