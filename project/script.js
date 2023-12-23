
// Hide preloader after 2 seconds
window.addEventListener('load', function() {
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      preloader.style.display = 'none';
    }, 2000); // 2000 milliseconds = 2 seconds
  });
  
  function showPopup(movie) {
    // Logic to show the movie popup
    document.getElementById('moviePopup').style.display = 'block';
}




let currentMovie = null;

function togglePopup(movie) {
    const popup = document.getElementById('moviePopup');
    if (popup.style.display === 'block' && currentMovie === movie) {
        popup.style.display = 'none';
        currentMovie = null;
    } else {
        currentMovie = movie;
        // You can dynamically update the content of the popup based on the movie clicked
        popup.style.display = 'block';
    }
}

function closePopup() {
    document.getElementById('moviePopup').style.display = 'none';
    currentMovie = null;
}



// Define the calculateRate function
function calculateRate() {
    // Retrieve form values
    var adults = parseInt(document.getElementById("adults").value);
    var children = parseInt(document.getElementById("children").value);
    var seniors = parseInt(document.getElementById("seniors").value);

    // Define prices (You can adjust these as needed)
    var adultPrice = 200; // Price per adult
    var childPrice = 150; // Price per child
    var seniorPrice = 150; // Price per senior

    // Calculate total price
    var totalAdultPrice = adults * adultPrice;
    var totalChildPrice = children * childPrice;
    var totalSeniorPrice = seniors * seniorPrice;

    var totalPrice = totalAdultPrice + totalChildPrice + totalSeniorPrice;

    // Display the total price (You can modify this part based on your requirements)
    alert("Thank You for chosing us... Ticket Conformed!!! Total Price: Rs" + totalPrice.toFixed(2)); // Displaying total price in an alert for demonstration purposes
}



// Function to handle the submit button click event
function handleFormSubmit() {
    // Redirect to movie.html
    window.location.href = 'book/';
}

// Attach the handleFormSubmit function to the submit button's click event
document.querySelector('button[type="button"]').addEventListener('click', handleFormSubmit);
