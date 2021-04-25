function start() {
    if(notFacingEast()){
        turnRight();
    }else{
        turnLeft();
    }
    if(facingWest()){
        turnAround();
    }
    move();
    turnLeft();
    turnLeft();
    move();
    turnLeft();
    if(facingSouth()){
        dontmove();
    }else{
        move();
    }
    // move();
    if(facingSouth()){
        turnLeft();
        move();
    }
}
function dontmove() {
    turnLeft();
    turnLeft();
    turnLeft();
    turnLeft();
}