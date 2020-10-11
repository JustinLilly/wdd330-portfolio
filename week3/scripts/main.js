const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click', () => console.log('click'));
clickParagraph.addEventListener('mousedown', () => console.log('down'));
clickParagraph.addEventListener('mouseup', () => console.log('up'));

const doubleClickParagraph = document.getElementById('click');
doubleClickParagraph.addEventListener('dblclick', highlight);
function highlight(event) {
    event.target.classList.toggle('highlight');
}

const mouseParagraph = document.getElementById('mouseParagraph');
mouseParagraph.addEventListener('mousemove', () => console.log('You Moved!') );
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);



const keyPress = document.getElementById('keypress');
keyPress.addEventListener('keydown', highlight);
keyPress.addEventListener('keyup', (event) => console.log(`You
➥ stopped pressing the key on ${new Date}`));



// keyPress.addEventListener('keydown', (event) => {
//     if (event.key === 'c' && event.ctrlKey) {
//         console.log('Action')
//     }
// });