//Declare a constant here to represent the cost of a tshirt
function start(){
    var COST_OF_SHIRT = 20;
    var numberOfTshirts = readInt("How many tshirts would you like to buy? ");
    println("This is your cost: " + numberOfTshirts *COST_OF_SHIRT);
}