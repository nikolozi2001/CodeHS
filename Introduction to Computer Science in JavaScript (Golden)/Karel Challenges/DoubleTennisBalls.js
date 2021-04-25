function start(){
    move();
    countBalls();
    backToSpot();
    doublePile();
}

// this function caunts how big is ball pile
// by doubling balls amount next to the pile.

function countBalls(){
    while(ballsPresent()){
        takeBall();
        turnAround();
        move();
        putBall();
        putBall();
        turnAround();
        move();
    }
}
//karel doubles the existing pile
function doublePile(){
    while(ballsPresent()){
        buildUp();
        backToSpot();
    }
}
//get karel to starting point 
function backToSpot(){
    turnAround();
    move();
    turnAround();
}
//karel builds the final pile
function buildUp(){
    takeBall();
    move();
    putBall();
}