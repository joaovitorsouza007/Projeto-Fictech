alert("Olá, seja bem vindo!");

const tema = document.getElementById("tema");
const rootStyle = document.documentElement.style;

function temaPreto() {
    rootStyle.setProperty('--bg', '#0b1220');
    rootStyle.setProperty('--nav-bg', '#0f1724');
    rootStyle.setProperty('--azul', '#6ea0ff');
    rootStyle.setProperty('--azul-claro', '#7eaeff');
    rootStyle.setProperty('--azul-pastel', '#5476b6');
    rootStyle.setProperty('--azul-escuro', '#2a4fb0');
    rootStyle.setProperty('--texto', '#E6EEF9');
    rootStyle.setProperty('--texto-suave', '#9AA6B3');
    rootStyle.setProperty('--card-bg', '#112235');
    rootStyle.setProperty('--card-ico-bg', '#0f1b2a');
    rootStyle.setProperty('--on-primary', '#E6EEF9');
    rootStyle.setProperty('--check-bg', 'rgba(230,238,249,0.12)');
}

function temaBranco() {
    rootStyle.setProperty('--bg', '#F4F5F7');
    rootStyle.setProperty('--nav-bg', '#E7EAF0');
    rootStyle.setProperty('--azul', '#344DCD');
    rootStyle.setProperty('--azul-claro', '#5B7AEE');
    rootStyle.setProperty('--azul-pastel', '#AABCF3');
    rootStyle.setProperty('--azul-escuro', '#1A3099');
    rootStyle.setProperty('--texto', '#1F2937');
    rootStyle.setProperty('--texto-suave', '#4B5563');
    rootStyle.setProperty('--card-bg', '#BEDAF7');
    rootStyle.setProperty('--card-ico-bg', '#fff');
    rootStyle.setProperty('--on-primary', '#fff');
    rootStyle.setProperty('--check-bg', 'rgba(255,255,255,0.25)');
}

const logoImg = document.getElementById('logo');
if (tema) {
    const applyTheme = () => {
        if (tema.checked) {
            temaPreto();
            if (logoImg) logoImg.src = 'imagens/logoBranca.png';
            // ajustar contraste do texto do botão no modo escuro
            document.querySelectorAll('.btn-principal').forEach(btn => {
                btn.style.color = '#0b1220';
            });
        } else {
            temaBranco();
            if (logoImg) logoImg.src = 'imagens/logo.png';
            document.querySelectorAll('.btn-principal').forEach(btn => {
                btn.style.color = '#fff';
            });
        }
    };

    tema.addEventListener('change', applyTheme);

    applyTheme();
}

$(document).ready(function () {
    $('#phone').mask('(00) 00000-0000');
});   