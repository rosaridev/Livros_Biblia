// js/script.js

// Lista completa dos livros da Bíblia
const bibleBooks = [
    // Antigo Testamento (39 livros)
    { id: 1, name: "Gênesis", testament: "old", chapters: 50 },
    { id: 2, name: "Êxodo", testament: "old", chapters: 40 },
    { id: 3, name: "Levítico", testament: "old", chapters: 27 },
    { id: 4, name: "Números", testament: "old", chapters: 36 },
    { id: 5, name: "Deuteronômio", testament: "old", chapters: 34 },
    { id: 6, name: "Josué", testament: "old", chapters: 24 },
    { id: 7, name: "Juízes", testament: "old", chapters: 21 },
    { id: 8, name: "Rute", testament: "old", chapters: 4 },
    { id: 9, name: "1 Samuel", testament: "old", chapters: 31 },
    { id: 10, name: "2 Samuel", testament: "old", chapters: 24 },
    { id: 11, name: "1 Reis", testament: "old", chapters: 22 },
    { id: 12, name: "2 Reis", testament: "old", chapters: 25 },
    { id: 13, name: "1 Crônicas", testament: "old", chapters: 29 },
    { id: 14, name: "2 Crônicas", testament: "old", chapters: 36 },
    { id: 15, name: "Esdras", testament: "old", chapters: 10 },
    { id: 16, name: "Neemias", testament: "old", chapters: 13 },
    { id: 17, name: "Ester", testament: "old", chapters: 10 },
    { id: 18, name: "Jó", testament: "old", chapters: 42 },
    { id: 19, name: "Salmos", testament: "old", chapters: 150 },
    { id: 20, name: "Provérbios", testament: "old", chapters: 31 },
    { id: 21, name: "Eclesiastes", testament: "old", chapters: 12 },
    { id: 22, name: "Cânticos", testament: "old", chapters: 8 },
    { id: 23, name: "Isaías", testament: "old", chapters: 66 },
    { id: 24, name: "Jeremias", testament: "old", chapters: 52 },
    { id: 25, name: "Lamentações", testament: "old", chapters: 5 },
    { id: 26, name: "Ezequiel", testament: "old", chapters: 48 },
    { id: 27, name: "Daniel", testament: "old", chapters: 12 },
    { id: 28, name: "Oséias", testament: "old", chapters: 14 },
    { id: 29, name: "Joel", testament: "old", chapters: 3 },
    { id: 30, name: "Amós", testament: "old", chapters: 9 },
    { id: 31, name: "Obadias", testament: "old", chapters: 1 },
    { id: 32, name: "Jonas", testament: "old", chapters: 4 },
    { id: 33, name: "Miqueias", testament: "old", chapters: 7 },
    { id: 34, name: "Naum", testament: "old", chapters: 3 },
    { id: 35, name: "Habacuque", testament: "old", chapters: 3 },
    { id: 36, name: "Sofonias", testament: "old", chapters: 3 },
    { id: 37, name: "Ageu", testament: "old", chapters: 2 },
    { id: 38, name: "Zacarias", testament: "old", chapters: 14 },
    { id: 39, name: "Malaquias", testament: "old", chapters: 4 },
    
    // Novo Testamento (27 livros)
    { id: 40, name: "Mateus", testament: "new", chapters: 28 },
    { id: 41, name: "Marcos", testament: "new", chapters: 16 },
    { id: 42, name: "Lucas", testament: "new", chapters: 24 },
    { id: 43, name: "João", testament: "new", chapters: 21 },
    { id: 44, name: "Atos", testament: "new", chapters: 28 },
    { id: 45, name: "Romanos", testament: "new", chapters: 16 },
    { id: 46, name: "1 Coríntios", testament: "new", chapters: 16 },
    { id: 47, name: "2 Coríntios", testament: "new", chapters: 13 },
    { id: 48, name: "Gálatas", testament: "new", chapters: 6 },
    { id: 49, name: "Efésios", testament: "new", chapters: 6 },
    { id: 50, name: "Filipenses", testament: "new", chapters: 4 },
    { id: 51, name: "Colossenses", testament: "new", chapters: 4 },
    { id: 52, name: "1 Tessalonicenses", testament: "new", chapters: 5 },
    { id: 53, name: "2 Tessalonicenses", testament: "new", chapters: 3 },
    { id: 54, name: "1 Timóteo", testament: "new", chapters: 6 },
    { id: 55, name: "2 Timóteo", testament: "new", chapters: 4 },
    { id: 56, name: "Tito", testament: "new", chapters: 3 },
    { id: 57, name: "Filemom", testament: "new", chapters: 1 },
    { id: 58, name: "Hebreus", testament: "new", chapters: 13 },
    { id: 59, name: "Tiago", testament: "new", chapters: 5 },
    { id: 60, name: "1 Pedro", testament: "new", chapters: 5 },
    { id: 61, name: "2 Pedro", testament: "new", chapters: 3 },
    { id: 62, name: "1 João", testament: "new", chapters: 5 },
    { id: 63, name: "2 João", testament: "new", chapters: 1 },
    { id: 64, name: "3 João", testament: "new", chapters: 1 },
    { id: 65, name: "Judas", testament: "new", chapters: 1 },
    { id: 66, name: "Apocalipse", testament: "new", chapters: 22 }
];

