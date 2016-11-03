var url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=XqFf3eilW1Et6L9C4TQ5dQ86981yiMCpa85Is9i3";

$.ajax({
  url: url,
  success: function(results) {
    alert("Got back " + results.element_count + " asteroids");
  }
});
