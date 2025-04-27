function startWithLoading() {
  
  const startButton = document.querySelector(".start-btn");

  startButton.disabled = true;
  startButton.style.pointerEvents = "none";
  startButton.style.transform = "none";
  startButton.style.boxShadow = "none";

  setTimeout(() => {
    window.location.href = "suggest.html";
  }, 1000); }
