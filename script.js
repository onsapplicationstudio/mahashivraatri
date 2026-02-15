const blessings = [
  "भोलेनाथ आपकी हर मनोकामना पूर्ण करें।",
  "आपके जीवन में शांति, शक्ति और समृद्धि बनी रहे।",
  "शिव कृपा से आपका घर-आंगन आनंद से भर जाए।",
  "महादेव आपको स्वस्थ, सुरक्षित और सफल रखें।"
];

const blessingBtn = document.getElementById("blessingBtn");
const blessingText = document.getElementById("blessingText");

if (blessingBtn && blessingText) {
  blessingBtn.addEventListener("click", () => {
    const randomText = blessings[Math.floor(Math.random() * blessings.length)];
    blessingText.textContent = randomText;
  });
}

const flowerRain = document.getElementById("flowerRain");
const flowers = ["🌸", "🌼", "🌺", "🏵️"];

function spawnFlower() {
  if (!flowerRain) return;
  if (flowerRain.childElementCount > 30) return;

  const flower = document.createElement("span");
  const size = Math.floor(Math.random() * 16) + 14;
  const left = Math.random() * 100;
  const duration = Math.random() * 5 + 8;
  const delay = Math.random() * 1.2;
  const driftX = `${Math.floor(Math.random() * 120 - 60)}px`;

  flower.className = "flower";
  flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
  flower.style.left = `${left}vw`;
  flower.style.fontSize = `${size}px`;
  flower.style.animationDuration = `${duration}s`;
  flower.style.animationDelay = `${delay}s`;
  flower.style.setProperty("--drift-x", driftX);

  flowerRain.appendChild(flower);
  flower.addEventListener("animationend", () => flower.remove(), { once: true });
}

if (flowerRain) {
  for (let i = 0; i < 14; i += 1) {
    spawnFlower();
  }
  setInterval(spawnFlower, 380);
}
