const cardStack = document.querySelector('.card-stack');
const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

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
}

// Função para avançar para o próximo card
function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length; // Avança para o próximo card (com loop)
    updateCards();
}

// Função para voltar ao card anterior
function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Volta ao card anterior (com loop)
    updateCards();
}

// Event listeners para os botões
prevBtn.addEventListener('click', prevCard);
nextBtn.addEventListener('click', nextCard);

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
            // Remove a classe "active" de todos os cards
            cards.forEach(c => c.classList.remove("active"));
            // Adiciona a classe "active" apenas ao card atual
            card.classList.add("active");
        });

        card.addEventListener("mouseleave", () => {
            // Remove a classe "active" ao sair do card
            card.classList.remove("active");
        });
    });
});