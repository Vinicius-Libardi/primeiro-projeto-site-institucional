const formulario = document.querySelector("#formulario-contato");

const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");

const erroNome = document.querySelector("#erro-nome");
const erroEmail = document.querySelector("#erro-email");
const erroMensagem = document.querySelector("#erro-mensagem");

const mensagemSucesso = document.querySelector("#mensagem-sucesso");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroMensagem.textContent = "";
    mensagemSucesso.textContent = "";

    if (nome.value.trim() === "") {
        erroNome.textContent = "Digite seu nome.";
        return;
    }

    if (email.value.trim() === "") {
        erroEmail.textContent = "Digite seu e-mail.";
        return;
    }

    if (mensagem.value.trim() === "") {
        erroMensagem.textContent = "Digite sua mensagem.";
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email.value)) {
        erroEmail.textContent = "Digite um e-mail válido.";
        return;
    }

    mensagemSucesso.textContent = "Mensagem enviada com sucesso!";
    formulario.reset();s
});