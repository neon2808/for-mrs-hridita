/* ========================= */
/* ELEMENTS */
/* ========================= */

const loadingScreen =
document.getElementById("loadingScreen");

const mainContainer =
document.getElementById("mainContainer");

const passwordInput =
document.getElementById("passwordInput");

const passwordButton =
document.getElementById("passwordButton");

const errorText =
document.getElementById("errorText");

const envelopeSection =
document.getElementById("envelopeSection");

const passwordSection =
document.getElementById("passwordSection");

const envelope =
document.getElementById("envelope");

const openLetterBtn =
document.getElementById("openLetterBtn");

const letterSection =
document.getElementById("letterSection");

const finalSection =
document.getElementById("finalSection");

const finishJourney =
document.getElementById("finishJourney");

const musicBtn =
document.getElementById("musicBtn");

const bgMusic =
document.getElementById("bgMusic");

const nextButtons =
document.querySelectorAll(".nextBtn");

const chapters =
document.querySelectorAll(".chapter");

let currentChapter = 0;

/* ========================= */
/* LOADING SCREEN */
/* ========================= */

window.addEventListener("load",()=>{

setTimeout(()=>{

loadingScreen.style.opacity="0";

setTimeout(()=>{

loadingScreen.style.display="none";

mainContainer.classList.remove("hidden");

},800);

},2200);

});    
/* ========================= */
/* PASSWORD SYSTEM */
/* ========================= */

passwordButton.addEventListener("click",()=>{

const password =
passwordInput.value.trim();

if(password==="2808"){

errorText.textContent="";

passwordSection.classList.add("hidden");

envelopeSection.classList.remove("hidden");

}
else{

errorText.textContent=
"That's not our little secret ❤️";

passwordInput.value="";

}

});

passwordInput.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

passwordButton.click();

}

});

/* ========================= */
/* ENVELOPE OPEN */
/* ========================= */

envelope.addEventListener("click",()=>{

envelope.classList.add("open");

});

openLetterBtn.addEventListener("click",()=>{

envelopeSection.classList.add("hidden");

letterSection.classList.remove("hidden");

window.scrollTo({

top:0,

behavior:"smooth"

});

});
/* ========================= */
/* CHAPTER NAVIGATION */
/* ========================= */

nextButtons.forEach((button,index)=>{

button.addEventListener("click",()=>{

chapters[currentChapter]
.classList.remove("active");

currentChapter++;

if(currentChapter<chapters.length){

chapters[currentChapter]
.classList.add("active");

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});

});

/* ========================= */
/* FINAL SECTION */
/* ========================= */

finishJourney.addEventListener("click",()=>{

letterSection.classList.add("hidden");

finalSection.classList.remove("hidden");

window.scrollTo({

top:0,

behavior:"smooth"

});

});
/* ========================= */
/* MUSIC PLAYER */
/* ========================= */

let isPlaying=false;

musicBtn.addEventListener("click",()=>{

if(isPlaying){

bgMusic.pause();

musicBtn.textContent=
"▶ Love Story Instrumental";

}
else{

bgMusic.play();

musicBtn.textContent=
"⏸ Pause Music";

}

isPlaying=!isPlaying;

});

/* ========================= */
/* DAYS COUNTER */
/* ========================= */

const dayCounter=
document.getElementById("dayCounter");

let currentDay=0;

const targetDay=365;

const counter=setInterval(()=>{

currentDay++;

dayCounter.textContent=currentDay;

if(currentDay>=targetDay){

clearInterval(counter);

}

},12);
/* ========================= */
/* FLOATING DECORATIONS */
/* ========================= */

function createFloating(containerId,symbol,total){

const container=
document.getElementById(containerId);

for(let i=0;i<total;i++){

const item=
document.createElement("span");

item.innerHTML=symbol;

item.style.left=
Math.random()*100+"%";

item.style.top=
Math.random()*100+"%";

item.style.fontSize=
(12+Math.random()*20)+"px";

item.style.animationDuration=
(8+Math.random()*10)+"s";

item.style.animationDelay=
(Math.random()*6)+"s";

container.appendChild(item);

}

}

createFloating("hearts","❤️",20);
createFloating("petals","🌸",18);
createFloating("sparkles","✨",22);
createFloating("butterflies","🦋",10);
createFloating("nightStars","•",70);
createFloating("finalHearts","❤️",16);

/* ========================= */
/* END OF FILE */
/* ========================= */
