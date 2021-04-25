/* This program should draw the Netherlands flag. The
 * top third of the canvas is red, the middle third
 * is white, and the bottom third is blue. */
function start(){
	var rect = new Rectangle(400, getHeight()/ 3);
	rect.setPosition(0, 0);
	rect.setColor(Color.red);
	add(rect);
	
	var rect = new Rectangle(400, getHeight()/ 3);
	rect.setPosition(0, 180);
	rect.setColor(Color.white);
	add(rect);
	
	var rect = new Rectangle(400, getHeight()/ 3);
	rect.setPosition(0, 320);
	rect.setColor(Color.blue);
	add(rect);
}