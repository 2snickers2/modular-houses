const galleries = {
    house1: [
        "../../images/будинок1.png",
        "../../images/планування будинок 1.1.jpg",
        ".././images/планування будинок 1.2.jpg"
    ],
    house2: [
        "../../images/будинок 2.jpg",
        "../../images/план будинку 2.jpeg"
    ],
    house3: [
        "../../images/будинок3.jpg",
        "../../images/план будинку 3.jpg"
    ],
    house4: [
        "../../images/будинок4.jpg",
        "../../images/план будинку 4.jpg"
    ],
    house5: [
        "../../images/будинок5.jpg",
        "../../images/будинок5.2.jpg",
        "../../images/будинок5.3.jpg",
        "../../images/план будинок5.png"
    ],
    house6: [
        "../../images/house6.png",
        "../../images/план будинку 6.jpg"
    ]
};

const modal = document.getElementById("galleryModal");
const wrapper = document.getElementById("galleryWrapper");
const closeBtn = document.querySelector(".gallery-close");

let swiper;

document.querySelectorAll(".zoom-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const galleryName = btn.dataset.gallery;
        const images = galleries[galleryName];

        wrapper.innerHTML = "";

        images.forEach(img => {
            wrapper.innerHTML += `
                <div class="swiper-slide">
                    <img src="${img}">
                </div>
            `;
        });

        modal.classList.add("active");

        if (swiper) swiper.destroy(true, true);

        swiper = new Swiper(".gallery-content", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});