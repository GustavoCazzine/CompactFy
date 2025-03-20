// Carrossel de Produtos
const cardStack = document.querySelector('.card-stack');
const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

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

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCards();
}

prevBtn.addEventListener('click', prevCard);
nextBtn.addEventListener('click', nextCard);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCards();
    });
});

// Suporte para touch events
let touchStartX = 0;
let touchEndX = 0;

cardStack.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

cardStack.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    if (swipeDistance > 50) {
        prevCard();
    } else if (swipeDistance < -50) {
        nextCard();
    }
}

updateCards();

// Menu Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    const isExpanded = navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isExpanded);
});

document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', false);
    }
});

// FAQ Interativo
document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isExpanded = answer.classList.toggle('active');

            const icon = question.querySelector('i');
            icon.classList.toggle('fa-chevron-down', !isExpanded);
            icon.classList.toggle('fa-chevron-up', isExpanded);

            question.setAttribute('aria-expanded', isExpanded);
        });
    });
});