document.querySelector('.choice__button').addEventListener('click', () => {

  const header = document.querySelector('.header');
  const choice = document.querySelector('.choice');
  const card1 = document.querySelector('.cards__disine1');
  const card2 = document.querySelector('.cards__disine2');
  header.classList.add('clear');
  choice.classList.add('clear');
  card1.classList.add('clear');
  card2.classList.add('clear');

  const gameArea = document.createElement('div');
  gameArea.className = 'gameArea';
  document.body.append(gameArea);
  const game = document.querySelector('.gameArea');

  function getCards(a) {
    for(let i=1; i<=a; i++) {
      let div = document.createElement('div');
      div.className = 'card';
      game.appendChild(div);
    }
  }

  function getCovers() {
    let cards = document.querySelectorAll('.card');
    cards.forEach(function(card, index) {
      let cover = document.createElement('div');
      cover.className = 'cover';
      card.append(cover);
    })
  }

  function openCard() {
    let cards = document.querySelectorAll('.card');
    let random = Math.floor(Math.random() * cards.length);
    let bug = cards[random];

    let cardFlipped = false;

    for (let i = 0; i < cards.length; i++) {
      function rotate() {
        if (cards[i] == bug) {
          cards[i].classList.add('bug');
        } else {
            cards[i].classList.add('gameOver');
        }
      }

      cards[i].addEventListener('click', () => {
        if (cardFlipped == true) {
          window.location.reload();
        } else {
            rotate();
            cardFlipped = true;
        }
      })
    }
  }

  const levels = document.querySelectorAll('.choice__radio');
  for (let i=0; i < levels.length; i++) {
    if (levels[i].checked) {
      let value = levels[i].value;

      if (value === 'easy') {
        getCards(3);
      }

      if (value === 'normal') {
        getCards(6);
      }
      
      if (value === 'hard') {
        getCards(10);
        game.classList.add('gameArea10');
      }

    getCovers();
    openCard();
    }
  }
})