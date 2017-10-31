// jQuery Weather!

// Using your newfound knowledge of jQuery, re-create our weather
// application. It should:
// - Use a loop to create 6 days of forecast within the <div> element
//   with class name "forecast"
// - When clicking the "Get the weather!" button, the weather should
//   appear with a "fade" effect

// HINTS

// Each day of the forecast should use HTML markup similar to:
// <div class="col">
//   <h3><i class="fa fa-sun-o"></i></h3>
//   <h4>89|55</h4>
//   <h5>Clear throughout the day.</h5>
// </div>

// The provided icon() function takes a Dark Sky point object and
// converts it into an icon, e.g.
// icon(response.daily.data[1])

// Math.round(75.88) => 75

// .empty() empties the HTML contents of a jQuery DOM object

// .append() appends a string (containing HTML) to a jQuery DOM object

let handleWeatherResponse = function(response) {
  // leave these two lines alone; they allow for the inspection of
  // the response object in the browser console
  console.log(response)
  window.response = response

$(".forecast").empty();

let markup = "";
  for(let i=1; i<=6; i++) {

    markup+= "<div class='col-2'>";
    markup+= "<h5 class='daily-icon'></i>"
    + Date(response.daily.data[i].time)
    // Need to figure out how to convert time to day of week
    + "</h5>";
    markup+= "<h3 class='daily-icon'></i>"
    + icon(response.daily.data[i])
    // Need to figure out how to pull the appropriate icon
    + "</h3>";
    markup+= "<h4 class='daily-high'>"
      + Math.round(response.daily.data[i].temperatureHigh)
      + " | " + Math.round(response.daily.data[i].temperatureLow) + "</h4>";
    markup+= "<h5 class='daily-text'>"
    + response.daily.data[i].summary
    + "</h5>";
    markup+= "</div></div></div>";

  }
  $(".forecast").append(markup);
  $(".forecast").fadeIn(2000);
  // **** your code starts here - don't modify anything else. you will be sad.


  // *** your code ends here - no, really.
};

// leave this alone; does the event handling and ajax
$(function() {
  $("#get-the-weather").on("click", function(event) {
    event.preventDefault();
    let locationName = $("#location-name").val();
    geocodeAndGetWeather(locationName);
  });
});
