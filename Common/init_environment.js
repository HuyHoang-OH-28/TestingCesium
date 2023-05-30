  // Init Cesium Ion
  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiYjJmMDA2NC0yY2YyLTRkOGEtOGVmYi03YmNmZmE1NzcyY2MiLCJpZCI6ODk3NzUsImlhdCI6MTY0OTkyNTEwMX0.VPFCxddX_V2UKjOJeqJszZ25c9z4HA2BSYimPLYrbWo';

  // Create viewer
  let viewer = new Cesium.Viewer('cesiumContainer', {
     
      baseLayerPicker: true, //  type map
      vrButton: false,
      geocoder: false,
      navigationHelpButton: false,
      selectionIndicator: true,
      shadows: false,
      timeline: false,
      sceneModePicker: false, // type show map
      animation: true,
      skyAtmosphere : false
  });
  

  
  viewer.scene.globe.depthTestAgainstTerrain = true;

  // Set up Camera
  const HCM_latitude = 10.762;
  const HCM_longitude = 106.776;
  const HCM_height = 29000;
