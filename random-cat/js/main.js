const buttonEl = document.querySelector('.random__cat-btn');
const imageEl = document.querySelector('.cat__img');
const URL = 'http://aws.random.cat/meow';

fetchHandler();

async function fetchHandler() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        imageEl.src = data.file;
    } catch (error) {
        console.log(error);
    }
}

buttonEl.addEventListener('click', () => {
    let isloaded = imageEl.complete;
    if(isloaded) {
        fetchHandler()
    }
})