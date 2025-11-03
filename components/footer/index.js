document.getElementById("actual-year").innerText = new Date().getFullYear(); // returns the current year

// level of sponsors
const tierFirst = "first"; // level 1
const tierSecond = "second"; // level 2
const tierThird = "third"; // level 3
const tierOther = "other"; // level 4

const sponsors = [
  {
    type: tierFirst,
    url: "https://eu3a.mitsubishielectric.com/",
    logo: "/images/sponsors/mitsubishi.webp",
    alt: "Logo de MITSUBISHI ELECTRIC AUTOMATIZACIÓN INDUSTRIAL",
  },
  {
    type: tierSecond,
    url: "https://www.se.com/",
    logo: "/images/sponsors/Schneider.webp",
    alt: "Logo de Schneider Electric",
  },
  {
    type: tierSecond,
    url: "https://www.mecalux.es/",
    logo: "/images/sponsors/mecalux.webp",
    alt: "Logo de Mecalux",
  },
  {
    type: tierThird,
    url: "https://www.motedis.es/es",
    logo: "/images/sponsors/motedis.webp",
    alt: "Logo de Motedis",
  },
  {
    type: tierThird,
    url: "https://www.bossard.com/es-es/",
    logo: "/images/sponsors/bossard.webp",
    alt: "Logo de Bossard",
  },

  {
    type: tierOther,
    url: "https://odriverobotics.com/",
    logo: "/images/sponsors/odrive.webp",
    alt: "Logo de Odrive",
  },
  {
    type: tierOther,
    url: "https://booant.com/es-es",
    logo: "/images/sponsors/booant.webp",
    alt: "Logo de Booant",
  },
  {
    type: tierOther,
    url: "https://www.eic.cat/",
    logo: "/images/sponsors/enginyers-catalunya.webp",
    alt: "Logo del Colegio de Ingenieros Industriales de Cataluña",
  },
  {
    type: tierOther,
    url: "https://www.mutua-ingenieros.com/",
    logo: "/images/sponsors/mutua_enginyers.webp",
    alt: "Logo de La Mutua de los Ingenieros",
  },
  {
    type: tierOther,
    url: "https://www.stepperonline.es/",
    logo: "/images/sponsors/stepper.webp",
    alt: "Logo de Stepper",
  },
];

const footerP = document.getElementsByClassName("footer-banner");
const parentFooter = footerP[footerP.length - 1];
const sponsorsParent = document.createElement("article");
sponsorsParent.id = "sponsors-parent";
const sloganSponsor = document.createElement("p");
sloganSponsor.className = "slogan-sponsor";
sloganSponsor.innerText = "SPONSORS";

const sponsorsPrimary = document.createElement("section");
sponsorsPrimary.className = "sponsors-section";
sponsorsPrimary.id = "sponsors-primary";

const sponsorsSecondary = document.createElement("section");
sponsorsSecondary.className = "sponsors-section";
sponsorsSecondary.id = "sponsors-secondary";

const sponsorsThird = document.createElement("section");
sponsorsThird.className = "sponsors-section";
sponsorsThird.id = "sponsors-third";

const sponsorOthers = document.createElement("section");
sponsorOthers.className = "sponsors-section";
sponsorOthers.id = "sponsors-others";

sponsors.forEach((sponsor) => {
  const link = document.createElement("a");
  link.className = "company-link";
  link.href = sponsor.url;
  link.target = "_blank";
  const img = document.createElement("img");
  img.className = "company-logo";
  img.src = sponsor.logo;
  img.alt = sponsor.alt;
  // img.width = sponsor.width;
  img.loading = "lazy";
  link.appendChild(img);

  // Level 1
  if (sponsor.type == tierFirst) sponsorsPrimary.appendChild(link);
  // Level 2
  if (sponsor.type == tierSecond) sponsorsSecondary.appendChild(link);
  // Level 3
  if (sponsor.type == tierThird) sponsorsThird.appendChild(link);
  //Level 4
  if (sponsor.type == tierOther) sponsorOthers.appendChild(link);
});

sponsorsParent.appendChild(sloganSponsor);
sponsorsParent.appendChild(sponsorsPrimary);
sponsorsParent.appendChild(sponsorsSecondary);
sponsorsParent.appendChild(sponsorsThird);

sponsorsParent.appendChild(sponsorOthers);

parentFooter.prepend(sponsorsParent);

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
addFooterIcon(
  `${imageUrl}/instagram-new--v1.png`,
  "Instagram Icon",
  socialLinks[1]
);
addFooterIcon(
  `${imageUrl}/linkedin-circled--v1.png`,
  "LinkedIn Icon",
  socialLinks[2]
);
