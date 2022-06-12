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
var spelStatus = UITLEG;

var spelerX = 200; // x-positie van speler
var spelerY = 400; // y-positie van speler

var vijandX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // x-positie van vijand
var vijandY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // y-positie van vijand





var puntX = [0, 0, 0]
var puntY = [0, 0, 0]

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
  //random vijanden

  // speler

  if (keyIsDown(87)) {
    spelerY = spelerY - speed
  }
  if (keyIsDown(83)) {
    spelerY = spelerY + speed
  }
  if (keyIsDown(16)) {
    speed = 14
  }
  else {
    speed = 7
  }
  if (spelerY < 10) {
    spelerY = 10
  }
  if (spelerY > 660) {
    spelerY = 660
  }
  // vijand
  for (var i = 0; i < vijandX.length; i++) {
 
    vijandX[i] = vijandX[i] - 10;
    if (vijandX[i] < 0) {
      vijandX[i] = random (1200, 2000);
    }
  }
  // punten
  for (var i = 0; i < puntX.length; i++) {
   puntX[i] = puntX[i] - 10;
   if (puntX[i] < 0) {
    puntX[i] = random (1200, 1500);

  }
}



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
  rect(0, 0, 1280, 720)

  // vijand
  fill("black")
  for (var i = 0; i < vijandX.length; i++) {
 
      rect(vijandX[i], vijandY[i], 50, 50);
      image(plaatje, vijandX[i], vijandY[i], 50, 50);
    }
  


  //speler (plaatje)
  image(img, spelerX, spelerY - 32, 100, 100);


  // punten en health
  fill("yellow")
  for (var ia = 0; ia < puntX.length; ia++) {
      rect(puntX[ia], puntY[ia], 50, 50);
    }
};

for(var i = 0; i < puntX.length; i++){
  if(spelerX - puntX[i] > -100 &&
    spelerX - puntX[i] < 50 &&
    spelerY - puntY[i] < 38 &&
    spelerY - puntY[i] > -38) {
    console.log("botsing_punt");
    }
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  for (var a = 0; a < vijandY.length; a++)
    if (spelerY - vijandY[a] > -38 &&
      spelerY - vijandY[a] < 38 &&
      spelerX - vijandX[a] < 50 &&
      spelerX - vijandX[a] > -100) {
      console.log("botsing");
      return true;
    }
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/** in deze functie laden wij de plaatjes */
function preload() {
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
 
  // randomize field
  for (var i=0; i<vijandX.length; i++) {

    vijandY[i] = random(25, 750);
  }

  for (var i = 0; i < puntX.length; i++) {

    puntY[i] = random(25, 750);
  }
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
    console.log("spelen");
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
    console.log("game over");
    textSize(50);

    fill("red");
    text("game over,", 400, 600);
    text("druk op spatie om naar uitleg te gaan", 400, 650);
    text("en druk enter om de game te herstarten", 400, 700);
    
    for (var i = 0; i < vijandX.length; i++){
    if (vijandX[i] <= 1200){
      vijandX[i] = 0
    }
    }
    if (keyIsDown(32)) {

      spelStatus = UITLEG;
    }
    if (keyIsDown(13)) { // ENTER

      spelStatus = SPELEN;
      spelerY = 400;
      
    }
  }
  if (spelStatus === UITLEG) {
    // teken uitleg scherm
    console.log("uitleg");
    textSize(40);
    fill("rgb(89,255,145)");
    rect(0, 0, 1280, 720);
    fill("black");
    text("uitleg: druk enter om de game te spelen", 100, 100);
    text("in game shift is sneller w naar boven en s naar beneden. ", 100, 150);
    text("je moet de fisjes pakken", 100, 200);
    if (keyIsDown(13)) {
      spelStatus = SPELEN;
      spelerY=400;
      spelerX=200;
      fill("black")
      for (var i = 0; i < vijandX.length; i++) {
        if ( vijandX[i] )  
        vijandX[i] = vijandX[i] - 5;
          rect(vijandX[i], vijandY[i], 50, 50);
          image(plaatje, vijandX[i], vijandY[i], 50, 50);
          
        }
      }
    }
  }


