const body = document.body;
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

let caps = false;
let currentLang;
if(localStorage.myLang === 'rus') {
    currentLang = rus;
} else {
    currentLang = eng;
}

render(currentLang, 0);

function render(lang, alt) {
    lang.forEach(el => {
        const key = document.createElement('button');
        el.classNames.forEach( (cl) => {
            key.classList.add(cl)
        })
        key.setAttribute('data-val', el.content[alt]);
        key.innerText = el.content[alt] ? el.content[alt] : el.content[alt-1];
        const currentRow = document.querySelector(`.row${el.row}`);
        currentRow.append(key);
    });
}
function clear() {
    const rows = keyboard.querySelectorAll('p');
    rows.forEach(row => {
        row.innerText = '';
    })
    
}
keyboard.addEventListener('mousedown', (event) => {
    const target = event.target;
    if(target.closest('.capslock')) {
        if(!caps) {
            clear();
            render(currentLang, 1);
            document.querySelector('.capslock').classList.add('active');
            caps = true;
        } else {
            clear();
            render(currentLang, 0);
            document.querySelector('.capslock').classList.remove('active');
            caps = false;
        }
    }
    if(target.closest('.backspace')) {
        textArea.innerHTML = textArea.innerHTML.slice(0, -1);
    }
    if(target.closest('.shift')) {
        clear();
        render(currentLang, 1)
        document.querySelector('.shift').classList.add('active');
        return;
    }
    if(target.closest('.enter')) {
        textArea.innerHTML += '\n';
    } else if(target.dataset.val === ' ') {
        textArea.innerHTML += '&#160;';
    }
    if(target.classList.contains('key')) {
        target.classList.add('active')
        if(target.innerHTML.length <= 1) {
            textArea.innerHTML += target.innerText;
        }
    }
})
keyboard.addEventListener('mouseup', (event) => {
    const target = event.target;
    if(target.closest('.shift')) {
        clear();
        render(currentLang, 0);
        document.querySelector('.shift').classList.remove('active');
        return;
    }
    target.classList.remove('active');
    if(caps) {
        document.querySelector('.capslock').classList.add('active');
    }
})


document.addEventListener('keydown', (event) => {
    if(event.key === 'CapsLock') {
        if(!caps) {
            clear();
            render(currentLang, 1);
            document.querySelector('.capslock').classList.add('active');
            caps = true;
        } else {
            clear();
            render(currentLang, 0);
            document.querySelector('.capslock').classList.remove('active');
            caps = false;
        }
        return;
    }
    if(event.altKey && event.shiftKey) {
        clear();
        localStorage.getItem('myLang') === 'eng' ? localStorage.setItem('myLang', 'rus') : localStorage.setItem('myLang', 'eng')
        currentLang === eng ? currentLang = rus : currentLang = eng;
        render(currentLang, 0)
        return;
    }
    if(event.ctrlKey) {
        document.querySelector('[data-val=Ctrl]').classList.add('active');
        return;
    }
    if(event.shiftKey) {
        clear();
        render(currentLang, 1);
        document.querySelector('.shift').classList.add('active');
        return;
        
    }
    if(event.key.length <= 1) {
        textArea.innerHTML += event.key;
    }
    if(event.code === 'Space') {
        document.querySelector('.space').classList.add('active');
        return;
    }
    const button = document.querySelector('[data-val='+ event.key +']');
    button.classList.add('active');
})
document.addEventListener('keyup', (event) => {
    const button = document.querySelector('[data-val='+ event.key +']');
    if(event.key === 'Control') {
        document.querySelector('[data-val=Ctrl]').classList.remove('active');
        return;
    }
    if(event.key === 'Shift') {
        clear();
        render(currentLang, 0);
        document.querySelector('.shift').classList.remove('active');
        
    }
    if(event.code === 'Space') {
        document.querySelector('.space').classList.remove('active');
        return;
    }
    button.classList.remove('active');
    if(caps) {
        document.querySelector('.capslock').classList.add('active');
    }
})

