/* Constants representing the radius of the top, middle,
 * and bottom snowball. */
var BOTTOM_RADIUS = 100;
var MID_RADIUS = 60;
var TOP_RADIUS = 30;
function start(){
	var centerX = getWidth() / 2;
	var bottomCircle = new Circle(BOTTOM_RADIUS);
	bottomCircle.setPosition(centerX, getHeight() - BOTTOM_RADIUS);
	bottomCircle.setColor(Color.gray);
	add(bottomCircle);
	var midCircle = new Circle(MID_RADIUS);
	var centerX = getWidth() / 2;
    midCircle.setPosition(centerX, getHeight() - (BOTTOM_RADIUS*2+MID_RADIUS));
	midCircle.setColor(Color.gray);
	add(midCircle);
	var topCirrcle = new Circle(TOP_RADIUS);
	var centerX = getWidth() / 2;
	topCirrcle.setPosition(getWidth()/2, getHeight() - (BOTTOM_RADIUS*2+MID_RADIUS*2+TOP_RADIUS));
	topCirrcle.setColor(Color.gray);
	add(topCirrcle);
}