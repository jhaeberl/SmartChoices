/*
 * SmartChoices utilities
 */
///////////////////////////////////////////////////////////////////////////////
// global variables
var gMap;

///////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
  // hide the work div in the search panel
  $('#work').hide();

  // hide the "working..." area
  $('#working').hide();

  // set up the size of the map container
  $('#mapContainer').css({
    width: 636,
    height: 420
  });

  // set the event handler for the intro button
  $('#btnIntro').click(function() {
    $('#intro').toggle();
    $('#work').toggle();
  });

  // Initialize the map
  init_map();
});

///////////////////////////////////////////////////////////////////////////////
function init_map() {
  // set map center
  var latlng = new google.maps.LatLng(41.766558512059326, -72.67359495162964);

  // set map options
  var mapOptions = {
      zoom: 11,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  // create and save the map
  gMap = new google.maps.Map(document.getElementById('mapContainer'), mapOptions);
}
