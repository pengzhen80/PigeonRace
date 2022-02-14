const viewer = new Cesium.Viewer("cesiumContainer", {
    shouldAnimate: true,
});

const czmlPath = "./SampleData/";
let vehicleEntity;

// Add a blank CzmlDataSource to hold our multi-part entity/entities.
const dataSource = new Cesium.CzmlDataSource();
viewer.dataSources.add(dataSource);

// This demo shows how a single path can be broken up into several CZML streams.
const partsToLoad = [
    {
        url: "MultipartVehicle_part1.czml",
        range: [0, 1500],
        requested: false,
        loaded: false,
    },
];

// Helper function to mark a part as requested, and process it into the dataSource.
function processPart(part) {
    part.requested = true;
    dataSource.process(czmlPath + part.url).then(function () {
        part.loaded = true;

        // Follow the vehicle with the camera.
        if (!viewer.trackedEntity) {
            viewer.trackedEntity = vehicleEntity = dataSource.entities.getById(
                "Vehicle"
            );
        }
    });
}

// Load the first part up front.
processPart(partsToLoad[0]);



