const footer = document.querySelector(".instruction");
const pInInstruction = document.querySelector(`.instruction p:nth-of-type(2)`);
const images = document.querySelectorAll('.hand')
footer.addEventListener(`click`, () => {
    footer.classList.toggle('active');
    pInInstruction.classList.toggle('active');
});

function handSelection() {
    images.forEach(img => img.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 3px red';
}

images.forEach(img => img.addEventListener('click', handSelection));