// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML += `
        <div>
            <ol>        
                <li>Name: ${name}</li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance: ${distance}</li>
                <li>Moons: ${moons}</li>
            </ol>
            <img src=${imageUrl}></img>
        </div>`
        ;
    }
  
  
  
  
  
  
  
  
  
  
  
    
function validateInput(testInput) {
    if (testInput ==="") {
       alert("Empty")
    }
    if (isNaN(value)){
        alert("Not A Number")
    }
    else if{
       alert("Is a Number")
    }
    else {


    }
    }
    
 

   


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let launchStatus = document.getElementById('launchStatus')
    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")
    let fuelLevel= document.getElementById('fuelStatus')
    let  cargoLevel = document.getElementById('cargoStatus')
    const list = document.querySelector('#faultyItems')
    launchStatus.innerHTML += `
    <div>
        <ol>
            `
        pilotStatus.innerHTML = `Pilot ${pilot} Ready`
        copilotStatus.innerHTML = `CoPilot ${copilot} Ready`;

        if (fuelLevel >= 10000) {
            list.style.visibility = 'visible';
                launchStatus.innerHTML = `Shuttle is ready for launch`;
                    launchStatus.style.color = `green`;
                        fuelStatus.innerHTML = `Fuel level high enough for launch`;

        }
        if (cargoMass <= 10000) {
            list.style.visibility = 'visible';
                launchStatus.innerHTML = `Shuttle is ready for launch`;
                    launchStatus.style.color = `green`;
                        cargoLevel.innerHTML = `Cargo mass low enough for launch`;

        }    
        if (fuelLevel <= 10000){
            list.style.visibility = 'visible';
                launchStatus.innerHTML = `Shuttle not ready for launch`;
                    launchStatus.style.color = `red`;
                        fuelStatus.innerHTML = `Fuel level too low for launch`;
        }
        if (cargoMass >= 10000) {
            list.style.visibility = 'visible';
                launchStatus.innerHTML = `Shuttle not ready for launch`;
                    launchStatus.style.color = `red`;
                    cargoLevel.innerHTML = `Cargo mass over capacity for launch`;
        }                                                     
                `
            </ol>
        </div>
        `; 


   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
