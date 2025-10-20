import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

const myModelGlb = {
  path: "https://pub-8613fbc289aa403484fb17e13e7b0525.r2.dev/modelo_draco.glb",
  texturePath: "",
};
const myConfig = {
  myModelReference: null,
  autoRotate: true,
  rotationX: 0.0,
  rotationY: 0.005,
};

// Create a camera
const camera = createCamera();

// Create a renderer and add to id="myCanvas"
const canvas = document.getElementById("myCanvas");
const renderer = createRenderer(canvas);

// Add orbit controls to control the camera with mouse
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const scene = new THREE.Scene();

// Add a light to the scene
const light = addLights();
scene.add(light);

const ambient = addAmbientLights();
scene.add(ambient);

// CARGA GLB + DRACO
const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
dracoLoader.setDecoderConfig({ type: "wasm" });
dracoLoader.preload();
loader.setDRACOLoader(dracoLoader);

// --- loader.load callback revisado ---
loader.load(
  myModelGlb.path,
  (gltf) => {
    const model = gltf.scene || gltf.scenes?.[0];
    if (!model) {
      console.error("GLTF cargado sin escena.");
      return;
    }

    // root queda en (0,0,0) — lo usamos como referencia fija
    const root = new THREE.Group();
    root.name = "MODEL_ROOT";
    root.add(model);
    scene.add(root);

    // Calcula bounding box respecto al root (mundo)
    const box = new THREE.Box3().setFromObject(root);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    console.log("Bounding box raw:", box, "size:", size);

    if (maxDim === 0) {
      console.warn("Dimensiones 0 — revisa GLB/Draco.");
    } else {
      // Normaliza escala si hace falta
      const target = 1.0;
      const scale = target / maxDim;
      if (scale < 0.5 || scale > 2) {
        root.scale.setScalar(scale);
        // Recalcula box tras escala
        box.setFromObject(root);
      }
    }

    // --- CENTRADO CORRECTO: mueve el MODEL (no el root) para que su centro quede en 0,0,0 ---
    // Esto deja el root en 0,0,0 y simplifica cámaras/controles.
    const center = box.getCenter(new THREE.Vector3());
    console.log("Center before shift:", center);
    // mover el modelo (hijos) en sentido contrario al centro
    model.position.sub(center);

    // recalcular caja/centro tras ajustar la posición del model
    box.setFromObject(root);
    const newCenter = box.getCenter(new THREE.Vector3());
    console.log("New bounding box:", box, "new center:", newCenter);

    // helpers de depuración (quítalos cuando esté correcto)
    const axes = new THREE.AxesHelper(
      Math.max(size.x, size.y, size.z) * 1.5 || 1
    );
    scene.add(axes);
    const boxHelper = new THREE.Box3Helper(box, 0xffff00);
    scene.add(boxHelper);

    myConfig.myModelReference = root;

    // Ahora ajusta la cámara respecto al centro (que ahora debería ser 0,0,0)
    configureCameraLimits(root);

    // Asegura que la cámara mira al origen y que los controles usan el mismo target
    const target = new THREE.Vector3(0, 0, 0);
    controls.target.copy(target);
    camera.lookAt(target);
    controls.update();

    console.log(
      "Modelo añadido y centrado. Root pos:",
      root.position,
      "Model pos:",
      model.position
    );
  },
  (xhr) => {
    if (xhr.lengthComputable) {
      console.log(
        ((xhr.loaded / xhr.total) * 100).toFixed(1) +
          "% loaded " +
          myModelGlb.path
      );
    } else {
      console.log("Cargando GLB...");
    }
  },
  (err) => {
    console.error("Error loading GLB:", err);
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
  const dirLight = new THREE.DirectionalLight(0xffffff, 2);
  dirLight.position.set(5, 10, 7);
  dirLight.castShadow = true;
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
  hemiLight.position.set(0, 20, 0);
  const group = new THREE.Group();
  group.add(dirLight);
  group.add(hemiLight);
  return group;
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
