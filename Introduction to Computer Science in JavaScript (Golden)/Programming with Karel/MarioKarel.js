function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
}

function turnAround(){
    turnLeft();
    turnLeft();
}

function moveTwice(){
    move();
    move();
}

function collectCoins(){
    takeBall();
    takeBall();
}

turnLeft();
moveTwice();
move();
turnRight();
move();
collectCoins();
turnLeft();
move();
turnRight();
moveTwice();
turnRight();
move();
collectCoins();
move();
turnLeft();
moveTwice();
turnLeft();
move();
collectCoins();
move();
turnRight();
moveTwice();
turnRight();
move();
collectCoins();
while(frontIsClear()){
    move();
}
turnLeft();