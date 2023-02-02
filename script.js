let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

let check = document.getElementById("check");
let again = document.getElementById("again");
let win = false;

function displayMessage(message) {
  document.getElementById("message").textContent = message;
}

function guess() {
  let number = Number(document.getElementById("number").value);
  if (score === 0 || win) {
    return displayMessage("🕹️ Please, reset the game!");
  }

  if (number > 20 || number < 1) {
    return displayMessage("💡 The number must be between 1 and 20");
  }

  if (number === secretNumber) {
    document.getElementById("secret_number").textContent = secretNumber;
    document.getElementById("secret_number").style.padding = "1rem 8rem";
    displayMessage("🥳 You nailed it!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.getElementById("number").style.backgroundColor = "#60b347";
    win = true;

    if (score > highscore) {
      highscore = score;
      document.getElementById("highscore").textContent = score;
    }
  } else {
    score--;
    document.getElementById("score").textContent = score;
    document.getElementById("number").value = "";

    if (score < 1) {
      return displayMessage("😭 GAME OVER!");
    }

    if (number > secretNumber) {
      displayMessage("📈 Too High!");
    } else {
      displayMessage("📉 Too Low!");
    }
  }
}

function repeat() {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("#number").style.backgroundColor = "#222";
  document.querySelector("#number").value = "";
  document.querySelector("#secret_number").textContent = "?";
  document.querySelector("#secret_number").style.padding = "1rem 4rem";
  score = 20;
  document.querySelector("#score").textContent = score;
  document.querySelector("#message").textContent = "Start guessing...";
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  win = false;
}

check.addEventListener("click", guess);
again.addEventListener("click", repeat);
