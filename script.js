/* ========================= ELEMENTS ========================= */
const loadingScreen = document.getElementById("loadingScreen");
const mainContainer = document.getElementById("mainContainer");
const passwordInput = document.getElementById("passwordInput");
const passwordButton = document.getElementById("passwordButton");
const errorText = document.getElementById("errorText");
const passwordSection = document.getElementById("passwordSection");
const envelopeSection = document.getElementById("envelopeSection");
const envelope = document.getElementById("envelope");
const openLetterBtn = document.getElementById("openLetterBtn");
const letterSection = document.getElementById("letterSection");
const finalSection = document.getElementById("finalSection");
const finishJourney = document.getElementById("finishJourney");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
const nextButtons = document.querySelectorAll(".nextBtn");
const chapters = document.querySelectorAll(".chapter");
const dayCounter = document.getElementById("dayCounter");

let currentChapter = 0;
let musicStarted = false;
let dayCounterStarted = false;

/* ========================= LOADING ========================= */
window.addEventListener("load", () => {
  // Try to start music early
  tryStartMusic();

  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
      mainContainer.classList.remove("hidden");
    }, 700);
  }, 2000);
});

/* ========================= MUSIC ========================= */
function tryStartMusic() {
  if (musicStarted) return;
  bgMusic.volume = 0.55;
  const playPromise = bgMusic.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        musicStarted = true;
        musicBtn.textContent = "♪ Music Playing";
      })
      .catch(() => {
        // Autoplay blocked — will start on first interaction
        musicBtn.textContent = "▶ Tap for Music";
      });
  }
}

function forceStartMusic() {
  if (musicStarted) return;
  bgMusic.volume = 0.55;
  bgMusic.play().then(() => {
    musicStarted = true;
    musicBtn.textContent = "♪ Music Playing";
  }).catch(() => {});
}

// Start music on any first interaction
["click", "touchstart", "keydown"].forEach(evt => {
  document.addEventListener(evt, forceStartMusic, { once: true, passive: true });
});

musicBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = "♪ Music Playing";
  } else {
    bgMusic.pause();
    musicBtn.textContent = "▶ Play Music";
  }
});

/* ========================= PASSWORD ========================= */
passwordButton.addEventListener("click", () => {
  const password = passwordInput.value.trim();
  if (password === "2808") {
    errorText.textContent = "";
    passwordSection.classList.add("hidden");
    envelopeSection.classList.remove("hidden");
    forceStartMusic();
  } else {
    errorText.textContent = "That’s not our little secret ❤️";
    passwordInput.value = "";
    passwordInput.focus();
  }
});

passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") passwordButton.click();
});

/* ========================= ENVELOPE ========================= */
envelope.addEventListener("click", () => {
  envelope.classList.add("open");
});

openLetterBtn.addEventListener("click", () => {
  envelopeSection.classList.add("hidden");
  letterSection.classList.remove("hidden");
  startDayCounter();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ========================= CHAPTERS ========================= */
nextButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    chapters[currentChapter].classList.remove("active");
    currentChapter++;
    if (currentChapter < chapters.length) {
      chapters[currentChapter].classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});

/* ========================= FINAL ========================= */
finishJourney.addEventListener("click", () => {
  letterSection.classList.add("hidden");
  finalSection.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ========================= DAY COUNTER ========================= */
function startDayCounter() {
  if (dayCounterStarted) return;
  dayCounterStarted = true;
  let current = 0;
  const target = 365;
  const interval = setInterval(() => {
    current++;
    dayCounter.textContent = current;
    if (current >= target) clearInterval(interval);
  }, 11);
}

/* ========================= FLOATING DECORATIONS ========================= */
function createFloating(id, symbol, count) {
  const container = document.getElementById(id);
  if (!container) return;
  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    el.innerHTML = symbol;
    el.style.left = Math.random() * 100 + "%";
    el.style.top = Math.random() * 100 + "%";
    el.style.fontSize = (11 + Math.random() * 18) + "px";
    el.style.animationDuration = (9 + Math.random() * 11) + "s";
    el.style.animationDelay = Math.random() * 7 + "s";
    container.appendChild(el);
  }
}

createFloating("hearts", "❤️", 18);
createFloating("petals", "🌸", 16);
createFloating("sparkles", "✨", 20);
createFloating("butterflies", "🦋", 9);
createFloating("nightStars", "•", 65);
createFloating("finalHearts", "❤️", 14);
