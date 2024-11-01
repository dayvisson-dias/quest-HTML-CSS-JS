const input = document.querySelectorAll ('input');
const botao = document.querySelector ('.btn-enviar');

botao.addEventListener ("click", function () {
    input.forEach (input => {
        if (input.value == "") {
            input.classList.add("nao-preenchido");
            input.classList.remove("preenchido");
            input.nextElementSibling.classList.add("ativo");

        } else if (input.value != "") {
            input.classList.add("preenchido");
            input.classList.remove("nao-preenchido");
            input.nextElementSibling.classList.remove("ativo");
        }
    })
});