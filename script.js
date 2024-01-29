const cards = document.querySelectorAll('.wrapper .card');
          
const handleCardInteraction = (index) => {
    cards.forEach((card, i) => {
        if (i === index) {
            card.style.width = '600px';
        } else {
            card.style.width = '120px';
        }
    });
};

cards.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
        handleCardInteraction(index);
    });
});

cards.forEach((card, index) => {
    card.addEventListener('touchstart', (event) => {
        event.preventDefault();
        handleCardInteraction(index);
    });
});