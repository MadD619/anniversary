const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const answerZone = document.getElementById("answerZone");
const result = document.getElementById("result");
const heartsWrap = document.querySelector(".floating-hearts");
const flipCards = document.querySelectorAll(".flip-card");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let noCount = 0;

const noTexts = [
  "No 😅",
  "Are you sure? 🥺",
  "Try again 😂",
  "Nice try 😏",
  "Nope!",
  "You can't catch me",
  "Click yes ❤️",
  "I know you want to",
  "Still no? 😭"
];

function moveNoButton() {
  noCount++;

  const zone = answerZone.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();

  const maxX = Math.max(0, zone.width - btn.width);
  const maxY = Math.max(0, zone.height - btn.height);

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transform = "none";
  noBtn.textContent = noTexts[Math.min(noCount, noTexts.length - 1)];

  if (noCount > 5) {
    noBtn.style.transform = `scale(${Math.max(0.60, 1 - noCount * 0.035)})`;
    if (window.innerWidth > 760) {
      yesBtn.style.transform = `translate(-110%, -50%) scale(${Math.min(1.35, 1 + noCount * 0.04)})`;
    } else {
      yesBtn.style.transform = `translate(-50%, -50%) scale(${Math.min(1.35, 1 + noCount * 0.04)})`;
    }
  }
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  result.textContent = "Date accepted. Best decision ever ❤️";
  for (let i = 0; i < 70; i++) {
    setTimeout(createHeart, i * 30);
  }
});

flipCards.forEach(card => {
  card.addEventListener("click", () => card.classList.toggle("open"));
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = ["❤️", "💕", "💗", "💖", "💘"][Math.floor(Math.random() * 5)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 16 + Math.random() * 28 + "px";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  heartsWrap.appendChild(heart);
  setTimeout(() => heart.remove(), 6500);
}

setInterval(createHeart, 1300);

musicBtn.addEventListener("click", async () => {
  if (bgMusic.paused) {
    try {
      await bgMusic.play();
      musicBtn.textContent = "Music: on";
    } catch {
      alert("Add a file named music.mp3 to the same folder first.");
    }
  } else {
    bgMusic.pause();
    musicBtn.textContent = "Music: off";
  }
});
