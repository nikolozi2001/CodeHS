function start() {
	while(leftIsClear()){
	    cleanUpRow();
	}
	finish();
}
function cleanUpRow() {
    while(frontIsClear()){
        if(ballsPresent()){
            takeBall();
        }
        move();
    }
    blockedWall();
}
function blockedWall() {
    if(ballsPresent()){
        takeBall();
    }
    turnLeft();
    move();
    turnLeft();
    while(frontIsClear()){
        move();
    }
    turnAround();
}
function finish() {
    if(ballsPresent()){
        takeBall();
    }
    while(frontIsClear()){
        move();
        if(ballsPresent()){
            takeBall();
        }
    }
    if(frontIsBlocked()){
        turnAround();
    }
    while(frontIsClear()){
        move();
    }
    turnLeft();
    while(frontIsClear()){
        move();
    }
}
//cool code by nika kachibaia