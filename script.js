function carregar() {
    let msg = document.getElementById('mensagem');
    let img = document.getElementById('imagemHoras');
    let dataAtual = new Date();
    let hora = dataAtual.getHours();

    msg.innerHTML = `Agora são ${hora} horas `;

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png';
        document.body.style.background = '#F5F5DC';
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png';
        document.body.style.background = '#FA8072';
    } else {
        img.src = 'imagens/noite.png';
        document.body.style.background = '#001F3F';
    }
}

// Chamar a função quando a página é carregada
document.addEventListener('DOMContentLoaded', carregar);
