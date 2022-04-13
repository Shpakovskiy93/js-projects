const romes = {
    'm' : 1000000,
    'd' : 500000,
    'c' : 100000,
    'x' : 10000,
    'v' : 5000,
    'M' : 1000,
    'CM' : 900,
    'D' : 500,
    'CD' : 400,
    'C' : 100,
    'XC' : 90,
    'L' : 50,
    'XL' : 40,
    'X' : 10,
    'IX' : 9,
    'V' : 5,
    'IV' : 4,
    'I' : 1
}

const convertBtn = document.querySelector('.convert__btn');
const clearBtn = document.querySelector('.clear__btn');
const numberInput = document.querySelector('.standart__number-input');
const romanInput = document.querySelector('.roman__number-input');

function romanConvert(num) {
    let result = '';
    for(let key in romes) {
        while (romes[key] <= num) {
            result += key;
            num = num - romes[key];
        }
    }
    return result;
}
function clearInputs() {
    numberInput.value = '';
    romanInput.value = '';
}

convertBtn.addEventListener('click', () => {
    let num = numberInput.value;
    if(num > 4000000) {
        alert('The number must not exceed 4000000');
        clearInputs();
    } else {
        romanInput.value = romanConvert(num);
    }
})
clearBtn.addEventListener('click', clearInputs);