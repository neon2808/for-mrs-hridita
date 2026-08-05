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
