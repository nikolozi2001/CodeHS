function start(){
	// Write your code here
	move();
	turnLeft();
	for(var i=0; i <3; i++){
	    putBall();
	    move();
	}
	turnRight();
	move();
	turnRight();
	while(frontIsClear()){
	    move();
	}
	turnLeft();
	move();
	turnLeft();
	for(var i=0; i <3; i++){
	    putBall();
	    move();
	}
	turnRight();
}

function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
}

function moveTwice(){
    move();
    move();
}