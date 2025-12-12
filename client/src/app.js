console.log("Hello World");

const skyLogForm = document.getElementById("airline-form");
console.log(skyLogForm);

//TODO: Connect dropdown lists in form with database

//needs to be an async/await function so it has time to fetch the data from the database. One function for each database

async function selectAirports() {
  const res = await fetch(
    "https://week4-assignment-1-mku5.onrender.com/airports"
  );
  const list = await res.json();
  console.log("Airports:", list);

  //select id from HTML to add in list

  const departureList = document.getElementById("departure");
  const arrivalList = document.getElementById("arrival");

  //I need to create the actual dropdown in HTML, potential use for loop to create one value per database entry

  list.forEach((airport) => {
    const departureAirport = document.createElement("option");
    departureAirport.value = airport.iata_code;
    departureAirport.textContent = `${airport.name} (${airport.iata_code})`;
    departureList.appendChild(departureAirport);

    const arrivalAirport = document.createElement("option");
    arrivalAirport.value = airport.iata_code;
    arrivalAirport.textContent = `${airport.name} (${airport.iata_code})`;
    arrivalList.appendChild(arrivalAirport);
  });
}

//repeat above for airlines and aircrafts

async function selectAirline() {
  const res = await fetch(
    "https://week4-assignment-1-mku5.onrender.com/airlines"
  );
  const list = await res.json();
  console.log("Airlines:", list);

  const airlineList = document.getElementById("airline");
  list.forEach((airline) => {
    const airlineChoice = document.createElement("option");
    airlineChoice.value = airline.airline;
    airlineChoice.textContent = airline.airline;
    airlineList.appendChild(airlineChoice);
  });
}

async function selectAircraft() {
  const res = await fetch(
    "https://week4-assignment-1-mku5.onrender.com/aircrafts"
  );
  const list = await res.json();
  console.log("Aircrafts:", list);

  const aircraftList = document.getElementById("aircraft");
  list.forEach((aircraft) => {
    const aircraftChoice = document.createElement("option");
    aircraftChoice.value = aircraft.aircraft;
    aircraftChoice.textContent = aircraft.aircraft;
    aircraftList.appendChild(aircraftChoice);
  });
}

selectAirports();
selectAirline();
selectAircraft();

//TODO: create function so when user submits their data, it reaches the database

function handleSkyLogsubmit(event) {
  event.preventDefault();
  const formDataTemplate = new FormData(skyLogForm);
  const formValues = Object.fromEntries(formDataTemplate);
  console.log(formValues);

  fetch("https://week4-assignment-1-mku5.onrender.com/new-skylog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}

skyLogForm.addEventListener("submit", handleSkyLogsubmit);
