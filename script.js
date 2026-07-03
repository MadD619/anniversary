const screens = document.querySelectorAll(".screen");
const navButtons = document.querySelectorAll("[data-next]");
const memoryCards = document.querySelectorAll(".memory-card");
const memoryNote = document.getElementById("memoryNote");
const flipCards = document.querySelectorAll(".flip-card");
const celebration = document.getElementById("celebration");
const hearts = document.querySelector(".hearts");

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navButtons.forEach(button => {
  button.addEventListener("click", () => showScreen(button.dataset.next));
});

memoryCards.forEach(card => {
  card.addEventListener("click", () => {
    memoryNote.textContent = card.dataset.note;
  });
});

flipCards.forEach(card => {
  card.addEventListener("click", () => card.classList.toggle("open"));
});

function celebrate() {
  celebration.textContent = "Date accepted. Best decision ever ❤️";
  for (let i = 0; i < 34; i++) {
    setTimeout(createHeart, i * 55);
  }
}

document.getElementById("yesBtn").addEventListener("click", celebrate);
document.getElementById("alsoYesBtn").addEventListener("click", celebrate);

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = ["❤️", "💕", "💗", "💖"][Math.floor(Math.random() * 4)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  heart.style.fontSize = 16 + Math.random() * 24 + "px";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 6500);
}

setInterval(createHeart, 900);
