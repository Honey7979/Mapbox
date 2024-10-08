
// mapboxgl.accessToken = 'pk.eyJ1IjoiZ2F1cmF2bmciLCJhIjoiY20xdG1kZTA0MDNiejJ2c2JtMmRlaG02OSJ9._xGChZrx9OZlwpcv3dXVqQ'; 
// const map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     projection: 'globe',
//     zoom: 1,
//     center: [30, 15]
// });

// map.addControl(new mapboxgl.NavigationControl());


// const geolocateControl = new mapboxgl.GeolocateControl({
//     positionOptions: {
//         enableHighAccuracy: true
//     },
//     trackUserLocation: true,
//     showUserLocation: true
// });
// map.addControl(geolocateControl);

// geolocateControl.on('geolocate', (e) => {
//     const { latitude, longitude } = e.coords;

//     // Log the user's location
//     console.log('User location updated:', latitude, longitude);

//     // Reverse geocoding to get the address
//     fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxgl.accessToken}`)
//         .then(response => response.json())
//         .then(data => {
//             if (data.features && data.features.length > 0) {
//                 const place = data.features[0];
//                 const address = place.place_name;
//                 console.log('Current address:', address);

//                 // Create a popup
//                 const popup = new mapboxgl.Popup({ closeOnClick: false })
//                     .setLngLat([longitude, latitude])
//                     .setHTML(`<h3>Your Location</h3><p>${address}</p>`)
//                     .addTo(map);
                
//                 // Optionally, center the map on the user's location
//                 map.flyTo({ center: [longitude, latitude], zoom: 12 });
//             } else {
//                 console.log('No address found for this location');
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching address:', error);
//         });
// });

// map.scrollZoom.disable();

// map.on('style.load', () => {
//     map.setFog({});
// });

// const secondsPerRevolution = 240;
// const maxSpinZoom = 5;
// const slowSpinZoom = 3;

// let userInteracting = false;
// const spinEnabled = true;

// function spinGlobe() {
//     const zoom = map.getZoom();
//     if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
//         let distancePerSecond = 360 / secondsPerRevolution;
//         if (zoom > slowSpinZoom) {
//             const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
//             distancePerSecond *= zoomDif;
//         }
//         const center = map.getCenter();
//         center.lng -= distancePerSecond;
//         map.easeTo({ center, duration: 1000, easing: (n) => n });
//     }
// }

// map.on('mousedown', () => { userInteracting = true; });
// map.on('dragstart', () => { userInteracting = true; });
// map.on('moveend', () => { spinGlobe(); });

// spinGlobe();

// // Search functionality
// const searchBox = document.getElementById('searchBox');
// const searchButton = document.getElementById('searchButton');
// const suggestionsPanel = document.getElementById('suggestionsPanel');
// const suggestionsList = document.getElementById('suggestions');

// searchBox.addEventListener('input', function() {
//     const query = searchBox.value;
//     if (query) {
//         fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${mapboxgl.accessToken}`)
//             .then(response => response.json())
//             .then(data => {
//                 suggestionsList.innerHTML = '';
//                 if (data.features && data.features.length > 0) {
//                     suggestionsPanel.style.display = 'block';
//                     data.features.forEach(feature => {
//                         const li = document.createElement('li');
//                         li.textContent = feature.place_name;
//                         li.className = 'suggestion-item';
//                         li.addEventListener('click', () => {
//                             selectLocation(feature);
//                         });
//                         suggestionsList.appendChild(li);
//                     });
//                 } else {
//                     suggestionsPanel.style.display = 'none';
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching suggestions:', error);
//                 suggestionsPanel.style.display = 'none';
//             });
//     } else {
//         suggestionsPanel.style.display = 'none';
//     }
// });

// function selectLocation(feature) {
//     searchBox.value = feature.place_name;
//     suggestionsPanel.style.display = 'none';
//     const coordinates = feature.geometry.coordinates;
//     map.flyTo({
//         center: coordinates,
//         zoom: 12
//     });
//     new mapboxgl.Marker()
//         .setLngLat(coordinates)
//         .addTo(map);
// }

