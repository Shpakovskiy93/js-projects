const carouselInner = document.querySelector('.carousel__inner');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const items = document.querySelectorAll('.item');

const slideWidth = slides[0].clientWidth;
let index = 0;

carouselInner.insertAdjacentHTML('afterbegin', slides[slides.length - 1].outerHTML);
carouselInner.insertAdjacentHTML('beforeend', slides[0].outerHTML);

carouselInner.style.transform = `translateX(${-slideWidth}px)`;

nextBtn.addEventListener('click', () => {
    carouselInner.style.transition = 'all 0.3s ease-in-out';

    index++;
    carouselInner.style.transform = `translateX(${-slideWidth * (index + 1)}px)`;

    items.forEach(item => item.classList.remove('active'));

    if(index > slides.length - 1) {
        setTimeout(() => {
            index = 0;
            carouselInner.style.transform = `translateX(${-slideWidth}px)`;
            items[index].classList.add('active');
            carouselInner.style.transition = 'none';
        }, 300)
    } else {
        items[index].classList.add('active');
    }
})
prevBtn.addEventListener('click', () => {
    carouselInner.style.transition = 'all 0.3s ease-in-out';

    index--;
    carouselInner.style.transform = `translateX(${-slideWidth * (index + 1)}px)`;

    items.forEach(item => item.classList.remove('active'));

    if(index < 0) {
        setTimeout(() => {
            index = slides.length - 1;
            carouselInner.style.transform = `translateX(${-slideWidth * (index + 1)}px)`;
            items[index].classList.add('active');
            carouselInner.style.transition = 'none';
        }, 300)
    } else {
        items[index].classList.add('active');
    }
})

items.forEach((item,i) => {
    item.addEventListener('click', () => {
        index = i;
        items.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
        carouselInner.style.transform = `translateX(${-slideWidth * (index + 1)}px)`;
    })
})