// Estado da aplicação
let readBooks = JSON.parse(localStorage.getItem('bibleReadBooks')) || [];
let currentFilter = 'all';

// Inicializar a aplicação
document.addEventListener('DOMContentLoaded', function() {
    renderBooks();
    updateStats();
    setupEventListeners();
    showWelcomeMessage();
});

// Renderizar os livros
function renderBooks() {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = '';
    
    // Filtrar livros conforme o filtro atual
    let filteredBooks = bibleBooks;
    
    if (currentFilter === 'old-testament') {
        filteredBooks = bibleBooks.filter(book => book.testament === 'old');
    } else if (currentFilter === 'new-testament') {
        filteredBooks = bibleBooks.filter(book => book.testament === 'new');
    } else if (currentFilter === 'read') {
        filteredBooks = bibleBooks.filter(book => readBooks.includes(book.id));
    } else if (currentFilter === 'unread') {
        filteredBooks = bibleBooks.filter(book => !readBooks.includes(book.id));
    }
    
    // Renderizar cada livro
    filteredBooks.forEach(book => {
        const isRead = readBooks.includes(book.id);
        
        const bookElement = document.createElement('div');
        bookElement.className = `book-card ${isRead ? 'read' : ''}`;
        bookElement.dataset.id = book.id;
        
        bookElement.innerHTML = `
            <div class="book-number">${book.id}</div>
            <h3>${book.name}</h3>
            <p>${book.chapters} capítulos</p>
            <div class="book-status">${isRead ? 'Lido' : 'Não lido'}</div>
        `;
        
        bookElement.addEventListener('click', () => toggleBookStatus(book.id));
        
        booksContainer.appendChild(bookElement);
    });
}

// Alternar status de leitura de um livro
function toggleBookStatus(bookId) {
    if (readBooks.includes(bookId)) {
        readBooks = readBooks.filter(id => id !== bookId);
    } else {
        readBooks.push(bookId);
    }
    
    // Salvar no localStorage
    localStorage.setItem('bibleReadBooks', JSON.stringify(readBooks));
    
    // Atualizar a interface
    renderBooks();
    updateStats();
    
    // Feedback visual
    const bookElement = document.querySelector(`.book-card[data-id="${bookId}"]`);
    if (bookElement) {
        bookElement.style.transform = 'scale(1.05)';
        setTimeout(() => {
            bookElement.style.transform = '';
        }, 300);
    }
}

// Atualizar estatísticas
function updateStats() {
    const totalBooks = bibleBooks.length;
    const readCount = readBooks.length;
    const progressPercent = Math.round((readCount / totalBooks) * 100);
    
    document.getElementById('read-books').textContent = readCount;
    document.getElementById('progress-percent').textContent = `${progressPercent}%`;
    
    // Atualizar cor do progresso baseado na porcentagem
    const progressElement = document.getElementById('progress-percent');
    if (progressPercent === 100) {
        progressElement.style.color = '#27ae60';
    } else if (progressPercent >= 50) {
        progressElement.style.color = '#f39c12';
    } else {
        progressElement.style.color = '#e74c3c';
    }
}

