function random() {
  var rno = Math.floor(Math.random() * 6) + 1;
  var rnt = Math.floor(Math.random() * 6) + 1;

  var randomImageOne = 'images/dice' + rno + '.png';
  var randomImageTwo = 'images/dice' + rnt + '.png';

  var d1 = document.querySelectorAll('img')[0];
  d1.setAttribute('src', randomImageOne);
  var d2 = document.querySelectorAll('img')[1];
  d2.setAttribute('src', randomImageTwo);

  if (rno > rnt) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (rno < rnt) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

document.querySelector('body').addEventListener('click', function(event) {
  random(this.innerHTML);
});

window.addEventListener('load', function(event) {
  random(this.innerHTML);
});
