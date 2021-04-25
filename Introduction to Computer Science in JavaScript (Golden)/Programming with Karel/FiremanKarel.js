function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
}

turnRight();

for (var i=0; i<3; i++){
    move();
}

turnLeft();