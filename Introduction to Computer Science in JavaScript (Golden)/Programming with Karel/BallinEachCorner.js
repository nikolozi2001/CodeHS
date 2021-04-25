function start () {
    turnLeft();
    putBall();
    move();
    
    for(var i=0; i<4; i++){
        move();
    }
    turnRight();
    putBall();
    move();
    for(var i=0; i<4; i++){
        move();
    }
    turnRight();
    putBall();
    move();
    for(var i=0; i<4; i++){
        move();
    }
    putBall();
    turnRight();
    move();
    for(var i=0; i<4; i++){
        move();
    }
    turnRight();
    turnRight();
}