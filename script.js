// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
      
   }).then(function () {
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let newPlanet = pickPlanet(listedPlanets);
    
      addDestinationInfo(document, newPlanet.name, newPlanet.diameter, newPlanet.star, newPlanet.distance, newPlanet.moons,newPlanet.image)
   })
   
   let form = document.querySelector("form");

   form.addEventListener("submit", function (event) {

       let pilot = document.querySelector("input[name=pilotName]");
       let copilot= document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoLevel = document.querySelector("input[name=cargoMass]");
       let list = document.getElementById('faultyItems');
       let launchStatus = document.getElementById('launchStatus');
       event.preventDefault()

   formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
       
      
       
   });

});

