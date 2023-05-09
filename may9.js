// Looping with Elle - Tues May 9 review session

let grandfatherAge = 40;

while (grandfatherAge < 67) {
    console.log("Time to go to work!")
    grandfatherAge += 1
    console.log("My grandpa's one year older: ", grandfatherAge)
}


let currentClassDay = 11;
let numOfClassDays = 30;

while (currentClassDay < numOfClassDays) {
    console.log("Time to log into Zoom");
    console.log("Oh shit not another js problem!")
    currentClassDay++
}


//vet clinic line loop example

let vetClinicLine = ["Koda", "Leela", "Maple", "Phinn", "Jinx"]
let currentPetNumber = 0

while(vetClinicLine.length > 0) {
   let currentPetBeingSeen = vetClinicLine.shift();
   console.log("currentPetBeingSeen: ", currentPetBeingSeen)
   console.log("The vet clinic line: ", vetClinicLine)
}


// FOR LOOPS with ELLE

// Marathon running pseudocode plain English from Elle
    // 1) Starting line --> Where do we want the runner (our for loop) to start running (iterating)?
    // 2) Race Length / Race Conditions --> How do we know to keep running?? (milestones, milemarkers, conditions to signal runner to stop running)
    // 3) Victory celebration --> What do we do at the end of the race?

    for (let numOfKmRunSoFar = 0; numOfKmRunSoFar < 10; numOfKmRunSoFar++){
        console.log("The number of km run ", numOfKmRunSoFar)
    }


// Additional example

let morePetsArray = ["Mona", "Toto", "Eevee", "Lincoln", "Coco", "Luna"];

for (let currentQueueNum = 0; currentQueueNum < morePetsArray.length; currentQueueNum++) {
    console.log("Currently seeing pet number: ", currentQueueNum);
    console.log("Welcome, ", morePetsArray[currentQueueNum])
}
