var numSquares = 6;
var colors = [];
var targetColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('.color-display');
var messageDisplay = document.querySelector('.message');
var titleSection = document.querySelector('.title-section');
var resetButton = document.querySelector('.btn');
var btnMode = document.querySelectorAll('.mode');

init();

function init() {
  for (var i = 0; i < btnMode.length; i++) {
    btnMode[i].addEventListener('click', function () {
      btnMode[0].classList.remove('selected');
      btnMode[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function () {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === targetColor) {
      messageDisplay.textContent = 'Correct!'
      changedColor(clickedColor);
      titleSection.style.backgroundColor = clickedColor;
      resetButton.textContent = 'Play Again?';
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try again';
    }
    });
  }
  reset();
}



function reset() {
  colors = generateRandomColors(numSquares);
  targetColor = pickedColor();
  colorDisplay.textContent = pickedColor();
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = '';
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }    
  }
  titleSection.style.backgroundColor = 'steelblue';
}

resetButton.addEventListener('click', function () {
  reset();
})



function changedColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickedColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }

  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

