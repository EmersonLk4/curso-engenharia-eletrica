// ===== FAQ ACCORDION =====
function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
}

// ===== MOBILE MENU =====
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('open');
}
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

// ===== FORMSPREE SUBMIT =====
async function handleSubmit() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const plano = document.getElementById('plano').value;
    const msg = document.getElementById('form-msg');
    const btn = document.getElementById('btn-submit');

    // Validação
    if (!nome) {
        showMsg(msg, '⚠️ Por favor, preencha o seu nome.', 'error');
        return;
    }
    if (!email || !email.includes('@')) {
        showMsg(msg, '⚠️ Por favor, insira um e-mail válido.', 'error');
        return;
    }

    // Estado de loading
    btn.disabled = true;
    btn.textContent = 'A enviar...';

    try {
        const response = await fetch('https://formspree.io/f/xbdvrlpd', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ nome, email, plano, origem: 'landing_page' })
        });

        if (response.ok) {
            showMsg(msg, '✅ Inscrição realizada com sucesso! Verifique o seu e-mail.', 'success');
            document.getElementById('nome').value = '';
            document.getElementById('email').value = '';
            document.getElementById('plano').value = 'gratuito';
        } else {
            const data = await response.json();
            showMsg(msg, data?.errors?.[0]?.message || '❌ Erro ao enviar. Tente novamente.', 'error');
        }
    } catch (err) {
        showMsg(msg, '❌ Sem ligação. Verifique a internet e tente novamente.', 'error');
    } finally {
        btn.disabled = false;
        btn.textContent = 'Inscreva-se Grátis';
    }
}

function showMsg(el, text, type) {
    el.textContent = text;
    el.style.color = type === 'success' ? '#FFB347' : '#FF6B6B';
}

// ===== NAVBAR SHADOW ON SCROLL =====
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    nav.style.boxShadow = window.scrollY > 20
        ? '0 2px 12px rgba(0,0,0,0.3)'
        : '0 1px 0 rgba(255,255,255,0.06)';
});