const options = {
    // Required: API key
    key: 'SpQ9lG1cm8zd0VFmrgk1FBYRMWd4F8Gk', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: 50.4,
    lon: 14.3,
    zoom: 10,
    // layers: [
    //     L.tileLayer('http://b.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //       minZoom: 12,
    //       maxZoom: 17,
    //       attribution: 'Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, '
    //     })
    // ]
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    L.popup()
        .setLatLng([50.4, 14.3])
        .setContent('Hello World')
        .openOn(map);
    
    L.polyline([[50.4, 14.3],[50.4, 14.0]]).addTo(map);
});
