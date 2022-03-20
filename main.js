var tellerbeurt = 0;
function wieStart(){
    start = Math.floor(Math.random() * 2);
    tellerbeurt = tellerbeurt + start;
    console.log(tellerbeurt);
}

document.addEventListener("DOMContentLoaded", wieStart);
document.addEventListener("DOMContentLoaded", wiebeurt);


var zeus = document.querySelector('#zeusimg') ;
var valaanZ = document.querySelector('#aanvalzeus') ;


// aanval zeus
function aanvallenZ() {
    zeus.src = 'img/zeusattack.png' ; 
    setTimeout(normaalZ,800);
    tellerbeurt = tellerbeurt + 1;
}

function normaalZ(){
    zeus.src = 'img/zeus2.png';
}

valaanZ.addEventListener('click' , aanvallenZ ) ; 

// aanval poseidon
var poseidon = document.querySelector('#poseidonimg');
var valaanP = document.querySelector('#aanvalpos');

function aanvallenP() {
    poseidon.src = 'img/posattack.png' ; 
    setTimeout(normaalP, 800);
    tellerbeurt = tellerbeurt + 1;
}

function normaalP(){
    poseidon.src = 'img/poseidon.png';
}

valaanP.addEventListener('click' , aanvallenP ) ; 


// speciale aanval zeus
var specialZ = document.querySelector( "#specialzeus");
var bolt = document.querySelector("#bolt");

function speciaalZeus(){
    bolt.classList.add("bolt");
    setTimeout( () => bolt.classList.remove('bolt') , 800);
    zeus.src = 'img/zeusattack.png' ; 
    setTimeout(normaalZ,800);
    tellerbeurt = tellerbeurt + 1;
    var health2 = document.getElementById("health2");
    health2.value -= 5; 
}

specialZ.addEventListener('click', speciaalZeus);


// speciaal poseidon
var speciaalP = document.querySelector("#specialposeidon");
var wave = document.querySelector("#wave");

function speciaalPoseidon(){
    wave.classList.add("wave");
    setTimeout( () => wave.classList.remove('wave') , 800);
    poseidon.src = 'img/posattack.png' ; 
    setTimeout(normaalP, 800);
    tellerbeurt = tellerbeurt + 1;
    var health = document.getElementById("health");
    health.value -= 5; 
}

speciaalP.addEventListener('click', speciaalPoseidon);


// de leuke geluidjes die ze maken
var battlecryzeus = document.querySelector('#battlesoundzeus');

function battlesoundzeus(){
    battlecryzeus.play();
    battlecryzeus.volume = 0.1;
}
specialZ.addEventListener('mouseover', battlesoundzeus);


var battlecryposeidon = document.querySelector('#battlesoundposeidon');

function battlesoundposeidon(){
    battlecryposeidon.play();
    battlecryposeidon.volume = 0.1;
}
speciaalP.addEventListener('mouseover', battlesoundposeidon);



//zeus bewegen// 
var movezeus = document.querySelector('#zeus');
var clickright = document.querySelector('#moverightzeus');
var clickleft = document.querySelector('#moveleftzeus');
var positie = 0;

function zeusright(){
    positie = positie + 1;
    console.log(positie);
    movezeus.style.left = `${movezeus.offsetLeft +50}px`;
    tellerbeurt = tellerbeurt + 1;
}

function zeusleft(){
    positie = positie - 1;
    console.log(positie);
    movezeus.style.left = `${movezeus.offsetLeft -50}px`;
    tellerbeurt = tellerbeurt + 1;
}

clickright.addEventListener('click', zeusright);
clickleft.addEventListener('click', zeusleft);

//poseidon bewegen//
var moveposeidon = document.querySelector('#poseidon');
var clickrightposeidon = document.querySelector('#moverightposeidon');
var clickleftposeidon = document.querySelector('#moveleftposeidon');

function poseidonright(){
    positie = positie - 1;
    moveposeidon.style.left = `${moveposeidon.offsetLeft +50}px`;
    console.log(positie);
    tellerbeurt = tellerbeurt + 1;
}

function poseidonleft(){
    tellerbeurt = tellerbeurt + 1;
    positie = positie + 1;
    console.log(positie);
    moveposeidon.style.left = `${moveposeidon.offsetLeft -50}px`;
}

