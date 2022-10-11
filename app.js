let left1 = 70;
let left2 = 70;
let left3 = 70;

//==================== START FUNCTION ===========================
function start() {
    let at1 = document.getElementById('horse-pink');
    let at2 = document.getElementById('horse-blue');
    let at3 = document.getElementById('horse-yellow');
    at1.src = "./assets/images/pink.gif";
    at2.src = "./assets/images/blue.gif";
    at3.src = "./assets/images/yellow.gif";

    var h1Score=0,h2Score=0,h3Score=0;
    var audio = new Audio('final.mp3');
    audio.play();
    var raceTimer = setInterval(() => {
        randomNumber1 = Math.floor(Math.random() * 80);
        left1 = left1 + randomNumber1;
        if (left1 < 1700) {
            at1.style.left = left1 + "px";
            h1Score++;
        }
        randomNumber2 = Math.floor(Math.random() * 80);
        left2 = left2 + randomNumber2;
        if (left2 < 1700) {
            at2.style.left = left2 + "px";
            h2Score++;
        }
        randomNumber3 = Math.floor(Math.random() * 80);
        left3 = left3 + randomNumber3;
        if (left3 < 1700) {
            at3.style.left = left3 + "px";
            h3Score++;
        }
        console.log("Yellow: ", getCssProperty("horse-yellow", "right"));
        console.log("Blue: ", getCssProperty("horse-blue", "right"));
        console.log("Pink: ", getCssProperty("horse-pink", "right"));
        console.log("=========================================")
        if (getPx("horse-pink") < -250 || getPx("horse-pink") < -250 ||getPx("horse-pink") < -250) {
            console.log("kırmızı: ",h1Score);
            console.log("mavi: ",h2Score);
            console.log("sarı: ",h3Score);
            result(h1Score,h2Score,h3Score);
            at1.src = "./assets/images/p1.png";
            at2.src = "./assets/images/b1.png";
            at3.src = "./assets/images/y1.png";
            clearInterval(raceTimer);
        }
    }, 900);
    
}


//======================== GET LEFT VALUE (px) OF HORSES =======================
function getCssProperty(elmId, property) {
    var elem = document.getElementById(elmId);
    return window.getComputedStyle(elem, null).getPropertyValue(property);
}


//====================== Get rid of 'px' letters to  convert left value to int value ========================
function getPx(a) {
    var px = getCssProperty(a, "right");
    var resutl = px.slice(0, -2);
    return parseInt(resutl);
}


//======================== Define the winner  =======================
function result(x,y,z){
    if(x<y && x<z){
        document.getElementById('winner').innerHTML="<h1 style='color:pink;'>Winner: Pink Horse</h1>";
    }
    if(y<x && y<z){
        document.getElementById('winner').innerHTML="<h1 style='color:blue;'>Winner: Blue Horse</h1>";
    }
    if(z<y && z<x){
        document.getElementById('winner').innerHTML="<h1 style='color:yellow;'>Winner: Yellow Horse</h1>";
    }
}