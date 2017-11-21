const markerFactory = require('./marker')

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiamJhcnVjaDc2IiwiYSI6ImNqYTl1OTFlbjBhbHQycW5jYzRmZm9mcnMifQ.ZsNmT2-jY_HnF6xZSJfWgw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const newMarker = markerFactory('activities', [-74.009, 40.705]);

newMarker.addTo(map);

const itineraryToggle = document.getElementById('nav-itinerary');
const itinerary = document.getElementsByClassName('itinerary')[0];
const activitiesToggle = document.getElementById('nav-activities');
const activities = document.getElementsByClassName('activities')[0];


itineraryToggle.addEventListener('click', function() {
  itinerary.classList.toggle('hidden');
});
activitiesToggle.addEventListener('click', function() {
  activities.classList.toggle('hidden');
});