// searchButton.addEventListener('click', () => {
//     const query = searchBox.value;
//     if (query) {
//         fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${mapboxgl.accessToken}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.features && data.features.length > 0) {
//                     selectLocation(data.features[0]);
//                 } else {
//                     alert('No results found');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching the Geocoding API:', error);
//                 alert('Error fetching results');
//             });
//     }
// });


// mapboxgl.accessToken = 'pk.eyJ1IjoiZ2F1cmF2bmciLCJhIjoiY20xdG1kZTA0MDNiejJ2c2JtMmRlaG02OSJ9._xGChZrx9OZlwpcv3dXVqQ'; 
// const map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     projection: 'globe',
//     zoom: 1,
//     center: [30, 15]
// });

// map.addControl(new mapboxgl.NavigationControl());

// let distanceMode = false; // Track if the user is in distance mode

// // Toggle button for distance mode
// document.getElementById('toggleDistanceButton').addEventListener('click', () => {
//     distanceMode = !distanceMode;
//     if (distanceMode) {
//         document.getElementById('searchBox2').style.display = 'block'; // Show second input for distance mode
//         document.getElementById('toggleDistanceButton').textContent = '🔄 Location Mode'; // Change button text
//     } else {
//         document.getElementById('searchBox2').style.display = 'none'; // Hide second input
//         document.getElementById('toggleDistanceButton').textContent = '🔄 Distance Mode'; // Change button text
//     }
// });

// // Function to calculate the distance between two locations
// function calculateDistance(coords1, coords2) {
//     const R = 6371; // Radius of the Earth in kilometers
//     const dLat = (coords2[1] - coords1[1]) * Math.PI / 180;
//     const dLon = (coords2[0] - coords1[0]) * Math.PI / 180;
//     const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//               Math.cos(coords1[1] * Math.PI / 180) * Math.cos(coords2[1] * Math.PI / 180) *
//               Math.sin(dLon / 2) * Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = R * c; // Distance in kilometers
//     return distance;
// }

// // Search functionality
// const searchBox = document.getElementById('searchBox');
// const searchBox2 = document.getElementById('searchBox2'); // Second input for distance mode
// const searchButton = document.getElementById('searchButton');

// searchButton.addEventListener('click', () => {
//     const query1 = searchBox.value;
//     const query2 = searchBox2.value;

//     if (distanceMode && query1 && query2) {
//         // Fetch the coordinates for both locations
//         Promise.all([
//             fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query1)}.json?access_token=${mapboxgl.accessToken}`)
//                 .then(response => response.json()),
//             fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query2)}.json?access_token=${mapboxgl.accessToken}`)
//                 .then(response => response.json())
//         ]).then(data => {
//             const feature1 = data[0].features[0];
//             const feature2 = data[1].features[0];

//             if (feature1 && feature2) {
//                 const coords1 = feature1.geometry.coordinates;
//                 const coords2 = feature2.geometry.coordinates;

//                 // Calculate and display the distance
//                 const distance = calculateDistance(coords1, coords2);
//                 alert(`The distance between ${query1} and ${query2} is ${distance.toFixed(2)} km`);

//                 // Fly to the first location
//                 map.flyTo({ center: coords1, zoom: 12 });

//                 // Add red markers for both locations
//                 const redMarker1 = document.createElement('div');
//                 redMarker1.className = 'red-marker';
//                 new mapboxgl.Marker(redMarker1).setLngLat(coords1).addTo(map);

//                 const redMarker2 = document.createElement('div');
//                 redMarker2.className = 'red-marker';
//                 new mapboxgl.Marker(redMarker2).setLngLat(coords2).addTo(map);
//             } else {
//                 alert('Could not find both locations');
//             }
//         }).catch(error => {
//             console.error('Error fetching the Geocoding API:', error);
//             alert('Error fetching locations');
//         });
//     } else if (query1) {
//         // Normal location search
//         fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query1)}.json?access_token=${mapboxgl.accessToken}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.features && data.features.length > 0) {
//                     const feature = data.features[0];
//                     const coords = feature.geometry.coordinates;

