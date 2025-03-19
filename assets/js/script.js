const cardStack = document.querySelector('.card-stack');
const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

// Função para atualizar a visibilidade dos cards
function updateCards() {
    cards.forEach((card, index) => {
        if (index === currentIndex) {
            card.classList.add('active');
            card.classList.remove('prev', 'next');
        } else if (index === currentIndex - 1 || (currentIndex === 0 && index === cards.length - 1)) {
            card.classList.remove('active', 'next');
            card.classList.add('prev');
        } else if (index === currentIndex + 1 || (currentIndex === cards.length - 1 && index === 0)) {
            card.classList.remove('active', 'prev');
            card.classList.add('next');
        } else {
            card.classList.remove('active', 'prev', 'next');
        }
    });
    updateIndicators();
}

// Função para atualizar os indicadores
function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Função para avançar para o próximo card
function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
}

// Função para voltar ao card anterior
function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCards();
}

// Event listeners para os botões
prevBtn.addEventListener('click', prevCard);
nextBtn.addEventListener('click', nextCard);

// Event listeners para os indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCards();
    });
});

// Inicializa os cards
updateCards();

// Funcionalidades para o Feedbacks
document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll(".feedback-row");

    rows.forEach(row => {
        // Duplica os cards para criar o efeito de loop infinito
        row.innerHTML += row.innerHTML;
    });
});

// Funcionalidades para Diferenciais
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".diferencial-card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            cards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("active");
        });
    });
});

// Seleciona os elementos do DOM
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Adiciona um evento de clique ao botão de menu mobile
menuToggle.addEventListener('click', () => {
    // Alterna a classe 'active' no menu e no botão
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove a classe 'active' do menu e do botão
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        // Remove a classe 'active' do menu e do botão
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});