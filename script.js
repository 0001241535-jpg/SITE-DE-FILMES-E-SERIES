document.addEventListener('DOMContentLoaded', () => {

    // --- 1. VALIDAÇÃO E ENVIO DO FORMULÁRIO DE LOGIN ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value.trim();
            const senha = document.getElementById('senha').value.trim();

            if (!email || !senha) {
                alert('Por favor, preencha todos os campos!');
                return;
            }

            // Guardar sessão simulada no navegador
            localStorage.setItem('user_email', email);
            
            // Redireciona para a página inicial logada
            window.location.href = 'inicial.html';
        });
    }

    // --- 2. VALIDAÇÃO DO FORMULÁRIO DE CADASTRO ---
    const cadastroForm = document.querySelector('.auth-box form');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputs = cadastroForm.querySelectorAll('input');
            const nome = inputs[0].value.trim();
            const email = inputs[1].value.trim();
            const senha = inputs[2].value;
            const confirmaSenha = inputs[3].value;

            if (!nome || !email || !senha || !confirmaSenha) {
                alert('Por favor, preencha todos os campos!');
                return;
            }

            if (senha !== confirmaSenha) {
                alert('As senhas não coincidem!');
                return;
            }

            alert('Conta criada com sucesso! Redirecionando para a área principal...');
            localStorage.setItem('user_email', email);
            window.location.href = 'inicial.html';
        });
    }

    // --- 3. CLIQUE NOS CARDS DE FILMES E SÉRIES ---
    const cards = document.querySelectorAll('.card-midia');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const titulo = card.querySelector('h3')?.innerText || 'o conteúdo';
            alert(`A abrir o Reprodutor de Vídeo para: ${titulo}`);
        });
    });

});