document.addEventListener('DOMContentLoaded', function() {
    const switchButtons = document.querySelectorAll('.header__nav-drop-language .header__nav-btn-language');

    const currentPath = window.location.pathname;
    function switchLanguage(targetLang) {
        let newPath = '';
        
        if (targetLang === 'ua') {
            if (currentPath.includes('/language/')) {
                 newPath = '../index.html'; 
            } else {
                newPath = 'index.html';
            }
        } 
        else if (targetLang === 'en') {
            if (!currentPath.includes('/language/')) {
                newPath = 'language/en.html'; 
            } else {
                newPath = 'en.html';
            }
        } else {
            return; 
        }
        
        window.location.href = newPath;
    }
    switchButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetLang = this.getAttribute('data-lang');
            if (targetLang) {
                switchLanguage(targetLang);
            }
        });
    });
});