window.addEventListener("load", function() {

   let listedPlanets;
   
   let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
      
   }).then(function () {
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
       
   formSubmission( document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
       event.preventDefault()
   });     
       
});



