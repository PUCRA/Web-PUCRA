import * as THREE from "three";
// Import the FBXLoader for .fbx files
import { FBXLoader } from "https://unpkg.com/three@0.180.0/examples/jsm/loaders/FBXLoader.js";
import { OrbitControls } from "https://unpkg.com/three@0.180.0/examples/jsm/controls/OrbitControls.js";

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
const light = addLights(scene);
scene.add(light);

// Import the FBXLoader for .fbx files
const pathModelFBX = "./models/cottage_fbx.fbx";
const fbxLoader = new FBXLoader();
fbxLoader.load(
  pathModelFBX,
  (object) => {
    object.scale.set(0.01, 0.01, 0.01);
    scene.add(object);

    // Calcular bounding box
    const box = new THREE.Box3().setFromObject(object);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    // Centrar el modelo en el origen (opcional, pero suele ir bien)
    object.position.sub(center);

    // Colocar la cámara según el tamaño del objeto
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180); // en radianes
    let cameraZ = maxDim / (2 * Math.tan(fov / 2));

    camera.position.set(0, 0, cameraZ * 2);
    camera.lookAt(0, 0, 0);

    // set orbit controls to center of model

    controls.target.set(0, 0, 0);

    controls.minDistance = cameraZ * 0.5; // max zoom in
    controls.maxDistance = cameraZ * 3; // max zoom out

    controls.update();
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded " + pathModelFBX);
  },
  (error) => {
    console.log(error);
  }
);

function animate() {
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

function addLights(mScene) {
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 10, 5);
  mScene.add(light);

  const ambient = new THREE.AmbientLight(0x404040, 1);
  mScene.add(ambient);
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

function centerAndScaleModel(object, scale = 0.01) {}
