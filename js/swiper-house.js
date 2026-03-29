// const galleries = {
//     house1: [
//         "../images/будинок1.png",
//         "../images/планування будинок 1.1.jpg",
//         "../images/планування будинок 1.2.jpg"
//     ],
//     house2: [
//         "../images/будинок 2.jpg",
//         "../images/план будинку 2.jpeg"
//     ],
//     house3: [
//         "../images/будинок3.jpg",
//         "../images/план будинку 3.jpg"
//     ],
//     house4: [
//         "../images/будинок4.jpg",
//         "../images/план будинку 4.jpg"
//     ],
//     house5: [
//         "../images/будинок5.jpg",
//         "../images/будинок5.2.jpg",
//         "../images/будинок5.3.jpg",
//         "../images/план будинок5.png"
//     ],
//     house6: [
//         "../images/house6.png",
//         "../images/план будинку 6.jpg"
//     ]
// };

const isEnglishPage = window.location.pathname.includes('/language/');
const basePath = isEnglishPage ? '../' : '';

const galleries = {
    house1: [
        `${basePath}images/будинок1.png`,
        `${basePath}images/планування будинок 1.1.jpg`,
        `${basePath}images/планування будинок 1.2.jpg`
    ],
    house2: [
        `${basePath}images/будинок 2.jpg`,
        `${basePath}images/план будинку 2.jpeg`
    ],
    house3: [
        `${basePath}images/будинок3.jpg`,
        `${basePath}images/план будинку 3.jpg`
    ],
    house4: [
        `${basePath}images/будинок4.jpg`,
        `${basePath}images/план будинку 4.jpg`
    ],
    house5: [
        `${basePath}images/будинок5.jpg`,
        `${basePath}images/будинок5.2.jpg`,
        `${basePath}images/будинок5.3.jpg`,
        `${basePath}images/план будинок5.png`
    ],
    house6: [
        `${basePath}images/house6.png`,
        `${basePath}images/план будинку 6.jpg`
    ]
};
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('galleryModal');
    const wrapper = document.getElementById('galleryWrapper');
    const closeBtn = document.querySelector('.gallery-close');

    if (!modal || !wrapper || !closeBtn) {
        console.warn('Елементи галереї не знайдені');
        return;
    }

    let swiperInstance = null;

    document.querySelectorAll('.zoom-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const galleryName = btn.dataset.gallery;
            const images = galleries[galleryName];

            if (!images || !images.length) {
                console.warn(`Галерея ${galleryName} не знайдена`);
                return;
            }

            wrapper.innerHTML = '';

            images.forEach(img => {
                wrapper.innerHTML += `
                    <div class="swiper-slide">
                        <img src="${img}" alt="Фото будинку">
                    </div>
                `;
            });

            modal.classList.add('active');

            if (swiperInstance) {
                swiperInstance.destroy(true, true);
            }

            swiperInstance = new Swiper('.gallery-content', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});