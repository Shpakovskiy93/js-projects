const usdEl = document.querySelector('[data-value="USD"]');
const eurEl = document.querySelector('[data-value="EUR"]');
const rubEl = document.querySelector('[data-value="RUB"]');

const inputEl = document.querySelector('#input');
const resultEl = document.querySelector('#result');
const selectEl = document.querySelector('#select');

const rates = {};


async function getCurrencies() {
    const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    const data =  await response.json();
    const result = await data;

    rates.EUR = result[32];
    rates.USD = result[26];
    rates.RUB = result[18];

    usdEl.textContent = rates.USD.rate.toFixed(2);
    eurEl.textContent = rates.EUR.rate.toFixed(2);
    rubEl.textContent = rates.RUB.rate.toFixed(2);
}
getCurrencies()
setInterval(getCurrencies, 600000)

function convert() {
    resultEl.value = (+inputEl.value / rates[selectEl.value].rate).toFixed(2);
}


inputEl.oninput = convert;

selectEl.oninput = convert;
