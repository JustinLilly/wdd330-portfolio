function scale(event) {
    event.target.classList.toggle('scale');
}

const mouseScale = document.getElementById('transform');
mouseScale.addEventListener('mouseover', scale);
mouseScale.addEventListener('mouseout', scale);

function translate(event) {
    event.target.classList.toggle('translate');
}
const mouseTranslate = document.getElementById('translate');
mouseTranslate.addEventListener('click', translate);
mouseTranslate.addEventListener('click', translate);


// const clickRotate = document.getElementById('rotate');
// clickRotate.addEventListener('click', (event) => {
//     event.target.classList.toggle('rotate');
// });
// clickRotate.addEventListener('click', (event) => {
//     event.target.classList.toggle('rotate');
// });

