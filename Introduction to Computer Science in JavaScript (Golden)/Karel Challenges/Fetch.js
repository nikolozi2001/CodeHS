function start() {
    putBall();
    turnLeft();
    for(var i = 0; i < 4; i++) {
        move();
    }
    turnRight();
    move();
    move();
    takeBall();
    goBack();
}
//The code had to be written differently
function goBack() {
    move();
    turnRight();
    for(var i = 0; i < 4; i++) {
        move();
    }
    turnRight();
    first();
}
function first() {
    for(var i = 0; i < 3; i++) {
        move();
    }
    turnAround();
}