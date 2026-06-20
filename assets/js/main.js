// ===== FAQ ACCORDION =====
function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
}

// ===== MOBILE MENU =====
function toggleMenu() {
    const links = document.querySelector('.nav-links');
    links.classList.toggle('open');
}

// Fecha menu ao clicar num link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('open');
    });
});

// ===== SCROLL TO FORM =====
function scrollToForm() {
    document.getElementById('inscricao').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => document.getElementById('nome').focus(), 600);
}

// ===== FORM SUBMIT =====
function handleSubmit() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('form-msg');

    if (!nome) {
        msg.style.color = '#FF6B6B';
        msg.textContent = 'Por favor, preencha o seu nome.';
        return;
    }
    if (!email || !email.includes('@')) {
        msg.style.color = '#FF6B6B';
        msg.textContent = 'Por favor, insira um e-mail válido.';
        return;
    }

    msg.style.color = '#FFB347';
    msg.textContent = '✅ Inscrição realizada com sucesso! Verifique o seu e-mail.';
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
}

// ===== NAVBAR SHADOW ON SCROLL =====
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        nav.style.boxShadow = '0 2px 12px rgba(0,0,0,0.3)';
    } else {
        nav.style.boxShadow = '0 1px 0 rgba(255,255,255,0.06)';
    }
});