function start(){
	// Write your code here
	if(frontIsClear()){
	    move();
	}else{
	    turnLeft();
	}
	if(facingSouth()){
	    turnLeft();
	}
}