<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>California-2025 Map</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <style>
        #map { height: 100vh; width: 100vw; }
    </style>
</head>
<body>
    <div id="map"></div>
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="addresses.js"></script>
    <script>
        // Initialize map centered in California
        var map = L.map('map').setView([36.7783, -119.4179], 6);

        // Add OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        // Add markers from addresses.js
        addresses.forEach(function(addr) {
            var marker = L.marker(addr.coords).addTo(map);
            marker.bindPopup(
                `<strong>${addr.name}</strong><br>
                POC: ${addr.poc}<br>
                Phone: <a href="tel:${addr.phone}">${addr.phone}</a><br>
                Address: ${addr.address}`
            );
            marker.on('mouseover', function(e) {
                this.openPopup();
            });
            marker.on('mouseout', function(e) {
                this.closePopup();
            });
        });
    </script>
</body>
</html>
