let score = 0;
let bananaInterval;
let timeLeft = 20; // waktu awal 20 detik
let timerInterval;

function createBanana() {
  const banana = document.createElement("div");
  banana.classList.add("banana");
  banana.innerText = "🍌";
  banana.style.left = Math.random() * window.innerWidth + "px";
  banana.style.top = "-50px";
  banana.style.fontSize = "120px";
  document.getElementById("game-area").appendChild(banana);

  let fallSpeed = 2 + Math.random() * 3;
  function fall() {
    let currentTop = parseFloat(banana.style.top);
    banana.style.top = currentTop + fallSpeed + "px";

  if (currentTop < window.innerHeight) {
      requestAnimationFrame(fall);
    } else {
      banana.remove();
    } }
  banana.addEventListener("click", () => {
    score++;
 document.getElementById("score").textContent = "Score: " + score;
    banana.remove();
  });

  fall();
}

function startGame() {
    const startButton = document.getElementById("startButton");
    startButton.style.display = "none";
    score = 0;
    timeLeft = 20;
    document.getElementById("score").textContent = "Score: 0";
    document.getElementById("timer").textContent = "Time: 20";

    setInterval(createBanana, 1000)

    timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = "Times left: " + timeLeft;
  
      if (timeLeft <= 0) {
        clearInterval(timerInterval); 
        endGame(); 
      } }, 1000); 
  }

function endGame() {
    alert('times out! your score: ' + score);
    // Bisa redirect halaman, atau munculin tombol "Main Lagi"
}