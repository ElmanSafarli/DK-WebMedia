const anchors = document.querySelectorAll('a[href*="#"]');
const slider = document.querySelector('.slider');
const nextButton = document.querySelector('.next-button');




for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

document.addEventListener('DOMContentLoaded', function () {
    const balloons = document.querySelectorAll('.header-ball');
    const serviceB = document.querySelectorAll('.service-ball');
    const contactB = document.querySelectorAll('.contact-shadow');

    const balloonScrollSpeed = 0.08; // Adjust the balloon scroll speed as needed

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;

        balloons.forEach((balloon, index) => {
            // Balloon speed is adjusted based on its index to create a parallax effect
            const balloonScroll = -scrollY * (balloonScrollSpeed + index * 0.4);
            balloon.style.transform = `translateY(${balloonScroll}px)`;
        });

        serviceB.forEach((balloon, index) => {
            // Balloon speed is adjusted based on its index to create a parallax effect
            const balloonScroll = -scrollY * (balloonScrollSpeed + index * 0.4);
            balloon.style.transform = `translateY(${balloonScroll}px)`;
        });

        contactB.forEach((balloon, index) => {
            // Balloon speed is adjusted based on its index to create a parallax effect
            const balloonScroll = -scrollY * (balloonScrollSpeed + index * 0.2);
            balloon.style.transform = `translateY(${balloonScroll}px)`;
        });
    });
});

if (nextButton) {
    nextButton.addEventListener('click', () => {
        const firstSlide = slider.firstElementChild;
        const cloneSlide = firstSlide.cloneNode(true);
        slider.removeChild(firstSlide);
        slider.appendChild(cloneSlide);
        setTimeout(() => {
            slider.style.transition = '';
        }, 50);
    });
}
