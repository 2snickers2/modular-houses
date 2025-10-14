document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
         });
        });
    });
