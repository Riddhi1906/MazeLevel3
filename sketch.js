var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31,box32,box33,box34,box35,box36,box37,box38,box39,box40;
var box41,box42,box43,box44,box45,box46,box47,box48,box49,box50,box51,box52,box53,box54,box55,box56,box57,box58,box59,box60;
var box61,box62,box63,box64,box65,box66,box67,box68,box69,box70,box71,box72,box73,box74,box75,box76,box77,box78,box79,box80;
var box81,box82,box83,box84,box85,box86;
var boy,goal,win,trophy;
var border1,border2,border3,border4;
var redkey,bluekey,yelokey;
var redkeyImg,blukeyImg,yellowkeyImg;
var redlock,bluelock,yellowlock;
var redImg,blueImg,yellowImg;

function preload(){
    boy1Img = loadImage("sprites/1.png");
    boy2Img = loadImage("sprites/2.png");
    trophyImg = loadImage("sprites/t.png");
    redkeyImg = loadImage("sprites/redkey.png");
    redImg = loadImage("sprites/redll.png");
    blukeyImg = loadImage("sprites/blukey.png");
    blueImg = loadImage("sprites/bluel.png");
    yellowkeyImg = loadImage("sprites/yelokey.png");
    yellowImg = loadImage("sprites/yellowl.png");
    zom = loadImage("bt1.png");
}
function setup(){
    var canvas = createCanvas(800,700);
    
    boy = createSprite(30,30,20,20);
    boy.addImage(boy1Img);
    boy.scale = 0.2;

    trophy = createSprite(348,30,20,20);
    trophy.addImage(trophyImg);
    trophy.scale = 0.2;

    zombie = createSprite(30,297,10,10);
    zombie.addImage(zom);
    zombie.scale = 0.11;
    zombie.velocityX = +9;
    
    redkey = createSprite(158,135,20,20);
    redkey.addImage(redkeyImg);
    redkey.scale = 0.2;

    redlock = createSprite(400,330,60,10);
    redlock.addImage(redImg);
    redlock.scale = 0.07;

    yelokey = createSprite(280,669,20,20);
    yelokey.addImage(yellowkeyImg);
    yelokey.scale = 0.1;

    yellowlock = createSprite(510,675,20,20);
    yellowlock.addImage(yellowImg);
    yellowlock.scale = 0.1;

    bluekey = createSprite(715,30,20,20);
    bluekey.addImage(blukeyImg);
    bluekey.scale = 0.09;

    bluelock = createSprite(583,170,20,20);
    bluelock.addImage(blueImg);
    bluelock.scale = 0.1;

    border1 = createSprite(400,0,800,10);
    border2 = createSprite(800,350,10,800);
    border3 = createSprite(400,700,800,10);
    border4 = createSprite(0,350,10,800);

    box1 = createSprite(33,110,70,5);
    box2 = createSprite(65,83,5,58);
    box3 = createSprite(126,83,5,168);
    box4 = createSprite(187,30,5,58);
    box5 = createSprite(248,83,5,58);
    box6 = createSprite(216,110,66,5);
    box7 = createSprite(187,165,5,108);
    box8 = createSprite(126,164,125,5);
    box9 = createSprite(65,190,5,58);
    box10 = createSprite(97,270,187,5);
    box11 = createSprite(126,244,5,58);
    box12 = createSprite(309,30,5,58);
    box13 = createSprite(370,57,125,5);
    box14 = createSprite(431,83,5,58);
    box15 = createSprite(400,110,70,5);
    box16 = createSprite(369,135,5,58);
    box17 = createSprite(309,135,5,58);
    box18 = createSprite(309,164,125,5);
    box19 = createSprite(248,217,5,108);
    box20 = createSprite(491,83,5,168);
    box21 = createSprite(552,30,5,58);
    box22 = createSprite(552,110,125,5);
    box23 = createSprite(613,83,5,58);
    box24 = createSprite(402,217,304,5);
    box25 = createSprite(431,190,5,58);
    box26 = createSprite(552,190,5,58);
    box27 = createSprite(156,323,304,5);
    box28 = createSprite(309,323,5,112);
    box29 = createSprite(340,270,68,5);
    box30 = createSprite(340,377,66,5);
    box31 = createSprite(370,350,5,58);
    box32 = createSprite(674,110,5,218);
    box33 = createSprite(704,57,68,5);
    box34 = createSprite(765,110,68,5);
    box35 = createSprite(704,164,68,5);
    box36 = createSprite(735,244,5,58);
    box37 = createSprite(735,270,125,5);
    box38 = createSprite(674,324,5,110);
    box39 = createSprite(704,377,68,5);
    box40 = createSprite(735,350,5,58);
    box41 = createSprite(645,217,65,5);
    box42 = createSprite(613,217,5,110);
    box43 = createSprite(583,270,66,5);
    box44 = createSprite(552,323,5,112);
    box45 = createSprite(491,244,5,58);
    box46 = createSprite(460,270,66,5);
    box47 = createSprite(430,350,5,168);
    box48 = createSprite(96,377,68,5);
    box49 = createSprite(65,429,5,108);
    box50 = createSprite(33,483,70,5);
    box51 = createSprite(613,429,5,218);
    box52 = createSprite(674,429,125,5);
    box53 = createSprite(735,456,5,58);
    box54 = createSprite(767,484,70,5);
    box55 = createSprite(674,537,125,5);
    box56 = createSprite(674,508,5,58);
    box57 = createSprite(735,565,5,58);
    box58 = createSprite(704,590,68,5);
    box59 = createSprite(704,644,68,5);
    box60 = createSprite(674,670,5,58);
    box61 = createSprite(218,377,68,5);
    box62 = createSprite(187,402,5,56);
    box63 = createSprite(158,429,66,5);
    box64 = createSprite(126,537,5,218);
    box65 = createSprite(96,537,68,5);
    box66 = createSprite(65,565,5,58);
    box67 = createSprite(158,483,66,5);
    box68 = createSprite(400,429,306,5);
    box69 = createSprite(248,483,5,110);
    box70 = createSprite(218,537,68,5);
    box71 = createSprite(491,402,5,168);
    box72 = createSprite(370,458,5,58);
    box73 = createSprite(552,537,5,218);
    box74 = createSprite(522,537,68,5);
    box75 = createSprite(522,644,68,5);
    box76 = createSprite(583,590,66,5);
    box77 = createSprite(613,618,5,58);
    box78 = createSprite(309,644,125,5);
    box79 = createSprite(248,670,5,58);
    box80 = createSprite(126,644,125,5);
    box81 = createSprite(309,537,5,112);
    box82 = createSprite(248,590,125,5);
    box83 = createSprite(187,618,5,58);
    box84 = createSprite(370,537,125,5);
    box85 = createSprite(431,590,5,218);
    box86 = createSprite(431,590,127,5);
}

