const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipcard() {
  this.classList.add('flip');
  if (!hasFlippedCard) {
    //first click
    hasFlippedCard= true;
    firstCard = this;
  } else {
    //second click
    hasFlippedCard = false;
    secondCard = this;
    //do cards match?
    if (firstCard.xxx.xxx === secondCard.xxx.xxx){
      //its a match
      firstCard.removeEventListener('click', flipcard);
      secondCard.removeEventListener('click', flipcard);
    } else {
      //its not a match
      setTimeout(() => {}
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
    }
  }
}

cards.forEach(card => card.addEventListener('click', flipcard));
