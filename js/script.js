var url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=XqFf3eilW1Et6L9C4TQ5dQ86981yiMCpa85Is9i3";

$.ajax({
  url: url,
  success: function(results) {
    $("#count").html(results.element_count);
    // Below does the exact same thing, but more longer / ungainly
    // document.getElementById("count").innerHTML = results.element_count;

    var asteroids = results.near_earth_objects["2015-09-08"];
    var asteroid;
    var currentRow;
    for(var i = 0; i < asteroids.length; i++) {

      if(i % 3 === 0) {
        currentRow = $("<div></div>").addClass("row");
        $(".container").append(currentRow);
      }
      makeName(asteroids[i], currentRow);
    }
  }
});

function makeName(asteroid){
  var column = $("<div></div>").addClass("col-md-4");
  var name = $("<h3></h3>").html(asteroid.name);

  $(column).append(name);
  $(row).append(column);
}
