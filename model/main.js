import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

let zoomxyz = { x: 0, y: 0, z: 0 };
let zoomPressed = false;

// Create a renderer and add to id="myCanvas"
const canvas = document.getElementById("myCanvas");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);

// Create a cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  if (zoomPressed) {
    camera.position.x += zoomxyz.x;
    camera.position.y += zoomxyz.y;
    camera.position.z += zoomxyz.z;
  }
  renderer.render(scene, camera);
}

const moveObj = document.getElementsByClassName("moveObj");
//Afegim els event listeners a tots els botons
for (let i = 0; i < moveObj.length; i++) {
  moveObj[i].addEventListener("mouseup", () => {
    zoomPressed = false;
  });
  moveObj[i].addEventListener("mousedown", () => {
    let x = moveObj[i].getAttribute("data-x");
    let y = moveObj[i].getAttribute("data-y");
    let z = moveObj[i].getAttribute("data-z");
    moveCamera(x, y, z);
  });
}

function moveCamera(x, y, z) {
  let speedCamera = 0.03;
  //Controlem la velocitat de camera
  zoomxyz.x = x * speedCamera;
  zoomxyz.y = y * speedCamera;
  zoomxyz.z = z * speedCamera;
  //S'executa mentre 'zoomPressed'' es true
  zoomPressed = true;
}
