// Fonctions utilitaires pour l'application Bio Sainte-Rose

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Application Bio Sainte-Rose chargée');
    
    // Ajoute des effets de survol améliorés
    enhanceInteractions();
    
    // Gestion du mode sombre (optionnel)
    // initDarkMode();
});

// Améliore les interactions utilisateur
function enhanceInteractions() {
    // Animation des cartes au survol
    const cards = document.querySelectorAll('.category-card, .espece-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Gestion des erreurs de chargement d'image
function handleImageError(img) {
    img.onerror = null; // Évite les boucles infinies
    img.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2218%22 text-anchor=%22middle%22 fill=%22%23999%22%3EImage non disponible%3C/text%3E%3C/svg%3E';
}

// Fonction pour compter les caractères dans la description
function updateCharacterCount(textarea, counterElement) {
    if (!textarea || !counterElement) return;
    
    const count = textarea.value.length;
    counterElement.textContent = `${count} caractères`;
}

// Fonction de recherche locale (optionnel pour une future implémentation)
function searchSpecies(query) {
    const cards = document.querySelectorAll('.espece-card');
    const lowerQuery = query.toLowerCase();
    
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const species = card.querySelector('.espece-scientifique')?.textContent.toLowerCase() || '';
        
        if (title.includes(lowerQuery) || species.includes(lowerQuery)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Notification toast simple
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : '#f44336'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Ajoute les styles d'animation pour les notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Confirmation de sauvegarde
if (window.location.pathname.includes('/fiche/')) {
    const form = document.getElementById('descriptionForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Optionnel: ajouter une confirmation
            // if (!confirm('Voulez-vous enregistrer ces modifications ?')) {
            //     e.preventDefault();
            // }
        });
    }
}

// Mode hors ligne (optionnel)
window.addEventListener('online', () => {
    showNotification('Connexion rétablie', 'success');
});

window.addEventListener('offline', () => {
    showNotification('Mode hors ligne', 'warning');
});

// Lazy loading des images (optionnel)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
