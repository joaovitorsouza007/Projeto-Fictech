alert("Olá, seja bem vindo!");

const tema = document.getElementById("tema");

if (tema) {
    tema.addEventListener("click", () => {
        if (tema.checked) {
            document.body.style.backgroundColor = 'black';

            document.querySelectorAll('h1').forEach(h1 => {
                h1.style.color = 'white';
            });

            document.querySelectorAll('p').forEach(p => {
                p.style.color = 'white';
            });
        } else {
            document.body.style.backgroundColor = 'white';

            document.querySelectorAll('h1').forEach(h1 => {
                h1.style.color = 'black';
            });

            document.querySelectorAll('p').forEach(p => {
                p.style.color = 'black';
            });
        }
    });
}

$(document).ready(function () {
    $('#phone').mask('(00) 00000-0000');
});   