document.getElementById("actual-year").innerText = new Date().getFullYear(); // returns the current year

const socialLinks = document.getElementsByClassName("footer-social-link");
function addFooterIcon(image, alt, parent) {
  deleteChilds(parent);
  let img = document.createElement("img");
  img.src = image;
  img.height = 30;
  img.width = 30;
  img.alt = alt;
  parent.appendChild(img);
}

function deleteChilds(currentDiv) {
  while (currentDiv.firstChild) {
    currentDiv.removeChild(currentDiv.firstChild);
  }
}
const imageUrl = "https://img.icons8.com/ios-glyphs/30/c43a69/";

addFooterIcon(`${imageUrl}/youtube-play.png`, "YouTube Icon", socialLinks[0]);
addFooterIcon(`${imageUrl}/instagram-new--v1.png`, "Instagram Icon", socialLinks[1]);
addFooterIcon(`${imageUrl}/linkedin-circled--v1.png`, "LinkedIn Icon", socialLinks[2]);
