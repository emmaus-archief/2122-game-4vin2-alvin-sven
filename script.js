/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 3;
var spelStatus = SPELEN;

var spelerX = 200; // x-positie van speler
var spelerY = 400; // y-positie van speler

var vijandX = [3000, 2800, 2600, 2400, 2200, 1000, 800, 600, 400] // x-positie van vijand
var vijandY = [100, 300, 700, 100, 550, 400, 200, 300, 600] // y-positie van vijand

var puntX = [900]
var puntY = [100]

var img; //plaatje van speler
var plaatje; //plaatje vijanden

var speed = 7 // snellheid van beweging
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
 
if(keyIsDown(87)) {
    spelerY = spelerY - speed
}
if(keyIsDown(83)) {
  spelerY = spelerY + speed
}
if(keyIsDown(16)){
  speed = 14
}
else{
  speed = 7
}
if (spelerY < 25 ){
  spelerY = 25
}
if (spelerY > 690){
  spelerY = 690
}
  // vijand



  
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand

}
    
  // botsing kogel tegen vijand

  // update punten en health

//};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("rgb(10, 169, 198)")
  rect(0, 0, 1280,720 )
  
  // vijand
  fill("black")
  for(var i = 0; i < vijandX.length; i++){
    if(vijandX[i] > 0){
    vijandX[i]= vijandX[i] - 5;
    rect(vijandX[i], vijandY[i], 50, 50);
    image(plaatje,vijandX[i],vijandY[i], 50, 50);
  }

  }
  //speler (plaatje)
 image(img,spelerX,spelerY-32, 100, 100);
  

// punten en health
  fill("yellow")
  for(var ia = 0; ia < puntX.length; ia++){
    if(puntX[ia] > 0){
    puntX[ia]= puntX[ia] - 5;
    rect(puntX[ia], puntY[ia], 50, 50);
    }
  }
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  for(var a = 0; a<vijandY.length; a++)
    if(spelerY - vijandY[a] > -50 &&
       spelerY - vijandY[a] < 50 &&
       spelerX - vijandX[a] < 50 &&
       spelerX - vijandX[a] > -50){
         console.log ("botsing");
         return true;
       }
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/** in deze functie laden wij de plaatjes */
function preload () {
  img = loadImage('missile_PNG32.png')
  plaatje = loadImage('monster game.webp')
}
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('light blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
    console.log("spelen")
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
  console.log("game over")
  }
  if (spelStatus === UITLEG) {
    // teken uitleg scherm
    console.log("game over")
  }
}
