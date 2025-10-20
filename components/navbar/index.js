const desktopDOM = document.getElementById("navbar");
const mobileDOM = document.getElementById("mobile-menu");
const backgroundDOM = document.getElementById("background-navbar");

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

  backgroundDOM.style.opacity = "1";
  backgroundDOM.style.display = "block";
  backgroundDOM.style.transformStyle = "preserve-3d";
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

  backgroundDOM.style.opacity = "0";
  backgroundDOM.style.display = "none";
  backgroundDOM.style.transformStyle = "preserve-3d";
}

const langsDOM = document.getElementById("dropdown-langs");

function showLangs() {
  langsDOM.style.display = "flex";

  // Listener para cerrar al clicar fuera
  const clickOutsideBtn = (e) => {
    if (!langsDOM.contains(e.target) && e.target !== langsDOM) {
      hideLangs();
      document.removeEventListener("click", clickOutsideBtn);
    }
  };

  setTimeout(() => {
    document.addEventListener("click", clickOutsideBtn);
  }, 0);
}

function hideLangs() {
  langsDOM.style.display = "none";
}

const umbralPorcentaje = 5; // Porcentaje del scroll total
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; // Scroll en píxeles
  const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
  const porcentaje = (scrollY / scrollMax) * 100;

  if (porcentaje > umbralPorcentaje) {
    desktopDOM.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  } else {
    desktopDOM.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
});

const links = document.querySelectorAll('a[href="/sponsors"]');

links.forEach((link) => {
  link.style.display = "none";
});
