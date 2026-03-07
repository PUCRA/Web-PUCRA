function changeLanguageHome(lang) {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  fillContentAbout();
}

const sliderimages = [
  // all images of slider
  "home/images/factoryalan3.webp",
  "home/images/mundial2023.webp",
  "home/images/slider_premio_sener.webp",
  "home/images/tharsis_home.webp",
  "home/images/robotspinupmundial.webp",
  "home/images/slider_phoenyx.webp",
];

const parentSlides = document.getElementById("slider-images");
const parentMenuSlider = document.getElementById("menu-slider");

const sliderDOMImages = document.getElementsByClassName("slider-img");
let sliderIndex = 0;

for (let i = 0; i < sliderimages.length; i++) {
  // create images
  const mImg = document.createElement("img");
  mImg.src = sliderimages[i];
  mImg.alt = "Imagen del Home " + (i + 1);
  mImg.className = "slider-img";
  parentSlides.appendChild(mImg);

  // create menu buttons
  const mBtn = document.createElement("button");
  mBtn.innerHTML = "&nbsp";
  mBtn.className = "slider-menu-btns";
  mBtn.onclick = () => showIndexImage(i);
  parentMenuSlider.appendChild(mBtn);
}

function nextSlider() {
  const iImg = sliderimages.length - sliderIndex - 1;
  sliderDOMImages[iImg].style.opacity = 0;
  console.log(sliderDOMImages[iImg].src, iImg);

  sliderIndex++;
  if (sliderIndex === sliderimages.length) {
    for (let i = 0; i < sliderimages.length; i++) {
      sliderDOMImages[i].style.opacity = 1;
    }
    sliderIndex = 0;
  }
  showIndexImage(sliderIndex);
}

function backSlider() {
  if (sliderIndex === 0) {
    for (let i = 0; i < sliderimages.length; i++) {
      if (sliderIndex !== i) {
        sliderDOMImages[i].style.opacity = 0;
      }
    }
    sliderIndex = sliderimages.length;
  }
  const iImg = sliderimages.length - sliderIndex;
  sliderDOMImages[iImg].style.opacity = 1;
  console.log(sliderDOMImages[iImg].src, iImg);

  sliderIndex--;
  showIndexImage(sliderIndex);
}

function showIndexImage(indexImage) {
  for (let i = 0; i < sliderimages.length; i++) {
    if (indexImage == i) {
      sliderDOMImages[i].style.opacity = 1;
      parentMenuSlider.children[i].style.opacity = 1;
    } else {
      sliderDOMImages[i].style.opacity = 0;
      parentMenuSlider.children[i].style.opacity = 0.5;
    }
  }
}
