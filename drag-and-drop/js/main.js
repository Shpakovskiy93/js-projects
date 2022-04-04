function dragAndDrop() {
    const card = document.querySelector('.list__card');
    const cells = document.querySelectorAll('.list__cell');

    function dragStart() {
        setTimeout(() => {
            this.classList.add('hide');
        }, 0)
    };
    function dragEnd() {
        this.classList.remove('hide');
    };

    function dragOver(e) {
        e.preventDefault();
    };
    function dragEnter(e) {
        e.preventDefault();
        this.classList.add('hovered');
    };
    function dragLeave() {
        this.classList.remove('hovered');
    };
    function dragDrop() {
        this.append(card);
        this.classList.remove('hovered');
    }


    cells.forEach((cell) => {
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', dragDrop);
    })

    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
}

dragAndDrop()