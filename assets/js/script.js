const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.createElement('div');

// Função para abrir/fechar o menu
function toggleMenu() {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Abrir/fechar o menu ao clicar no ícone
menuToggle.addEventListener('click', toggleMenu);

// Fechar o menu ao clicar em um link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Fechar o menu ao clicar fora dele
overlay.addEventListener('click', toggleMenu);