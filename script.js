// Função para o botão de inverter as cores (Tema Escuro)
const botaoTema = document.getElementById('alternar-tema');

botaoTema.onclick = () => {
    document.body.classList.toggle('modo-escuro');
};
