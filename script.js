function checkAnswer() {
  const input = document.getElementById("answer").value.trim().toLowerCase();
  const postcard = document.getElementById("postcard");
  const riddleBox = document.getElementById("riddle-box");
  const correctAnswer = "yellow";

  if (input === correctAnswer) {
    riddleBox.style.display = "none";
    postcard.style.display = "block";
    // Show front, hide back initially
    document.querySelector(".card .front").style.display = "block";
    document.querySelector(".card .back").style.display = "none";
  } else {
    alert("Try again!");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card");
  const cardFront = document.querySelector(".card .front");
  const cardBack = document.querySelector(".card .back");

  if (cardFront && cardBack) {
    cardFront.style.display = "block";
    cardBack.style.display = "none";

    cardFront.addEventListener("click", function () {
      cardFront.style.display = "none";
      cardBack.style.display = "block";
      card.classList.toggle("flipped", true);
    });

    cardBack.addEventListener("click", function () {
      cardBack.style.display = "none";
      cardFront.style.display = "block";
      card.classList.toggle("flipped", false);
    });
  }
});