//                     // Fly to the location and add a red marker
//                     map.flyTo({ center: coords, zoom: 12 });
                    
//                     const redMarker = document.createElement('div');
//                     redMarker.className = 'red-marker';
//                     new mapboxgl.Marker(redMarker).setLngLat(coords).addTo(map);
//                 } else {
//                     alert('No results found');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching the Geocoding API:', error);
//                 alert('Error fetching location');
//             });
//     }
// });

// mapboxgl.accessToken = 'pk.eyJ1IjoiZ2F1cmF2bmciLCJhIjoiY20xdG1kZTA0MDNiejJ2c2JtMmRlaG02OSJ9._xGChZrx9OZlwpcv3dXVqQ'; 
// const map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     projection: 'globe',
//     zoom: 1,
//     center: [30, 15]
// });

// map.addControl(new mapboxgl.NavigationControl());

// let distanceMode = false; // Track if the user is in distance mode

// // Toggle button for distance mode
// document.getElementById('toggleDistanceButton').addEventListener('click', () => {
//     distanceMode = !distanceMode;
//     if (distanceMode) {
//         document.getElementById('searchBox2').style.display = 'block'; // Show second input for distance mode
//         document.getElementById('toggleDistanceButton').textContent = '🔄 Location Mode'; // Change button text
//     } else {
//         document.getElementById('searchBox2').style.display = 'none'; // Hide second input
//         document.getElementById('toggleDistanceButton').textContent = '🔄 Distance Mode'; // Change button text
//     }
// });

// // Function to calculate the distance between two locations
// function calculateDistance(coords1, coords2) {
//     const R = 6371; // Radius of the Earth in kilometers
//     const dLat = (coords2[1] - coords1[1]) * Math.PI / 180;
//     const dLon = (coords2[0] - coords1[0]) * Math.PI / 180;
//     const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//               Math.cos(coords1[1] * Math.PI / 180) * Math.cos(coords2[1] * Math.PI / 180) *
//               Math.sin(dLon / 2) * Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = R * c; // Distance in kilometers
//     return distance;
// }

// // Function to draw a line between two points
// function drawLine(coords1, coords2) {
//     const line = {
//         'type': 'Feature',
//         'geometry': {
//             'type': 'LineString',
//             'coordinates': [coords1, coords2]
//         }
//     };
//     map.addSource('route', {
//         'type': 'geojson',
//         'data': line
//     });

//     map.addLayer({
//         'id': 'route',
//         'type': 'line',
//         'source': 'route',
//         'layout': {
//             'line-join': 'round',
//             'line-cap': 'round'
//         },
//         'paint': {
//             'line-color': '#ff0000',
//             'line-width': 3
//         }
//     });
// }

// // Search functionality
// const searchBox = document.getElementById('searchBox');
// const searchBox2 = document.getElementById('searchBox2'); // Second input for distance mode
// const searchButton = document.getElementById('searchButton');

// searchButton.addEventListener('click', () => {
//     const query1 = searchBox.value;
//     const query2 = searchBox2.value;

//     if (distanceMode && query1 && query2) {
//         // Fetch the coordinates for both locations
//         Promise.all([
//             fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query1)}.json?access_token=${mapboxgl.accessToken}`)
//                 .then(response => response.json()),
//             fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query2)}.json?access_token=${mapboxgl.accessToken}`)
//                 .then(response => response.json())
//         ]).then(data => {
//             const feature1 = data[0].features[0];
//             const feature2 = data[1].features[0];

//             if (feature1 && feature2) {
//                 const coords1 = feature1.geometry.coordinates;
//                 const coords2 = feature2.geometry.coordinates;

//                 // Calculate and display the distance
//                 const distance = calculateDistance(coords1, coords2);
//                 alert(`The distance between ${query1} and ${query2} is ${distance.toFixed(2)} km`);

