const menuToggle = document.querySelector('.toggle');

const mainSection = document.querySelector('.main');

menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('active');
    mainSection.classList.toggle('active');
})