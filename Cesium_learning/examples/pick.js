const viewer = new Cesium.Viewer("cesiumContainer", {
    terrainProvider: Cesium.createWorldTerrain(),
  });
  
  const scene = viewer.scene;
  const camera = scene.camera;
  
  let center = new Cesium.Cartesian3(
    1216389.3637977627,
    -4736323.641980423,
    4081321.7428341154
  );
  let modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(center);
  let hprRotation = Cesium.Matrix3.fromHeadingPitchRoll(
    new Cesium.HeadingPitchRoll(2.619728786416368, 0.0, 0.0)
  );
  let hpr = Cesium.Matrix4.fromRotationTranslation(
    hprRotation,
    new Cesium.Cartesian3(0.0, 0.0, -2.0)
  );
  Cesium.Matrix4.multiply(modelMatrix, hpr, modelMatrix);
  
  const buildingHighlight = scene.primitives.add(
    new Cesium.ClassificationPrimitive({
      geometryInstances: new Cesium.GeometryInstance({
        geometry: Cesium.BoxGeometry.fromDimensions({
          vertexFormat: Cesium.PerInstanceColorAppearance.VERTEX_FORMAT,
          dimensions: new Cesium.Cartesian3(8.0, 5.0, 8.0),
        }),
        modelMatrix: modelMatrix,
        attributes: {
          color: Cesium.ColorGeometryInstanceAttribute.fromColor(
            new Cesium.Color(1.0, 0.0, 0.0, 0.5)
          ),
          show: new Cesium.ShowGeometryInstanceAttribute(true),
        },
        id: "volume",
      }),
      classificationType: Cesium.ClassificationType.CESIUM_3D_TILE,
    })
  );
  
  center = new Cesium.Cartesian3(
    1216409.0189737265,
    -4736252.144235287,
    4081393.6027081604
  );
  modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(center);
  hprRotation = Cesium.Matrix3.fromHeadingPitchRoll(
    new Cesium.HeadingPitchRoll(5.785339046755887, 0.0, 0.0)
  );
  hpr = Cesium.Matrix4.fromRotationTranslation(
    hprRotation,
    new Cesium.Cartesian3(0.4, 0.0, -2.0)
  );
  Cesium.Matrix4.multiply(modelMatrix, hpr, modelMatrix);
  
  const treeHighlight1 = scene.primitives.add(
    new Cesium.ClassificationPrimitive({
      geometryInstances: new Cesium.GeometryInstance({
        geometry: new Cesium.EllipsoidGeometry({
          radii: new Cesium.Cartesian3(3.25, 5.0, 4.0),
        }),
        modelMatrix: modelMatrix,
        attributes: {
          color: Cesium.ColorGeometryInstanceAttribute.fromColor(
            Cesium.Color.fromCssColorString("#F26419").withAlpha(0.5)
          ),
          show: new Cesium.ShowGeometryInstanceAttribute(true),
        },
        id: "volume 1",
      }),
      classificationType: Cesium.ClassificationType.CESIUM_3D_TILE,
    })
  );
  
  center = new Cesium.Cartesian3(
    1216404.8844045496,
    -4736255.287065536,
    4081392.010192471
  );
  modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(center);
  hprRotation = Cesium.Matrix3.fromHeadingPitchRoll(
    new Cesium.HeadingPitchRoll(5.785339046755887, 0.0, 0.0)
  );
  hpr = Cesium.Matrix4.fromRotationTranslation(
    hprRotation,
    new Cesium.Cartesian3(-0.25, 0.0, -2.0)
  );
  Cesium.Matrix4.multiply(modelMatrix, hpr, modelMatrix);
  
  const treeHighlight2 = scene.primitives.add(
    new Cesium.ClassificationPrimitive({
      geometryInstances: new Cesium.GeometryInstance({
        geometry: new Cesium.EllipsoidGeometry({
          radii: new Cesium.Cartesian3(3.25, 5.0, 4.0),
        }),
        modelMatrix: modelMatrix,
        attributes: {
          color: Cesium.ColorGeometryInstanceAttribute.fromColor(
            Cesium.Color.fromCssColorString("#F03A47").withAlpha(0.5)
          ),
          show: new Cesium.ShowGeometryInstanceAttribute(true),
        },
        id: "volume 2",
      }),
      classificationType: Cesium.ClassificationType.CESIUM_3D_TILE,
    })
  );
  
  center = new Cesium.Cartesian3(
    1216398.813990024,
    -4736258.039875737,
    4081387.9562678365
  );
  modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(center);
  let translation = Cesium.Matrix4.fromTranslation(
    new Cesium.Cartesian3(0.0, 0.0, -2.0)
  );
  Cesium.Matrix4.multiply(modelMatrix, translation, modelMatrix);
  
  const treeHighlight3 = scene.primitives.add(
    new Cesium.ClassificationPrimitive({
      geometryInstances: new Cesium.GeometryInstance({
        geometry: new Cesium.EllipsoidGeometry({
          radii: new Cesium.Cartesian3(2.45, 2.45, 3.0),
        }),
        modelMatrix: modelMatrix,
        attributes: {
          color: Cesium.ColorGeometryInstanceAttribute.fromColor(
            Cesium.Color.fromCssColorString("#004FFF").withAlpha(0.5)
          ),
          show: new Cesium.ShowGeometryInstanceAttribute(true),
        },
        id: "volume 3",
      }),
      classificationType: Cesium.ClassificationType.CESIUM_3D_TILE,
    })
  );
  
  center = new Cesium.Cartesian3(
    1216393.6257790313,
    -4736259.809075361,
    4081384.4858198245
  );
  modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(center);
  translation = Cesium.Matrix4.fromTranslation(
    new Cesium.Cartesian3(0.0, 0.0, -1.0)
  );
  Cesium.Matrix4.multiply(modelMatrix, translation, modelMatrix);
  
  const treeHighlight4 = scene.primitives.add(
    new Cesium.ClassificationPrimitive({
      geometryInstances: new Cesium.GeometryInstance({
        geometry: new Cesium.SphereGeometry({
          radius: 2.0,
        }),
        modelMatrix: modelMatrix,
        attributes: {
          color: Cesium.ColorGeometryInstanceAttribute.fromColor(
            Cesium.Color.fromCssColorString("#55DDE0").withAlpha(0.5)
          ),
          show: new Cesium.ShowGeometryInstanceAttribute(true),
        },
        id: "volume 4",
      }),
      classificationType: Cesium.ClassificationType.CESIUM_3D_TILE,
    })
  );
  
  function highlightBuilding() {
    camera.setView({
      destination: new Cesium.Cartesian3(
        1216394.1392207467,
        -4736348.59346919,
        4081293.9160685353
      ),
      orientation: {
        heading: 0.018509338875732695,
        pitch: -0.09272999615872646,
      },
    });
  }
  
  function highlightTrees() {
    camera.setView({
      destination: new Cesium.Cartesian3(
        1216435.0352745096,
        -4736283.144192113,
        4081368.0920420634
      ),
      orientation: {
        heading: 5.718380792746039,
        pitch: -0.3087010195266797,
      },
    });
  }
  
  function invertClassification(checked) {
    if (checked && !scene.invertClassificationSupported) {
      window.alert("This browser does not support invert classification");
    }
  
    scene.invertClassification = checked;
    scene.invertClassificationColor = new Cesium.Color(
      0.25,
      0.25,
      0.25,
      1.0
    );
  
    buildingHighlight.getGeometryInstanceAttributes(
      "volume"
    ).show = Cesium.ShowGeometryInstanceAttribute.toValue(!checked);
    treeHighlight1.getGeometryInstanceAttributes(
      "volume 1"
    ).show = Cesium.ShowGeometryInstanceAttribute.toValue(!checked);
    treeHighlight2.getGeometryInstanceAttributes(
      "volume 2"
    ).show = Cesium.ShowGeometryInstanceAttribute.toValue(!checked);
    treeHighlight3.getGeometryInstanceAttributes(
      "volume 3"
    ).show = Cesium.ShowGeometryInstanceAttribute.toValue(!checked);
    treeHighlight4.getGeometryInstanceAttributes(
      "volume 4"
    ).show = Cesium.ShowGeometryInstanceAttribute.toValue(!checked);
  }
  
  function updateAlpha(value) {
    scene.invertClassificationColor.alpha = parseFloat(value);
  }
  
  const tileset = new Cesium.Cesium3DTileset({
    url: Cesium.IonResource.fromAssetId(40866),
  });
  scene.primitives.add(tileset);
  
  const viewModel = {
    inverted: viewer.scene.invertClassification,
    invertedAlpha: viewer.scene.invertClassificationColor.alpha,
    highlightBuilding: highlightBuilding,
    highlightTrees: highlightTrees,
  };
  Cesium.knockout.track(viewModel);
  const toolbar = document.getElementById("toolbar");
  Cesium.knockout.applyBindings(viewModel, toolbar);
  Cesium.knockout
    .getObservable(viewModel, "inverted")
    .subscribe(invertClassification);
  Cesium.knockout
    .getObservable(viewModel, "invertedAlpha")
    .subscribe(updateAlpha);
  
  highlightTrees();
  
  let currentObjectId;
  let currentPrimitive;
  let currentColor;
  let currentShow;
  let attributes;
  
  const handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
  handler.setInputAction(function (movement) {
    const pickedObject = scene.pick(movement.endPosition);
    if (Cesium.defined(pickedObject) && Cesium.defined(pickedObject.id)) {
      if (pickedObject.id === currentObjectId) {
        return;
      }
  
      if (Cesium.defined(currentObjectId)) {
        attributes = currentPrimitive.getGeometryInstanceAttributes(
          currentObjectId
        );
        attributes.color = currentColor;
        attributes.show = currentShow;
        currentObjectId = undefined;
        currentPrimitive = undefined;
        currentColor = undefined;
        currentShow = undefined;
      }
    }
  
    if (
      Cesium.defined(pickedObject) &&
      Cesium.defined(pickedObject.primitive) &&
      Cesium.defined(pickedObject.id) &&
      Cesium.defined(pickedObject.primitive.getGeometryInstanceAttributes)
    ) {
      currentObjectId = pickedObject.id;
      currentPrimitive = pickedObject.primitive;
      attributes = currentPrimitive.getGeometryInstanceAttributes(
        currentObjectId
      );
      currentColor = attributes.color;
      currentShow = attributes.show;
      if (!scene.invertClassification) {
        attributes.color = [255, 0, 255, 128];
      }
      attributes.show = [1];
    } else if (Cesium.defined(currentObjectId)) {
      attributes = currentPrimitive.getGeometryInstanceAttributes(
        currentObjectId
      );
      attributes.color = currentColor;
      attributes.show = currentShow;
      currentObjectId = undefined;
      currentPrimitive = undefined;
      currentColor = undefined;
    }
  }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
  