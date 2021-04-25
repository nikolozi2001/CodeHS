function start() {
    if(noBallsPresent()){
        putBall();
    }else{
        facingNorth();
    }
    if(frontIsBlocked()){
        turnLeft();
    }else{
        move();
    }
    // move();
    if(noBallsPresent()){
        putBall();
    }else{
        turnRight();
    }
    if(frontIsClear()){
        move();
    }else{
        turnRight();
    }
    if(frontIsClear()){
        move();
    }else{
        turnRight();
    }
    if(frontIsClear()){
        move();
    }else{
        putBall();
    }
    makeLeftSquare();
    makeRightSquare();
    if(facingWest()){
        putBall();
    }
    if(facingEast()){
        turnLeft();
    }else{
        move();
    }
    if(frontIsClear()){
        move();
    }else{
        turnRight();
    }
    if(notFacingNorth()){
        turnRight();
    }
    if(facingSouth()) {
        putBall();
        turnLeft();
        move();
        putBall();
        turnRight();
        move();
        turnRight();
        move();
        turnAround();
    }
}

function makeRightSquare() {
    turnLeft();
    turnLeft();
    turnLeft();
}

function makeLeftSquare() {
    turnRight();
    move();
}