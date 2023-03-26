$(document).ready(async function () {
  // Make a GET request to the root endpoint

  var response = await fetch('http://127.0.0.1:8080/', {
   headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
   },
   credentials: 'same-origin',
  })
  var body = await response.json(); 
  displayCourt(body);
});

// Display the court with the percentages
function displayCourt(data) {
  var positions = [
    "point_guard",
    "shooting_guard",
    "small_forward",
    "power_forward",
    "center",
  ];
  for (var i = 0; i < positions.length; i++) {
    var element = document.getElementsByClassName(positions[i])[0];
    var percentage = data[positions[i]];
    element.style.display = "flex";
    element.textContent = percentage + "%";
  }
}