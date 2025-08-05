
function changeLanguageHome(lang) {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  fillContentAbout();
}

const mobileMenuNavbar = document.getElementById("mobile-menu-navbar");

function showMobileMenu() {
  mobileMenuNavbar.style.opacity = "1";
  mobileMenuNavbar.style.transform = `
  translate3d(0px, 0px, 0px)
  scale3d(1, 1, 1)
  rotateX(0deg)
  rotateY(0deg)
  rotateZ(0deg)
  skew(0deg, 0deg)
`;
  mobileMenuNavbar.style.display = "flex";
  mobileMenuNavbar.style.transformStyle = "preserve-3d";
}

function hideMobileMenu() {
  mobileMenuNavbar.style.opacity = "0";
  mobileMenuNavbar.style.transform = `
  translate3d(100%, 0px, 0px)
  scale3d(1, 1, 1)
  rotateX(0deg)
  rotateY(0deg)
  rotateZ(0deg)
  skew(0deg, 0deg)
`;
  mobileMenuNavbar.style.display = "hide";
  mobileMenuNavbar.style.transformStyle = "preserve-3d";
}
