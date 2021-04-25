function start(){
	// Write your code here
	for(var i=0; i<5; i++){
	    jumpHurdle();
	    jumpHurdle();
	    jumpHurdle();
	}
}

function jumpHurdle(){
    turnLeft();
    move();
    turnRight();
    move();
    turnRight();
    move();
    turnLeft();
}