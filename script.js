const loadingScreen = document.getElementById("loadingScreen");
const mainContainer = document.getElementById("mainContainer");
const passwordInput = document.getElementById("passwordInput");
const passwordButton = document.getElementById("passwordButton");
const errorText = document.getElementById("errorText");
const passwordSection = document.getElementById("passwordSection");
const envelopeSection = document.getElementById("envelopeSection");
const envelopeFront = document.getElementById("envelopeFront");
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
let dayStarted = false;

/* LOADING */
window.addEventListener("load", () => {
  tryStartMusic();
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
      mainContainer.classList.remove("hidden");
    }, 700);
  }, 1800);
});

/* MUSIC */
function tryStartMusic() {
  if (musicStarted) return;
  bgMusic.volume = 0.55;
  bgMusic.play().then(() => {
    musicStarted = true;
    musicBtn.textContent = "♪ Music Playing";
  }).catch(() => {
    musicBtn.textContent = "▶ Tap for Music";
  });
}

function forceMusic() {
  if (musicStarted) return;
  bgMusic.volume = 0.55;
  bgMusic.play().then(() => {
    musicStarted = true;
    musicBtn.textContent = "♪ Music Playing";
  }).catch(()=>{});
}

["click","touchstart","keydown"].forEach(evt => {
  document.addEventListener(evt, forceMusic, {once:true, passive:true});
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

/* PASSWORD */
passwordButton.addEventListener("click", () => {
  if (passwordInput.value.trim() === "2808") {
    errorText.textContent = "";
    passwordSection.classList.add("hidden");
    envelopeSection.classList.remove("hidden");
    forceMusic();
  } else {
    errorText.textContent = "That’s not our little secret ❤️";
    passwordInput.value = "";
  }
});

passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") passwordButton.click();
});

/* ENVELOPE - simple & reliable */
envelopeFront.addEventListener("click", () => {
  envelopeSection.classList.add("hidden");
  letterSection.classList.remove("hidden");
  startDayCounter();
  window.scrollTo({top:0, behavior:"smooth"});
});

/* CHAPTERS */
nextButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    chapters[currentChapter].classList.remove("active");
    currentChapter++;
    if (currentChapter < chapters.length) {
      chapters[currentChapter].classList.add("active");
      window.scrollTo({top:0, behavior:"smooth"});
    }
  });
});

/* FINAL */
finishJourney.addEventListener("click", () => {
  letterSection.classList.add("hidden");
  finalSection.classList.remove("hidden");
  window.scrollTo({top:0, behavior:"smooth"});
});

/* DAY COUNTER */
function startDayCounter() {
  if (dayStarted) return;
  dayStarted = true;
  let n = 0;
  const timer = setInterval(() => {
    n++;
    dayCounter.textContent = n;
    if (n >= 365) clearInterval(timer);
  }, 10);
}

/* FLOATING */
function createFloating(id, symbol, count) {
  const box = document.getElementById(id);
  if (!box) return;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.innerHTML = symbol;
    s.style.left = Math.random()*100 + "%";
    s.style.top = Math.random()*100 + "%";
    s.style.fontSize = (12 + Math.random()*18) + "px";
    s.style.animationDuration = (8 + Math.random()*10) + "s";
    s.style.animationDelay = Math.random()*6 + "s";
    box.appendChild(s);
  }
}
createFloating("hearts","❤️",16);
createFloating("petals","🌸",14);
createFloating("sparkles","✨",18);
createFloating("butterflies","🦋",8);
createFloating("nightStars","•",60);
createFloating("finalHearts","❤️",12);
