const btnRollEl = document.querySelector('.board-btn-roll');
const boardDiceEl = document.querySelector('.board-dice');
const boardHalfList = document.querySelectorAll('.board-half');
const btnHoldEl = document.querySelector('.board-btn-hold');
const boardScoreEl = document.querySelector('.board-score');
const btnNewEl = document.querySelector('.board-btn-new');

const modalCloseEl = document.querySelector('.modal-close');
const modalEl = document.querySelector('.backdrop');
const modalTextEl = document.querySelector('.modal-text span');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const clearBox = () => {
  item.classList.toggle('active');
  item.querySelector('.board-box-score').textContent = '0';
};

const modalOpen = () => {
  modalEl.classList.toggle('is-hidden');
};

btnRollEl.addEventListener('click', () => {
  boardDiceEl.textContent = getRandomInt(1, 6);
  for (item of boardHalfList) {
    if (item.classList.contains('active')) {
      item.querySelector('.board-box-score').textContent =
        Number(item.querySelector('.board-box-score').textContent) +
        Number(boardDiceEl.textContent);
    }
    if (boardDiceEl.textContent === '1') {
      clearBox();
    }
  }
});

btnHoldEl.addEventListener('click', () => {
  for (item of boardHalfList) {
    item.querySelector('.board-score').textContent =
      Number(item.querySelector('.board-score').textContent) +
      Number(item.querySelector('.board-box-score').textContent);
    clearBox();
    if (Number(item.querySelector('.board-score').textContent) >= 100) {
      modalOpen();
      modalTextEl.textContent = item.querySelector('.board-title').textContent;
    }
  }
});

btnNewEl.addEventListener('click', () => {
  for (item of boardHalfList) {
    item.querySelector('.board-score').textContent = 0;
    clearBox();
    boardDiceEl.textContent = '-';
  }
});

modalCloseEl.addEventListener('click', modalOpen);
