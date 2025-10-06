function checkAnswer() {
  const input = document.getElementById("answer").value.trim().toLowerCase();
  const postcard = document.getElementById("postcard");
  const riddleBox = document.getElementById("riddle-box");
  const correctAnswer = "yellow";

  if (input === correctAnswer) {
    riddleBox.style.display = "none";
    postcard.style.display = "block";
    setTimeout(() => {
      document.querySelector(".card").classList.add("flipped");
    }, 500);
  } else {
    alert("Try again!");
  }
}
