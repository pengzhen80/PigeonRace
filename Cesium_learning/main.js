console.log("import success");

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmNzAyMWZhNS02MTk3LTRjYjYtOGMwYi1kOGEzYzg5ZmMxMjgiLCJpZCI6Nzg0MDUsImlhdCI6MTY0MjU3NzYyM30.ir47ZDuE5O8TYRJmEUeUgtHohabYGEUbO7HCJe8qjrI';
// Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
const viewer = new Cesium.Viewer('cesiumContainer', {
  terrainProvider: Cesium.createWorldTerrain()
});
// Add Cesium OSM Buildings, a global 3D buildings layer.
const osmBuildings = viewer.scene.primitives.add(Cesium.createOsmBuildings());

// These are all the radar points from this flight.
var gxpParser = new GpxParser(showData);
function showData(flightData) {
  // console.log(typeof flightData);
  // flightData = MakeFeatures(flightData);
  // flightData = flightData.slice(0,1300);
  console.log(flightData.length);
  // const timeStepInSeconds = 30;//time(/s) between point one to point two 
  // const totalSeconds = timeStepInSeconds * (flightData.length - 1);
  // const start = Cesium.JulianDate.fromIso8601("2020-03-09T23:10:00Z");
  // '2021-12-03T23:11:59Z'
  // const stop = Cesium.JulianDate.addSeconds(start, totalSeconds, new Cesium.JulianDate());
  // console.log(flightData[0].latitude);
  console.log(flightData[0].time);
  // var time = "2020-03-09T23:10:00Z";
  // const time_str = flightData[0].time;
  // console.log(time_str);
  // const start = Cesium.JulianDate.fromIso8601(String("2020-03-09T23:10:00Z"));
  // const start = Cesium.JulianDate.fromIso8601(time);
  // const start = Cesium.JulianDate.fromIso8601(time_str);
  // console.log(flightData[flightData.length-1].time);
  if("2020-03-09T23:10:00Z".constructor === flightData[0].time.constructor)
  {
    console.log("rediculus");
  }
  console.log(typeof flightData[0].time);
  console.log(typeof(flightData[0].time)); 
  console.log(flightData[0].time.length);
  // const start = Cesium.JulianDate.fromIso8601(flightData[0].time);
  const start = Cesium.JulianDate.fromIso8601("2020-03-09T23:10:00Z");
  const stop = Cesium.JulianDate.fromIso8601(flightData[flightData.length-1].time);
  viewer.clock.startTime = start.clone();
  viewer.clock.stopTime = stop.clone();
  viewer.clock.currentTime = start.clone();
  viewer.timeline.zoomTo(start, stop);
  // Speed up the playback speed 50x.
  viewer.clock.multiplier = 1;
  // Start playing the scene.
  viewer.clock.shouldAnimate = true;

  // The SampledPositionedProperty stores the position and timestamp for each sample along the radar sample series.
  const positionProperty = new Cesium.SampledPositionProperty();

  // Create a point for each.
  for (let i = 0; i < flightData.length; i++) {
    // console.log(i);
    const dataPoint = flightData[i];

    // Declare the time for this individual sample and store it in a new JulianDate instance.
    // console.log("distance is :",flightData[i].distance);
    // var tmp_time_step = 2;
    // if (i < flightData.length - 1) {
    //   if (flightData[i + 1].distance > 1000) {
    //     console.log(flightData[i + 1].distance);
    //     tmp_time_step = 100;
    //   }
    // }

    // const time = Cesium.JulianDate.addSeconds(start, i * timeStepInSeconds * tmp_time_step, new Cesium.JulianDate());
    var time_date = new Date(flightData[i].time);
    // const time = Cesium.JulianDate.fromIso8601(flightData[i].time);
    const time = Cesium.JulianDate.fromDate(time_date);
    const position = Cesium.Cartesian3.fromDegrees(dataPoint.longitude, dataPoint.latitude, dataPoint.elevation);
    // Store the position along with its timestamp.
    // Here we add the positions all upfront, but these can be added at run-time as samples are received from a server.
    positionProperty.addSample(time, position);

    viewer.entities.add({
      description: `Location: (${dataPoint.longitude}, ${dataPoint.latitude}, ${dataPoint.elevation})`,
      position: position,
      point: { pixelSize: 10, color: Cesium.Color.RED }
    });

    // STEP 6 CODE (airplane entity)
    async function loadModel() {
      // Load the glTF model from Cesium ion.
      const airplaneUri = await Cesium.IonResource.fromAssetId(768016);
      const airplaneEntity = viewer.entities.add({
        availability: new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({ start: start, stop: stop })]),
        position: positionProperty,
        // Attach the 3D model instead of the green point.
        model: { uri: airplaneUri },
        // Automatically compute the orientation from the position.
        orientation: new Cesium.VelocityOrientationProperty(positionProperty),
        path: new Cesium.PathGraphics({ width: 3 })
      });

      viewer.trackedEntity = airplaneEntity;
    }

    loadModel();
  }
}

function MakeFeatures(features) {
  var result = [];
  for (var i = 0; i < features.length; i++) {
    if (i < features.length - 2) {
      if (features[i].distance > 1000) {
        var fakePoints = ADDFakeFeatures(features[i], features[i + 1], features[i].distance / 200);
        // console.log(fakePoints.length);
        result = result.concat(fakePoints);
      }
      else {
        var point = {};
        point['latitude'] = features[i].latitude;
        point['longitude'] = features[i].longitude;
        point['elevation'] = features[i].elevation;
        point['heading'] = features[i].heading;
        point['flag'] = true;
        result.push(point);
      }
    }
    else {
      var point = {};
      point['latitude'] = features[i].latitude;
      point['longitude'] = features[i].longitude;
      point['elevation'] = features[i].elevation;
      point['heading'] = features[i].heading;
      point['flag'] = true;
      result.push(point);
    }
  }
  console.log("fake point len is ", result.length);
  return result;
}

function ADDFakeFeatures(feature_start, feature_end, number) {
  var points = [];
  var point = {};
  point['latitude'] = feature_start.latitude;
  // console.log("true",point['latitude']);
  point['longitude'] = feature_start.longitude;
  point['elevation'] = feature_start.elevation;
  point['heading'] = feature_start.heading;
  point['flag'] = true;
  points.push(point);


  var seg_lat = (feature_end.latitude - feature_start.latitude) / number;
  var seg_lon = (feature_end.longitude - feature_start.longitude) / number;
  var seg_ele = (feature_end.elevation - feature_start.elevation) / number;
  for (var i = 1; i < number - 1; i++) {
    point['latitude'] = feature_start.latitude + seg_lat * i;
    point['longitude'] = feature_start.longitude + seg_lon * i;
    point['elevation'] = feature_start.elevation + seg_ele * i;
    point['heading'] = feature_start.heading;
    point['flag'] = false;
    points.push(point);
    // console.log("false",point['latitude']);
  }
  point['latitude'] = feature_end.latitude;
  point['longitude'] = feature_end.longitude;
  point['elevation'] = feature_end.elevation;
  point['heading'] = feature_end.heading;
  point['flag'] = true;
  points.push(point);
  return points;
}



// class LoadAnimate{
//     constructor()
//     {
//         this._Initialize();
//     }
//     _Initialize()
//     {
//     }
// }
// let _APP = null;

// window.addEventListener('DOMContentLoaded',()=>{
//     _APP = new LoadAnimate();
// });
