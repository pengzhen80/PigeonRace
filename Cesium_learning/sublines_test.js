console.log("import success");

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNzAyMWZhNS02MTk3LTRjYjYtOGMwYi1kOGEzYzg5ZmMxMjgiLCJpZCI6Nzg0MDUsImlhdCI6MTY0MjU3NzYyM30.ir47ZDuE5O8TYRJmEUeUgtHohabYGEUbO7HCJe8qjrI';
// Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain()
});
//track entity changes
function onChanged(collection, added, removed, changed) {
    var msg = 'Added ids';
    for (var i = 0; i < added.length; i++) {
        msg += '\n' + added[i].id;
    }
    console.log(msg);
}
viewer.entities.collectionChanged.addEventListener(onChanged);

//add mouse event listener
var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handler.setInputAction(function (click) {
    console.log('Left click event:', click.position);
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

handler.setInputAction(function (wheelment) {
    console.log('wheel event:', wheelment);
}, Cesium.ScreenSpaceEventType.WHEEL);

handler.setInputAction(function (click) {
    console.log('Left button press event:', click.position);
}, Cesium.ScreenSpaceEventType.LEFT_DOWN);

// handler.setInputAction(function(click){
//     console.log('Left button up event:',click.position);     
// },Cesium.ScreenSpaceEventType.LEFT_UP);

// handler.setInputAction(function(movement){
//     console.log('Movement event:',movement.endPosition);     
// },Cesium.ScreenSpaceEventType.MOUSE_MOVE);

// Add Cesium OSM Buildings, a global 3D buildings layer.
const osmBuildings = viewer.scene.primitives.add(Cesium.createOsmBuildings());

// These are all the radar points from this flight.
var gxpParser = new GpxParser(showData);
function showData(flightData) {
    var tmp_flightData = flightData;
    console.log(tmp_flightData[0].length);
    console.log(tmp_flightData[1].length);
    flightData = flightData[0];
    console.log(flightData.length);
    tmp_flightData.shift();
    var sublines = tmp_flightData;
    console.log(sublines.length);
    //remove near points
    flightData = flightData_singleNearPoints(flightData);
    for(var i = 0;i<sublines.length;i++)
    {
        sublines[i] = flightData_singleNearPoints(sublines[i]);
    }

    var time_GregorianDate = timeToGregorianDate(flightData[0].time);
    const start = Cesium.JulianDate.fromGregorianDate(new Cesium.GregorianDate(time_GregorianDate.year,
        time_GregorianDate.month, time_GregorianDate.day, time_GregorianDate.hour, time_GregorianDate.minute,
        time_GregorianDate.second, 0, false));
    var time_GregorianDate_stop = timeToGregorianDate(flightData[flightData.length - 1].time);
    const stop = Cesium.JulianDate.fromGregorianDate(new Cesium.GregorianDate(time_GregorianDate_stop.year,
        time_GregorianDate_stop.month, time_GregorianDate_stop.day, time_GregorianDate_stop.hour, time_GregorianDate_stop.minute,
        time_GregorianDate_stop.second, 0, false));
    viewer.clock.startTime = start.clone();
    viewer.clock.stopTime = stop.clone();
    viewer.clock.currentTime = start.clone();
    viewer.timeline.zoomTo(start, stop);
    // Speed up the playback speed 50x.
    viewer.clock.multiplier = 100;
    // Start playing the scene.
    viewer.clock.shouldAnimate = true;

    // The SampledPositionedProperty stores the position and timestamp for each sample along the radar sample series.
    const positionProperty = new Cesium.SampledPositionProperty();

    // Create a point for each.
    for (let i = 0; i < flightData.length; i++) {
        // for (let i = 0; i < 2; i++) {
        // console.log(i);
        const dataPoint = flightData[i];

        var time_GregorianDate = timeToGregorianDate(flightData[i].time);
        const time = Cesium.JulianDate.fromGregorianDate(new Cesium.GregorianDate(time_GregorianDate.year,
            time_GregorianDate.month, time_GregorianDate.day, time_GregorianDate.hour, time_GregorianDate.minute,
            time_GregorianDate.second, 0, false));
        // console.log(i,Cesium.JulianDate.toDate(time));
        const position = Cesium.Cartesian3.fromDegrees(dataPoint.longitude, dataPoint.latitude, dataPoint.elevation);
        // Store the position along with its timestamp.
        // Here we add the positions all upfront, but thesat run-time ase can be added  samples are received from a server.
        positionProperty.addSample(time, position);
        console.log("add point", i);
        viewer.entities.add({
            description: `Location: (${dataPoint.longitude}, ${dataPoint.latitude}, ${dataPoint.elevation})`,
            position: position,
            point: { pixelSize: 10, color: Cesium.Color.RED }
        });

        // var entity_collection = [];
        // STEP 6 CODE (airplane entity)
        async function loadModel() {

            // Load the glTF model from Cesium ion.
            const airplaneUri = await Cesium.IonResource.fromAssetId(780866);
            const airplaneEntity = viewer.entities.add({
                availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({ start: start, stop: stop })]),
                position: positionProperty,
                // Attach the 3D model instead of the green point.
                model: { uri: airplaneUri, scale: 1000.0 },
                // Automatically compute the orientation from the position.
                orientation: new Cesium.VelocityOrientationProperty(positionProperty),
                path: new Cesium.PathGraphics({ width: 3 }),
                viewFrom: new Cesium.Cartesian3(2080*2, 1715, 7790*2),
            });
            console.log("add model", i);
            // entity_collection.push(airplaneEntity);
            viewer.trackedEntity = airplaneEntity;
            // if (i == flightData.length - 1) {
            //     callback(entity_collection);
            // }
        }
        loadModel();
        // loadModel(camera_moveAfterThreeSeconds);
        // var evt = document.createEvent('MouseEvents');
        // evt.initEvent('wheel', true, true);
        // evt.deltaY = 106;
        // var flag_wheelEvt = false;
        // function camera_moveAfterThreeSeconds(entity_collection) {
        //     for (var j = 0; j < entity_collection.length; j++) {
        //         viewer.trackedEntity = entity_collection[j];
        //     }
        //     setTimeout(() => {
        //         for (var j = 0; j < 20; j++) {
        //             viewer.scene.canvas.dispatchEvent(evt);
        //         }
        //     }, 1000);
        // }
    }


    // Create a point for sublines.
    console.log("add sublines");
    // let positionProperty_sublines_collection = [];
    for (let i = 0; i < sublines.length; i++) {
        let positionProperty_sublines = new Cesium.SampledPositionProperty();
        for (let j = 0; j < sublines[i].length;j++) {
            // for (let i = 0; i < 2; i++) {
            // console.log(i);
            const dataPoint = sublines[i][j];

            var time_GregorianDate = timeToGregorianDate(dataPoint.time);
            const time = Cesium.JulianDate.fromGregorianDate(new Cesium.GregorianDate(time_GregorianDate.year,
                time_GregorianDate.month, time_GregorianDate.day, time_GregorianDate.hour, time_GregorianDate.minute,
                time_GregorianDate.second, 0, false));
            // console.log(i,Cesium.JulianDate.toDate(time));
            const position = Cesium.Cartesian3.fromDegrees(dataPoint.longitude, dataPoint.latitude, dataPoint.elevation);
            // Store the position along with its timestamp.
            // Here we add the positions all upfront, but thesat run-time ase can be added  samples are received from a server.
            positionProperty_sublines.addSample(time, position);
            console.log("add point", i,":",j);
            viewer.entities.add({
                description: `Location: (${dataPoint.longitude}, ${dataPoint.latitude}, ${dataPoint.elevation})`,
                position: position,
                point: { pixelSize: 10, color: Cesium.Color.RED }
            });
            // STEP 6 CODE (airplane entity)
            async function loadModel() {

                // Load the glTF model from Cesium ion.
                const airplaneUri = await Cesium.IonResource.fromAssetId(780866);
                const airplaneEntity = viewer.entities.add({
                    availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({ start: start, stop: stop })]),
                    position: positionProperty_sublines,
                    // Attach the 3D model instead of the green point.
                    model: { uri: airplaneUri, scale: 1000.0 },
                    // Automatically compute the orientation from the position.
                    orientation: new Cesium.VelocityOrientationProperty(positionProperty_sublines),
                    path: new Cesium.PathGraphics({ width: 3 })
                });
                // console.log("add model", i);
                // viewer.trackedEntity = airplaneEntity;
            }
            loadModel();
        }
    }
}

