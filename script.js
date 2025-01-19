let email = document.querySelector('#email')
let senha = document.querySelector('#senha')
let enviar = document.querySelector('button');

function enviarFormulario() {
    let valorEmail = email.value.trim();
    let valorSenha = senha.value.trim();

    if (valorEmail === '' || valorSenha === '') {
        alert('Existe um campo vazio! Digite algo antes de enviar.');
    } else if (valorSenha.length < 6) {
        alert('A senha deve ter no mínimo 6 caracteres.');
    } else if (!validarEmail(valorEmail)) {
        alert('Digite um endereço de e-mail válido! Certifique-se de que ele está no formato correto (exemplo: nome@dominio.com).');
    } else {   
        window.location.href = "index2.html"; 
    }
}

enviar.addEventListener('click', (e)=> {
    e.preventDefault();
    enviarFormulario();
})

email.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter'){
        evento.preventDefault();
        enviarFormulario();
    }
});
senha.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter'){
        evento.preventDefault();
        enviarFormulario();
    }
});

function validarEmail(email) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