function draw(){
  background(255);

  zombie.bounceOff(border4);
  zombie.bounceOff(box28);

  if(keyDown(LEFT_ARROW)){
    boy.addImage(boy2Img);
    boy.x = boy.x - 4;
    }
 
  if(keyDown(RIGHT_ARROW)){
     boy.addImage(boy1Img);
     boy.x = boy.x + 4;
    }
 
  if(keyDown(UP_ARROW)){
    boy.y = boy.y - 4;
     }
  
   if(keyDown(DOWN_ARROW)){
     boy.y = boy.y + 4;
    }

  if(boy.isTouching(redkey)){
     redkey.visible = false;
     redlock.destroy();
    }

  if(boy.isTouching(bluekey)){
     bluekey.visible = false;
     bluelock.destroy();
    }

   if(boy.isTouching(yelokey)){
     yelokey.visible = false;
     yellowlock.destroy();
    }

  boy.collide(border1);
  boy.collide(border2);
  boy.collide(border3);
  boy.collide(border4);

  boy.collide(box1);
  boy.collide(box2);
  boy.collide(box3);
  boy.collide(box4);
  boy.collide(box5);
  boy.collide(box6);
  boy.collide(box7);
  boy.collide(box8);
  boy.collide(box9);
  boy.collide(box10);  
  boy.collide(box11);
  boy.collide(box12);
  boy.collide(box13);
  boy.collide(box14);
  boy.collide(box15);
  boy.collide(box16);
  boy.collide(box17);
  boy.collide(box18);
  boy.collide(box19);
  boy.collide(box20);
  boy.collide(box21);
  boy.collide(box22);
  boy.collide(box23);
  boy.collide(box24);
  boy.collide(box25);
  boy.collide(box26);
  boy.collide(box27);
  boy.collide(box28);
  boy.collide(box29);
  boy.collide(box30);
  boy.collide(box31);
  boy.collide(box32);
  boy.collide(box33);
  boy.collide(box34);
  boy.collide(box35);
  boy.collide(box36);
  boy.collide(box37);
  boy.collide(box38);
  boy.collide(box39);
  boy.collide(box40);
  boy.collide(box41);
  boy.collide(box42);
  boy.collide(box43);
  boy.collide(box44);
  boy.collide(box45);
  boy.collide(box46);
  boy.collide(box47);
  boy.collide(box48);
  boy.collide(box49);
  boy.collide(box50);
  boy.collide(box51);
  boy.collide(box52);
  boy.collide(box53);
  boy.collide(box54);
  boy.collide(box55);
  boy.collide(box56);
  boy.collide(box57);
  boy.collide(box58);
  boy.collide(box59);
  boy.collide(box60);
  boy.collide(box61);
  boy.collide(box62);
  boy.collide(box63);
  boy.collide(box64);
  boy.collide(box65);
  boy.collide(box66);
  boy.collide(box67);
  boy.collide(box68);
  boy.collide(box69);
  boy.collide(box70);
  boy.collide(box71);
  boy.collide(box72);
  boy.collide(box73);
  boy.collide(box74);
  boy.collide(box75);
  boy.collide(box76);
  boy.collide(box77);
  boy.collide(box78);
  boy.collide(box79);
  boy.collide(box80);
  boy.collide(box81);
  boy.collide(box82);
  boy.collide(box83);
  boy.collide(box84);
  boy.collide(box85);
  boy.collide(box86);
  
  boy.collide(redlock);
  boy.collide(bluelock);
  boy.collide(yellowlock);

  if(boy.isTouching(trophy)){
    background("grey");
    zombie.velocityX = 0;
    zombie.visible = false;
    trophy.visible = false;
    boy.visible = false;
    box28.visible = false;
    box30.visible = false;
    box31.visible = false;
    box47.visible = false;
    box71.visible = false;
    box44.visible = false;
    fill("white");
    textSize(80);
    text("YOU WIN",238,380);
 }

 if(boy.isTouching(zombie)){
  zombie.velocityX = 0;
  zombie.visible = false;
  boy.visible = false;
  bluekey.visible = false;
  yelokey.visible = false;
  redkey.visible = false;
  trophy.visible = false;
  redlock.visible = false;
  bluelock.visible = false;
  yellowlock.visible = false;
  box28.visible = false;
  box30.visible = false;
  box47.visible = false;
  box71.visible = false;
  box44.visible = false;
  background(127,127,127);
  fill("white");
  textSize(80);
  text("You Lose",238,380);
}

 drawSprites();
}