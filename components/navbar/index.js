const mobileDOM = document.getElementById("mobile-menu");
const desktopDOM = document.getElementById("navbar");

function showMobileMenu() {
  mobileDOM.style.opacity = "1";
  mobileDOM.style.transform = `
  translate3d(0px, 0px, 0px)
  scale3d(1, 1, 1)
  rotateX(0deg)
  rotateY(0deg)
  rotateZ(0deg)
  skew(0deg, 0deg)
`;
  mobileDOM.style.display = "flex";
  mobileDOM.style.transformStyle = "preserve-3d";
}

function hideMobileMenu() {
  mobileDOM.style.opacity = "0";
  mobileDOM.style.transform = `
  translate3d(100%, 0px, 0px)
  scale3d(1, 1, 1)
  rotateX(0deg)
  rotateY(0deg)
  rotateZ(0deg)
  skew(0deg, 0deg)
`;
  mobileDOM.style.display = "hide";
  mobileDOM.style.transformStyle = "preserve-3d";
}

const umbralPorcentaje = 5; // Porcentaje del scroll total

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; // Scroll en píxeles
  const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
  const porcentaje = (scrollY / scrollMax) * 100;
  console.log(porcentaje > umbralPorcentaje, porcentaje, umbralPorcentaje);

  if (porcentaje > umbralPorcentaje) {
    desktopDOM.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    console.log(desktopDOM);
    
  } else {
    desktopDOM.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
});
