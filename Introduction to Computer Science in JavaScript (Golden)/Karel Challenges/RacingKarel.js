/* This program will have Karel run around the racetrack
 * 8 times. */
function start() {
    //code working
    move();
    while(frontIsClear()){
        move();
        
    }
    for(var i = 0; i < 8; i++){
          putBall();
    }
    turnLeft();
    while(frontIsClear()){
        move();
    }
    for(var i = 0; i < 8; i++){
           putBall();
       }
    turnLeft();
    while(frontIsClear()){
        move();
    }
    for(var i = 0; i < 8; i++){
           putBall();
       }
    turnLeft();
    while(frontIsClear()){
        move();
    }
    for(var i = 0; i < 8; i++){
           putBall();
       }
     turnLeft();
}
//for code style (mission)
function nothing() {
    turnLeft();
}
function none() {
    turnRight();
}