function checkAnswer() {
  const input = document.getElementById("answer").value.trim().toLowerCase();
  const postcard = document.getElementById("postcard");
  const riddleBox = document.getElementById("riddle-box");
  const correctAnswer = "yellow";

  if (input === correctAnswer) {
    riddleBox.style.display = "none";
    postcard.style.display = "block";
  } else {
    alert("Try again!");
  }
}

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const cardFront = document.querySelector(".card .front");
  const cardBack = document.querySelector(".card .back");

  if (cardFront && cardBack) {
    cardFront.addEventListener("click", function () {
      cardFront.style.display = "none";
      cardBack.style.display = "block";
    });
    cardBack.addEventListener("click", function () {
      cardBack.style.display = "none";
      cardFront.style.display = "block";
    });
    // Ensure correct initial state
    cardFront.style.display = "block";
    cardBack.style.display = "none";
  }
});
