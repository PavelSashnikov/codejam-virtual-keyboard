const body = document.querySelector('body');
const textArea = document.createElement('textarea');
textArea.rows = 20;
textArea.cols = 70;
body.append(textArea);
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
body.append(keyboard);

const row0 = document.createElement('p');
row0.classList.add('row0');
keyboard.append(row0);
const row1 = document.createElement('p');
row1.classList.add('row1');
keyboard.append(row1);
const row2 = document.createElement('p');
row2.classList.add('row2');
keyboard.append(row2);
const row3 = document.createElement('p');
row3.classList.add('row3');
keyboard.append(row3);
const row4 = document.createElement('p');
row4.classList.add('row4');
keyboard.append(row4);

render(eng, 1);

function render(lang, alt) {
    lang.forEach(el => {
        const key = document.createElement('button');
        el.classNames.forEach( (cl) => {
            key.classList.add(cl)
        })
        key.innerText = el.content[alt] ? el.content[alt] : el.content[alt-1];
        const currentRow = document.querySelector('.row'+el.row);
        currentRow.append(key);
    });
}
keyboard.addEventListener('click', (event) => {
    const target = event.target;
    if(target.innerText === 'Enter') {
        textArea.innerHTML += '\n';
    }
    if(target.classList.contains('key') && target.innerHTML.length <= 1) {
        textArea.innerHTML += target.innerText;
    }
})
document.addEventListener('keydown', (event) => {
    textArea.innerHTML += event.key;
    console.log(targetKey);
})

