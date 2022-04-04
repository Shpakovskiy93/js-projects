function main() {
    const btns = document.querySelectorAll('.btn');
    const cards = document.querySelectorAll('.card');

    function filterCard(category, items) {
        items.forEach(item => {
            const isItemFilter = !item.classList.contains(category);
            const isShowAll = category.toLowerCase() === 'all';
            if(isItemFilter && !isShowAll) {
                item.classList.add('anime');
            } else {
                item.classList.remove('hide');
                item.classList.remove('anime');
            }
        })
    }

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentCategory = btn.dataset.filter;
            filterCard(currentCategory, cards);
        })
    })

    cards.forEach(card => {
        card.ontransitionend = function() {
            if(card.classList.contains('anime')) {
                card.classList.add('hide');
            }
        }
    })
}
main()