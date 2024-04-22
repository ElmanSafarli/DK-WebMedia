const anchors = document.querySelectorAll('a[href*="#"]');

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
            const balloonScroll = -scrollY * (balloonScrollSpeed + index * 0.16);
            balloon.style.transform = `translateY(${balloonScroll}px)`;
        });
    });
});