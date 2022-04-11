const textEl = document.querySelector('.cipher__text');
const cipherEl = document.querySelector('.cipher__caesar');
const btnEl = document.querySelector('.btn');
let offset = 3;

function textToCipher() {
    let str = textEl.value;
    let out = '';
    for(let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code = code + offset;
        out += String.fromCharCode(code);
    }
    cipherEl.value = out;
}
function cipherToText() {
    let str = cipherEl.value;
    let out = '';
    for(let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code = code - offset;
        out += String.fromCharCode(code);
    }
    textEl.value = out;
}


textEl.addEventListener('input', textToCipher);
cipherEl.addEventListener('input', cipherToText)