function timeToGregorianDate(time) {
    //sample : time is "2020-03-09T23:10:00Z"
    //step1: split time to : year,month,day,hour,minute,second,millisecond,isLeapSecond
    //step2: store in a dict and return;
    var result = {};
    var splitTimeByDateAndTime = time.split('T');
    //split year,month,day
    result['year'] = Number(splitTimeByDateAndTime[0].split('-')[0].slice(2));
    // console.log(splitTimeByDateAndTime[0].split('-')[0].length);
    // console.log(splitTimeByDateAndTime[0].split('-')[0].slice(2));
    // console.log(Number(splitTimeByDateAndTime[0].split('-')[0].slice(2)));
    result['month'] = Number(splitTimeByDateAndTime[0].split('-')[1]);
    // console.log(splitTimeByDateAndTime[0].split('-')[1].length);
    result['day'] = Number(splitTimeByDateAndTime[0].split('-')[2]);
    //split hour,minute,second
    result['hour'] = Number(splitTimeByDateAndTime[1].split(":")[0]);
    result['minute'] = Number(splitTimeByDateAndTime[1].split(":")[1]);
    result['second'] = Number(splitTimeByDateAndTime[1].split(":")[2].split('Z')[0]);

    // console.log(result['year'],result['month'],result['day'],result['hour'],result['minute'],result['second']);
    return result;
}
//remove near points
function flightData_singleNearPoints(flightData) {
    for (var i = 0; i < flightData.length;) {
        // console.log(i,flightData[i].distance);
        if (flightData[i].distance < 1000) {
            flightData.splice(i, 1);
            // console.log("remove",i);        
        }
        else {
            i++;
        }
    }
    // console.log(flightData.length);
    return flightData;
}
