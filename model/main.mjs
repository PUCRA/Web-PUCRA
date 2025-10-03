import * as THREE from "three";
// Import the FBXLoader for .fbx files
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const myModelFbx = {
  // https://free3d.com/3d-models/fbx
  path: "./models/cottage_fbx.fbx",
  texturePath: "./textures/cottage_diffuse.png",
};

const myConfig = {
  myModelReference: null,
  autoRotate: true,
  rotationX: 0.00,
  rotationY: 0.005,
};

// Create a camera
const camera = createCamera();

// Create a renderer and add to id="myCanvas"
const canvas = document.getElementById("myCanvas");
const renderer = createRenderer(canvas);
renderer.setAnimationLoop(animate);

// Add orbit controls to control the camera with mouse
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const scene = new THREE.Scene();

// Add a light to the scene
const light = addLights();
scene.add(light);

const ambient = addAmbientLights();
scene.add(ambient);

// Import the FBXLoader for .fbx files
const pathModelFBX = myModelFbx.path;
const fbxLoader = new FBXLoader();
fbxLoader.load(
  myModelFbx.path,
  (object) => {
    object.scale.set(0.01, 0.01, 0.01);

    if (myModelFbx.texturePath !== "") {
      object = addTexture(object);
    }
    scene.add(object);

    myConfig.myModelReference = object;

    // Calcular bounding box
    controls = configureCameraLimits(object);
    controls.update();
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded " + pathModelFBX);
  },
  (error) => {
    console.log(error);
  }
);

function configureCameraLimits(object) {
  const box = new THREE.Box3().setFromObject(object);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());

  // Center the object at the origin (optional)
  object.position.sub(center);

  // Place the camera according to the size of the object
  const maxDim = Math.max(size.x, size.y, size.z);
  const fov = camera.fov * (Math.PI / 180);
  let cameraZ = maxDim / (2 * Math.tan(fov / 2));

  camera.position.set(0, 0, cameraZ * 2);
  camera.lookAt(0, 0, 0);

  // set orbit controls to center of model
  controls.target.set(0, 0, 0);
  controls.minDistance = cameraZ * 0.5; // max zoom in
  controls.maxDistance = cameraZ * 3; // max zoom out
  return controls;
}

function addTexture(object) {
  // Add texture to the model
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(myModelFbx.texturePath);
  // Apply texture to all child meshes
  object.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture;
      child.material.needsUpdate = true;
    }
  });
  return object;
}

function animate() {
  if (myConfig.myModelReference && myConfig.autoRotate) {
    myConfig.myModelReference.rotation.y += myConfig.rotationY;
    myConfig.myModelReference.rotation.x += myConfig.rotationX;
  }

  // Rotate the model for some basic animation
  controls.update();
  renderer.render(scene, camera);
}

function createRenderer() {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0); // transparent background
  renderer.setAnimationLoop(animate);
  return renderer;
}

function createCamera() {
  const mCamera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  return mCamera;
}

function addLights() {
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 10, 5);
  return light;
}

function addAmbientLights() {
  const ambient = new THREE.AmbientLight(0x404040, 1);
  return ambient;
}

function toggleRotation(event) {
  myConfig.autoRotate = !myConfig.autoRotate;
  event.target.innerText = myConfig.autoRotate ? "PAUSE" : "PLAY";
}
// Expose the toggleRotation function to the global scope
window.toggleRotation = toggleRotation;
