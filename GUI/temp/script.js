$(document).ready(function() {
    // Listen for changes in the file input
    $('#fileInput').on('change', function() {
      // Read the uploaded JSON file
      var file = $(this)[0].files[0];
      var reader = new FileReader();
      reader.onload = function(event) {
        var data = JSON.parse(event.target.result);
        displayCourt(data);
      };
      reader.readAsText(file);
    });
    
    // Display the court with the percentages
    function displayCourt(data) {
      var positions = ['point_guard', 'shooting_guard', 'small_forward', 'power_forward', 'center'];
      var pic = document.getElementById('main_img');
      pic.src = "basketball_court_1.png";
      for (var i = 0; i < positions.length; i++) {
          var element = document.getElementsByClassName(positions[i])[0];
          var percentage = data[positions[i]];
          element.style.display = "flex"
          element.textContent = percentage+"%";
        }
    }
  });
  