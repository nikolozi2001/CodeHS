/* Write a program that asks the user how far they ran (in miles)
 * and then how long it took them (in minutes), and print out
 * their speed in miles per hour. */
function start(){
	var distance = readInt("How many miles did you run? ");
    var timeMin = readInt("How many minutes did it take you? ");
    var timeHr = timeMin / 60;
    var speed = distance / timeHr;
    println("Speed in mph: " + speed);
}