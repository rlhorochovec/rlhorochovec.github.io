function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "") {
        var erroLogin = "Informe o usuário!"
        document.getElementById("erro").innerHTML = erroLogin;
    }

    if (senha == "") {
        var erroLogin = "Informe a senha!"
        document.getElementById("erro").innerHTML = erroLogin;
    }

    if (login != "" && senha != "") {
        var erroLogin = "Usuário e/ou senha incorretos!"
        document.getElementById("erro").innerHTML = erroLogin;
    }

    if (login == "" && senha == "") {
        var erroLogin = "Informe usuário e senha!"
        document.getElementById("erro").innerHTML = erroLogin;
    }

    if (login == "admin" && senha == "admin") {
        document.getElementById("erro").innerHTML = "";
        location.href = "admin.html";
    } else if (login == "user" && senha == "user") {
        document.getElementById("erro").innerHTML = "";
        location.href = "user.html"
    }
}