// Configurar ouvintes de eventos
function setupEventListeners() {
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remover classe active de todos os botões
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Adicionar classe active ao botão clicado
            this.classList.add('active');
            
            // Aplicar filtro
            currentFilter = this.dataset.filter;
            renderBooks();
        });
    });
    
    // Marcar todos como lidos
    document.getElementById('mark-all-read').addEventListener('click', function() {
        if (readBooks.length === bibleBooks.length) {
            alert('Todos os livros já estão marcados como lidos!');
            return;
        }
        
        if (confirm('Deseja marcar TODOS os 66 livros como lidos?')) {
            readBooks = bibleBooks.map(book => book.id);
            localStorage.setItem('bibleReadBooks', JSON.stringify(readBooks));
            renderBooks();
            updateStats();
            
            // Feedback
            showNotification('Todos os livros foram marcados como lidos!', 'success');
        }
    });
    
    // Desmarcar todos
    document.getElementById('mark-all-unread').addEventListener('click', function() {
        if (readBooks.length === 0) {
            alert('Nenhum livro está marcado como lido!');
            return;
        }
        
        if (confirm('Deseja desmarcar TODOS os livros?')) {
            readBooks = [];
            localStorage.setItem('bibleReadBooks', JSON.stringify(readBooks));
            renderBooks();
            updateStats();
            
            // Feedback
            showNotification('Todos os livros foram desmarcados!', 'info');
        }
    });
    
    // Salvar progresso
    document.getElementById('save-progress').addEventListener('click', function() {
        // Em uma aplicação real, aqui enviaríamos para um servidor
        // Por enquanto, apenas feedback visual
        showNotification('Progresso salvo com sucesso!', 'success');
        
        // Feedback no botão
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-check"></i> Progresso Salvo!';
        this.disabled = true;
        
        setTimeout(() => {
            this.innerHTML = originalText;
            this.disabled = false;
        }, 1500);
    });
    
    // Resetar progresso
    document.getElementById('reset-progress').addEventListener('click', function() {
        if (readBooks.length === 0) {
            alert('Não há progresso para resetar!');
            return;
        }
        
        if (confirm('Tem certeza que deseja resetar todo o seu progresso?\nEsta ação não pode ser desfeita.')) {
            readBooks = [];
            localStorage.removeItem('bibleReadBooks');
            renderBooks();
            updateStats();
            
            // Feedback
            showNotification('Progresso resetado com sucesso!', 'warning');
        }
    });
}

// Mostrar mensagem de boas-vindas
function showWelcomeMessage() {
    // Verificar se é a primeira vez que o usuário acessa
    const firstAccess = localStorage.getItem('firstAccess');
    
    if (!firstAccess) {
        setTimeout(() => {
            alert('Bem-vindo ao Leitura da Bíblia!\n\nClique nos livros para marcá-los como lidos e acompanhe seu progresso.\n\nSeu progresso é salvo automaticamente no seu navegador.');
            localStorage.setItem('firstAccess', 'true');
        }, 500);
    }
}

// Mostrar notificação
function showNotification(message, type = 'info') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos para a notificação
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease;
    `;
    
    // Cor baseada no tipo
    if (type === 'success') {
        notification.style.backgroundColor = '#27ae60';
    } else if (type === 'warning') {
        notification.style.backgroundColor = '#f39c12';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#e74c3c';
    } else {
        notification.style.backgroundColor = '#3498db';
    }
    
    // Adicionar ao corpo
    document.body.appendChild(notification);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
    
    // Adicionar estilos de animação
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Adicionar suporte para teclado (acessibilidade)
document.addEventListener('keydown', function(e) {
    // Ctrl+S para salvar
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        document.getElementById('save-progress').click();
    }
    
    // Esc para limpar filtros
    if (e.key === 'Escape' && currentFilter !== 'all') {
        document.querySelector('.filter-btn[data-filter="all"]').click();
    }
});