// step-1 get reference to DOM elements

// get a referencce to main container
const container = document.querySelector(".container");

// get a referencce of all avaiable seats
const seats = document.querySelectorAll(".row .seat:not(.sold)");

// get a referencce of count and the total elements
const count = document.getElementById("count");
const total = document.getElementById("total");

// referencce of the movie dropdown
const movieSelect = document.getElementById("movie");

// step-2 add events listners

// event listener for movie selection change
movieSelect.addEventListener("change", (e) => {
  ///update ticket price and store selected movie data
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);

  // update display count and total
  updateSelectedCount();
});

// event listener for seat clicks
container.addEventListener("click", (e) => {
  //check if a seat is click and not click
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold")
  ) {
    // toggle seat selecttion
    e.target.classList.toggle("selected");
    // update display count and total
    updateSelectedCount();
  }
});

// step-3 define funciton to update selected count and total

function updateSelectedCount() {
  //get all selected seats
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  // get an arraY of selected seats indexes
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  //store selected seats index into local storage
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  //calculate selected seat and count
  const selectedSeatsCount = selectedSeats.length;

  //update ui with selected seates count and total price
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;

  setMovieData(movieSelect.selectedIndex, movieSelect.value);
}

// step-4 define function to set selected movie data in loccal storage
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

// step-5 define function to populate ui with local storage data
// fuction to populate ui from local storage data
function populateUI() {
  //get selected seats from selected seats
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  // if there are selcted seats and then mark them as a selected in the ui
  if (selectedSeats != null && selectedSeats.length > 0) {
    seats.forEach((seats, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seats.classList.add("selected");
      }
    });
  }

  // get selected movie data from  local storage
  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  //if there is selected movie index , then set it in teh drop dowm
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// step-6 initial setup of count total and ui based on save data
populateUI();

// initialize ticket price
let ticketPrice = +movieSelect.value;

updateSelectedCount();
