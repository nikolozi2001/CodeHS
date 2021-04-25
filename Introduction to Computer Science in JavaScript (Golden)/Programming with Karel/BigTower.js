/* This program draws a big tower from Karel's starting spot */
function start(){
    turnAround();
	if(notFacingNorth()){
	    turnAround();
	    turnRight();
	}
	if(facingEast()){
	    turnLeft();
	}
	while(frontIsClear()){
	    putBall();
	    move();
	}
	putBall();
	if(facingSouth()){
	    turnAround();
	    while(frontIsClear()){
	        move();
	        putBall();
	        
	    }
	    if(noBallsPresent()){
	        putBall();
	    }
	}
	
}
function nothing(){
    turnLeft();
}
function nothing2(){
    turnRight();
}