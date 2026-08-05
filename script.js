// Wait for the loading screen
setTimeout(function () {

    document.getElementById("loading-screen").style.display = "none";

    document.getElementById("app").style.display = "flex";

}, 4000);


// Password

function checkPassword(){

let pass = document.getElementById("password").value;

if(pass==="2808"){

alert("Welcome, Mrs. Hridita ❤️");

}else{

alert("Wrong password 💔");

}

}
// ========= FLOATING DECORATIONS =========

const symbols = ["❤️","🌸","✨","🦋","🌷","💖"];

function createDecoration(){

    const item = document.createElement("div");

    const symbol = symbols[Math.floor(Math.random()*symbols.length)];

    if(symbol==="❤️" || symbol==="💖"){
        item.className="floating-heart";
    }else if(symbol==="🌸" || symbol==="🌷"){
        item.className="floating-petal";
    }else{
        item.className="sparkle";
    }

    item.innerHTML=symbol;

    item.style.left=Math.random()*100+"vw";

    item.style.animationDuration=(6+Math.random()*6)+"s";

    item.style.fontSize=(18+Math.random()*18)+"px";

    document.body.appendChild(item);

    setTimeout(()=>{
        item.remove();
    },12000);

}

setInterval(createDecoration,450);
