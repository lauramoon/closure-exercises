function guessingGame() {
  let target = Math.floor(Math.random() * 100);
  let count = 0;
  let won = false;
  return function (n) {
    count++;
    if (won) {
      return `The game is over, you already won!`;
    } else if (n < target) {
      return `${n} is too low!`;
    } else if (n > target) {
      return `${n} is too high!`;
    } else {
      won = true;
      return `You win! You found ${n} in ${count} guesses.`;
    }
  };
}

module.exports = { guessingGame };