//                 // Add red markers for both locations
//                 const redMarker1 = document.createElement('div');
//                 redMarker1.className = 'red-marker';
//                 new mapboxgl.Marker(redMarker1).setLngLat(coords1).addTo(map);

//                 const redMarker2 = document.createElement('div');
//                 redMarker2.className = 'red-marker';
//                 new mapboxgl.Marker(redMarker2).setLngLat(coords2).addTo(map);

//                 // Draw a line between the two locations
//                 drawLine(coords1, coords2);

//                 // Fit the map to show both markers
//                 const bounds = new mapboxgl.LngLatBounds();
//                 bounds.extend(coords1);
//                 bounds.extend(coords2);
//                 map.fitBounds(bounds, { padding: 50 });

//             } else {
//                 alert('Could not find both locations');
//             }
//         }).catch(error => {
//             console.error('Error fetching the Geocoding API:', error);
//             alert('Error fetching locations');
//         });
//     } else if (query1) {
//         // Normal location search
//         fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query1)}.json?access_token=${mapboxgl.accessToken}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.features && data.features.length > 0) {
//                     const feature = data.features[0];
//                     const coords = feature.geometry.coordinates;

//                     // Fly to the location and add a red marker
//                     map.flyTo({ center: coords, zoom: 12 });
                    
//                     const redMarker = document.createElement('div');
//                     redMarker.className = 'red-marker';
//                     new mapboxgl.Marker(redMarker).setLngLat(coords).addTo(map);
//                 } else {
//                     alert('No results found');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching the Geocoding API:', error);
//                 alert('Error fetching location');
//             });
//     }
// });

// // CSS for red marker
// const style = document.createElement('style');
// style.innerHTML = `
//     .red-marker {
//         background-color: red;
//         width: 20px;
//         height: 20px;
//         border-radius: 50%;
//     }
// `;
// document.head.appendChild(style);

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2F1cmF2bmciLCJhIjoiY20xdG1kZTA0MDNiejJ2c2JtMmRlaG02OSJ9._xGChZrx9OZlwpcv3dXVqQ'; 
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    projection: 'globe',
    zoom: 1,
    center: [30, 15]
});

map.addControl(new mapboxgl.NavigationControl());

// Geolocation control to track user location
const geolocateControl = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true
});
map.addControl(geolocateControl);

