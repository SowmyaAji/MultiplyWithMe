function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numOne = randomInteger(1, 12);
let numTwo = randomInteger(1, 12);
let correctAnswer = numOne * numTwo;
let correctAnswers = 0;

function displayNums() {
  document.getElementById("numbers").innerHTML =
    numOne + " * " + numTwo + " = ";
}

function multiplyNums() {
  const result = document.getElementById("result");
  const answer = parseInt(document.getElementById("answer").value);
  if (answer < correctAnswer) {
    result.innerHTML = "That is too low, please enter the answer again.";
    document.getElementById("answer").value = "";
  } else if (answer > correctAnswer) {
    result.innerHTML = "That is too high, please enter the answer again.";
    document.getElementById("answer").value = "";
  } else {
    correctAnswers += 1
    result.innerHTML = "That is correct! Good job!<br><br>Your score of correct answers is = " + correctAnswers ;
  }
}

function multiplyAgain() {
  numOne = randomInteger(1, 12);
  numTwo = randomInteger(1, 12);
  correctAnswer = numOne * numTwo;
  displayNums();
  document.getElementById("answer").value = "";
}