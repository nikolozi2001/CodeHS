function start() {
    buildTower();
    goBack();
    while (frontIsClear()){
          move(); 
          if(frontIsClear()){
             move();
             buildTower();
             goBack();
         } 
     }
}
// building a Tower
function buildTower(){
    turnLeft();
    for (var i = 0; i < 3; i++) {
         putBall();
         move();
    }
}
// coming back
function goBack (){
    turnAround();
    for (var i = 0; i < 3; i++) {
         move();
    }
    turnLeft();
}