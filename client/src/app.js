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
  skyLogForm.reset();
}

skyLogForm.addEventListener("submit", handleSkyLogsubmit);

//add the entries below the form in a guestbook style (use append and create). Decided to use loop and fetch so each entry creates its own card and other users can see entries

async function SkylogEntries() {
  const res = await fetch(
    "https://week4-assignment-1-mku5.onrender.com/skylog"
  ); //fetch directly from subabase database via server
  const skylogs = await res.json();

  const section = document.getElementById("user-input");
  skylogs.forEach(function (log) {
    //added loop here as I want that each entry is it's own section
    const entry = document.createElement("div");
    entry.className = "logentry";

    const date = new Date(log.flight_date);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    entry.textContent = `${log.airline} ${log.aircraft} | Route :${log.departure} -> ${log.arrival} | Date: ${formattedDate} | On Board: ${log.username}`;

    section.appendChild(entry);
  });
}

SkylogEntries();

//added in a go back to top bottom as log entries might get long, copied and amended from week 1 assignment (realised week 1 did not work as this did not specifically ask for type module JS in the client). Tried it with eventListener instead

//Future note: when type module is declared, this particular functions doesn't get automatically added to browser/window. For just clicks, window. isn't needed, as the event is self explanatory. The back to top functions needs to lisen to scroll and click as it also looks out for position. (https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

const topButton = document.getElementById("myBtn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 10) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

topButton.addEventListener("click", topFunction);

function topFunction(event) {
  event.preventDefault(); //stops if on a smaller screen it's inside the form, so user doesn't accidentally click submit
  window.scrollTo({ top: 0, behavior: "smooth" });
}
