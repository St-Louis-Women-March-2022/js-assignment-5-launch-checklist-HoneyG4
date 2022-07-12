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
       return "Empty"
    }
    else if (isNaN(testInput)){
        return"Not a Number"
    }
    
    else if  (!isNaN(testInput)){
   return "Is a Number"
    }
    
    }

   function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty"){
        alert("All fields must contain input")
    }
    if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Make sure to enter valid information for each field!");
       
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!")
      
    } 
     else  { 
          pilotStatus.innerHTML = `Pilot ${pilot} Ready`
        copilotStatus.innerHTML = `CoPilot ${copilot} Ready`;
       // list.style.visibility = 'visible';
   
    launchStatus.innerHTML += `
    <div>
        <ol>
            `
         if (fuelLevel >= 10000 ||cargoMass <= 10000 ) {
                launchStatus.innerHTML = `Shuttle is ready for launch`;
                    launchStatus.style.color = `green`;
                    if(fuelLevel >= 10000)
                        fuelStatus.innerHTML = `Fuel level high enough for launch`;
                    if(cargoMass <= 10000 )
                     cargoStatus.innerHTML = `Cargo mass low enough for launch`;
       }
        
         else if (fuelLevel <= 10000 || cargoMass >= 10000)  {
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = `red`;
            if  (fuelLevel <= 10000) {
            fuelStatus.innerHTML = `Fuel level too low for launch`;
              };
              if(cargoMass >= 10000)
           
                launchStatus.innerHTML = `Shuttle not ready for launch`;
                    launchStatus.style.color = `red`;
                        
        }
        }                                                     
                `
            </ol>
        </div>
        `; 
    }

    
   async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) { 
     return response.json()

         
    })
    return planetsReturned 
    };

function pickPlanet(planets) {
 let index = Math.floor(Math.random() * planets.length)
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
