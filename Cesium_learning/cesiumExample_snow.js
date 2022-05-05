

const viewer = new Cesium.Viewer("cesiumContainer", {
    shouldAnimate: true,
    terrainProvider: Cesium.createWorldTerrain(),
});
const scene = viewer.scene;
scene.globe.depthTestAgainstTerrain = true;
// rain
const rainParticleSize = 15.0;
const rainRadius = 100000.0;
const rainImageSize = new Cesium.Cartesian2(
    rainParticleSize,
    rainParticleSize * 2.0
);
let rainGravityScratch = new Cesium.Cartesian3();
const rainUpdate = function (particle, dt) {
    rainGravityScratch = Cesium.Cartesian3.normalize(
        particle.position,
        rainGravityScratch
    );
    rainGravityScratch = Cesium.Cartesian3.multiplyByScalar(
        rainGravityScratch,
        -1050.0,
        rainGravityScratch
    );

    particle.position = Cesium.Cartesian3.add(
        particle.position,
        rainGravityScratch,
        particle.position
    );

    const distance = Cesium.Cartesian3.distance(
        scene.camera.position,
        particle.position
    );
    if (distance > rainRadius) {
        particle.endColor.alpha = 0.0;
    } else {
        particle.endColor.alpha =
            Cesium.Color.BLUE.alpha / (distance / rainRadius + 0.1);
    }
};

let rainParticle;

// drop down
function rain_particle_init(position) {
    rainParticle = scene.primitives.add(
        new Cesium.ParticleSystem({
            modelMatrix: new Cesium.Matrix4.fromTranslation(
                position
            ),
            speed: -1.0,
            lifetime: 15.0,
            emitter: new Cesium.SphereEmitter(rainRadius),
            startScale: 1.0,
            endScale: 0.0,
            image: "../SampleData/circular_particle.png",
            emissionRate: 9000.0,
            startColor: new Cesium.Color(0.27, 0.5, 0.7, 0.0),
            endColor: new Cesium.Color(0.27, 0.5, 0.7, 0.98),
            imageSize: rainImageSize,
            updateCallback: rainUpdate,
        })
    );

    scene.skyAtmosphere.hueShift = -0.97;
    scene.skyAtmosphere.saturationShift = 0.25;
    scene.skyAtmosphere.brightnessShift = -0.4;
    scene.fog.density = 0.00025;
    scene.fog.minimumBrightness = 0.01;
}

function rain_particle_update(position) {
    console.log(rainParticle);
    console.log('particle position:',rainParticle.modelMatrix);
    rainParticle.modelMatrix = new Cesium.Matrix4.fromTranslation(
                position);
          
}
    
rain_particle_init(viewer.camera.position)

viewer.camera.changed.addEventListener(function() {
    var deg = Math.round( Cesium.Math.toDegrees(viewer.camera.heading))
    console.log('Heading:', deg);
  
    var deg = Math.round( Cesium.Math.toDegrees(viewer.camera.pitch))
    console.log('Pitch:', deg);

    console.log('camera position:',viewer.camera.position);

    rain_particle_update(viewer.camera.position)
})