geolocateControl.on('geolocate', (e) => {
    const { latitude, longitude } = e.coords;

    // Log the user's location
    console.log('User location updated:', latitude, longitude);

    // Reverse geocoding to get the address
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${mapboxgl.accessToken}`)
        .then(response => response.json())
        .then(data => {
            if (data.features && data.features.length > 0) {
                const place = data.features[0];
                const address = place.place_name;
                console.log('Current address:', address);

                // Create a popup to show the address
                const popup = new mapboxgl.Popup({ closeOnClick: false })
                    .setLngLat([longitude, latitude])
                    .setHTML(`<h3>Your Location</h3><p>${address}</p>`)
                    .addTo(map);
                
                // Optionally, center the map on the user's location
                map.flyTo({ center: [longitude, latitude], zoom: 12 });
            } else {
                console.log('No address found for this location');
            }
        })
        .catch(error => {
            console.error('Error fetching address:', error);
        });
});

map.scrollZoom.disable();

// Add fog to the globe
map.on('style.load', () => {
    map.setFog({});
});

// Spin globe
const secondsPerRevolution = 240;
const maxSpinZoom = 5;
const slowSpinZoom = 3;
let userInteracting = false;
const spinEnabled = true;

function spinGlobe() {
    const zoom = map.getZoom();
    if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
            const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
            distancePerSecond *= zoomDif;
        }
        const center = map.getCenter();
        center.lng -= distancePerSecond;
        map.easeTo({ center, duration: 1000, easing: (n) => n });
    }
}

map.on('mousedown', () => { userInteracting = true; });
map.on('dragstart', () => { userInteracting = true; });
map.on('moveend', () => { spinGlobe(); });
spinGlobe();

let distanceMode = false; // Track if the user is in distance mode

// Toggle button for distance mode
document.getElementById('toggleDistanceButton').addEventListener('click', () => {
    distanceMode = !distanceMode;
    if (distanceMode) {
        document.getElementById('searchBox2').style.display = 'block'; // Show second input for distance mode
        document.getElementById('toggleDistanceButton').textContent = '🔄 Location Mode'; // Change button text
    } else {
        document.getElementById('searchBox2').style.display = 'none'; // Hide second input
        document.getElementById('toggleDistanceButton').textContent = '🔄 Distance Mode'; // Change button text
    }
});

// Function to calculate the distance between two locations
function calculateDistance(coords1, coords2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (coords2[1] - coords1[1]) * Math.PI / 180;
    const dLon = (coords2[0] - coords1[0]) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(coords1[1] * Math.PI / 180) * Math.cos(coords2[1] * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
}

// Function to draw a line between two points
function drawLine(coords1, coords2) {
    const line = {
        'type': 'Feature',
        'geometry': {
            'type': 'LineString',
            'coordinates': [coords1, coords2]
        }
    };
    map.addSource('route', {
        'type': 'geojson',
        'data': line
    });

    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#ff0000',
            'line-width': 3
        }
    });
}

// Search functionality
const searchBox = document.getElementById('searchBox');
const searchBox2 = document.getElementById('searchBox2'); // Second input for distance mode
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
    const query1 = searchBox.value;
    const query2 = searchBox2.value;

    if (distanceMode && query1 && query2) {
        // Fetch the coordinates for both locations
        Promise.all([
            fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query1)}.json?access_token=${mapboxgl.accessToken}`)
                .then(response => response.json()),
            fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query2)}.json?access_token=${mapboxgl.accessToken}`)
                .then(response => response.json())
        ]).then(data => {
            const feature1 = data[0].features[0];
            const feature2 = data[1].features[0];

            if (feature1 && feature2) {
                const coords1 = feature1.geometry.coordinates;
                const coords2 = feature2.geometry.coordinates;

                // Calculate and display the distance
                const distance = calculateDistance(coords1, coords2);
                alert(`The distance between ${query1} and ${query2} is ${distance.toFixed(2)} km`);

                // Add red markers for both locations
                const redMarker1 = document.createElement('div');
                redMarker1.className = 'red-marker';
                new mapboxgl.Marker(redMarker1).setLngLat(coords1).addTo(map);

                const redMarker2 = document.createElement('div');
                redMarker2.className = 'red-marker';
                new mapboxgl.Marker(redMarker2).setLngLat(coords2).addTo(map);

                // Draw a line between the two locations
                drawLine(coords1, coords2);

                // Fit the map to show both markers
                const bounds = new mapboxgl.LngLatBounds();
                bounds.extend(coords1);
                bounds.extend(coords2);
                map.fitBounds(bounds, { padding: 50 });

            } else {
                alert('Could not find both locations');
            }
        }).catch(error => {
            console.error('Error fetching the Geocoding API:', error);
            alert('Error fetching locations');
        });
    } else if (query1) {
        // Normal location search
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query1)}.json?access_token=${mapboxgl.accessToken}`)
            .then(response => response.json())
            .then(data => {
                if (data.features && data.features.length > 0) {
                    const feature = data.features[0];
                    const coords = feature.geometry.coordinates;

                    // Fly to the location and add a red marker
                    map.flyTo({ center: coords, zoom: 12 });
                    
                    const redMarker = document.createElement('div');
                    redMarker.className = 'red-marker';
                    new mapboxgl.Marker(redMarker).setLngLat(coords).addTo(map);
                } else {
                    alert('No results found');
                }
            })
            .catch(error => {
                console.error('Error fetching the Geocoding API:', error);
                alert('Error fetching location');
            });
    }
});