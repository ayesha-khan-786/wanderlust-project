/*
    mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({                     
        container: "map",          // container ID
        style:"mapbox://styles/mapbox/streets-v12",   // style URL
        center:  listing.geometry.coordinates,      // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 8 // starting zoom
    });


     const marker = new mapboxgl.Marker({color:"red"})
     .setLngLat(listing.geometry.coordinates)   // Listing.geometry.coordinates
     .setPopup(
      new mapboxgl.Popup({offset: 25})
      .setHTML(
        `<h4>${listing.title}</h4><p>Exact location will be provided after booking..</p>` 
      )
   )
     .addTo(map);   */

       console.log("Geoapify Map Loaded");

// Assuming you have MAP_TOKEN available (e.g., injected from EJS)
const locationInput = document.getElementById("location");
const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");
const countryInput = document.getElementById("country");
const selectedLocation = document.getElementById("selectedLocation");

const autocomplete = new autocomplete.GeocoderAutocomplete(locationInput, 'YOUR_API_KEY', {
  placeholder:"Enter a location",
  limit:3,
});
// On location selection
autocomplete.on("select", (location) => {
  if (location && location.properties) {
    const { lat, lon, country, formatted } = location.properties;

    // Set values in form
    latitudeInput.value = lat;
    longitudeInput.value = lon;
    countryInput.value = country;
    selectedLocation.innerText = `📍 ${formatted}`;

    // Update map if marker and map exist
    if (window.previewMarker && window.map) {
      previewMarker.setLatLng([lat, lon])
        .setPopupContent(`📍 ${formatted}`)
        .openPopup();
      map.setView([lat, lon], 13);
    }
  }
});

// Clear coordinates when input is cleared
input.addEventListener("input", () => {
  if (!input.value.trim()) {
    latitudeInput.value = "";
    longitudeInput.value = "";
    countryInput.value = "";
    selectedLocation.innerText = "";
  }
});


     