clickrightposeidon.addEventListener('click', poseidonright);
clickleftposeidon.addEventListener('click', poseidonleft);


// damage doen tegen elkaar
var damagezeus = document.querySelector('#aanvalpos');
function changehealthzeus(){
    if(positie > 5){
    var health = document.getElementById("health");
    health.value -= 20; 
    }
    else{
    console.log('missed');
    }  
}
damagezeus.addEventListener('click' , changehealthzeus) ; 

var damageposeidon = document.querySelector('#aanvalzeus');
function changehealthposeidon(){
    if (positie > 5){
        var health2 = document.getElementById("health2");
        health2.value -= 20; 
    }
    else{
        console.log('missed');
    }
}
damageposeidon.addEventListener('click', changehealthposeidon) ; 


// wie is er aan de buurt?

var posshape1 = document.querySelector('#shape1r');
var posshape2 = document.querySelector('#shape2r');
var posshape3 = document.querySelector('#shape3r');
var posshape4 = document.querySelector('#shape4r');
var zeusshape1 = document.querySelector('#shape1l');
var zeusshape2 = document.querySelector('#shape2l');
var zeusshape3 = document.querySelector('#shape3l');
var zeusshape4 = document.querySelector('#shape4l');


function wiebeurt(){
    beurt = tellerbeurt % 2;
if (beurt == 0){
    posshape1.style.visibility = 'hidden';
    posshape2.style.visibility = 'hidden';
    posshape3.style.visibility = 'hidden';
    posshape4.style.visibility = 'hidden';
    zeusshape1.style.visibility = 'visible';
    zeusshape2.style.visibility = 'visible';
    zeusshape3.style.visibility = 'visible';
    zeusshape4.style.visibility = 'visible';
}
else{
    zeusshape1.style.visibility = 'hidden';
    zeusshape2.style.visibility = 'hidden';
    zeusshape3.style.visibility = 'hidden';
    zeusshape4.style.visibility = 'hidden';
    posshape1.style.visibility = 'visible';
    posshape2.style.visibility = 'visible';
    posshape3.style.visibility = 'visible';
    posshape4.style.visibility = 'visible';
}
}

//knoppen van eerder ook toevoegen voor de functie wie is er aan de beurt
valaanP.addEventListener('click' , wiebeurt ) ; 
valaanZ.addEventListener('click' , wiebeurt ) ; 
clickrightposeidon.addEventListener('click', wiebeurt);
clickleftposeidon.addEventListener('click', wiebeurt);
clickright.addEventListener('click', wiebeurt);
clickleft.addEventListener('click', wiebeurt);
speciaalP.addEventListener('click', wiebeurt);
specialZ.addEventListener('click', wiebeurt);


// somebody DIED. code hieronder is voor als er iemand wint.
var poswin = document.getElementById("poswin");
var zeuswin = document.getElementById("zeuswin");
var refresh = document.querySelector("#refresh");

function zeusDead(){
    var healthzeus = document.getElementById("health");
    var healthZeusValue  = healthzeus.value;
    if(healthZeusValue == 0){
        poswin.classList.add("poseidonwins");
        setTimeout( () => poswin.classList.remove("poseidonwins") , 2500);
        document.getElementById("overlay").style.display = "block";
        refresh.classList.add("playAgain");
    }
    else{
    }
}

function posDead(){
    var healthpos = document.getElementById("health2");
    var healtPosValue  = healthpos.value  ;
    if(healtPosValue == 0){
        zeuswin.classList.add("zeuswins");
        setTimeout( () => zeuswin.classList.remove("zeuswins") , 2500);
        document.getElementById("overlay").style.display = "block";
        refresh.classList.add("playAgain");
    }
    else{
    }
}

valaanP.addEventListener('click' , zeusDead ) ; 
valaanZ.addEventListener('click' , posDead ) ;
speciaalP.addEventListener('click', zeusDead);
specialZ.addEventListener('click', posDead);

// de pagina wordt herladen als iemand op de play again button klikt
function refreshPage(){
    location.reload();
}
refresh.addEventListener('click', refreshPage);