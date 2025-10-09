function checkAnswer() {
  const input = document.getElementById("answer").value.trim().toLowerCase();
  const postcard = document.getElementById("postcard");
  const riddleBox = document.getElementById("riddle-box");
  const correctAnswer = "yellow";

  if (input === correctAnswer) {
    riddleBox.style.display = "none";
    postcard.style.display = "block";
    // Make sure the card is not flipped initially
    document.querySelector(".card").classList.remove("flipped");
  } else {
    alert("Try again!");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card");
  if (card) {
    card.addEventListener("click", function () {
      card.classList.toggle("flipped");
    });
  }
});
