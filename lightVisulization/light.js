// Load light model
const light = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(106.776,  10.762),

    model: {
        uri: "../data/model/light/light.glb",
    },
});

// flye to light model
viewer.flyTo(light);


// Visulize light bright

// global variable
let light_position = {
    "longitude": 106.776,
    "latitude": 10.762,
    "height" : 12,
}

let clock_direct = {
    range: 30,
    min : 90,
}


let cone_direct = {
    range: 30,
    min : 120,
} 

let radii = {
    "x": 10,
    "y": 10,
    "z": 20,
}

let light_bright = viewer.entities.add({
    name: "light_bright",
    position: Cesium.Cartesian3.fromDegrees(light_position.longitude,  light_position.latitude, light_position.height),
    orientation: Cesium.Transforms.headingPitchRollQuaternion(
        Cesium.Cartesian3.fromDegrees(light_position.longitude, light_position.latitude, light_position.height),
        new Cesium.HeadingPitchRoll(Cesium.Math.PI / 1, 0, 0.0)
        ),
    ellipsoid: {
        radii: new Cesium.Cartesian3(radii.x, radii.y, radii.z),
        innerRadii: new Cesium.Cartesian3(0.05, 0.05, 0.05),
        minimumClock: Cesium.Math.toRadians(clock_direct.min),
        maximumClock: Cesium.Math.toRadians(clock_direct.min + clock_direct.range),
        minimumCone: Cesium.Math.toRadians(cone_direct.min),
        maximumCone: Cesium.Math.toRadians(cone_direct.range + cone_direct.min),
        material: Cesium.Color.YELLOW.withAlpha(0.4),
    },
});

function update_parameter_for_model(ellipsoid_model){
    ellipsoid_model.ellipsoid.radii = new Cesium.Cartesian3(radii.x, radii.y, radii.z);
    ellipsoid_model.ellipsoid.minimumClock = Cesium.Math.toRadians(clock_direct.min);
    ellipsoid_model.ellipsoid.maximumClock = Cesium.Math.toRadians(clock_direct.min + clock_direct.range);
    ellipsoid_model.ellipsoid.minimumCone = Cesium.Math.toRadians(cone_direct.min);
    ellipsoid_model.ellipsoid.maximumCone = Cesium.Math.toRadians(cone_direct.range + cone_direct.min);
}

