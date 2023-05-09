//Oh no, it doesn't look like the fence post is holding!
// It seems that there are just too many zombies, and they are threatening to overwhelm your defenses.
// Luckily for you, the writer of these JavaScript problems doesn't want you to die, so you also miraculously have a fleet of robot turrets at your command
    // to help repel the attack!


// Write a function called directTurretDefenceCommand that takes in 2 parameters: 
// The first should be called numOfTurrets (which will always be given a positive integer argument value)
// The second should be called numOfDetectedZombies (which will always be given a positive integer argument value).
//  Your function should log to the console a string that matches the following format: "Directing X turrets' fire to zombie # ____." 
//      where the X represents how many turrets you have, and the blank space represents the current zombie being targeted.

// Your function should run as many loop iterates as there are numOfDetectedZombies.

// Write your code below:

function directTurretDefenceCommand (numOfTurrets, numOfDetectedZombies) {
for (let numZombiesKilled = 1; numZombiesKilled <= numOfDetectedZombies; numZombiesKilled++) {
    console.log("Directing" + numOfTurrets + "turrets fired to zombie number" + numZombiesKilled + ".")
}
}
directTurretDefenceCommand(5,10)