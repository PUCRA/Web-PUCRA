document.getElementById("actual-year").innerText = new Date().getFullYear(); // returns the current year

const sponsors = {
  primary: [
    {
      url: "https://eu3a.mitsubishielectric.com/",
      logo: "/components/footer/images/mitsubishii.png",
      alt: "Logo de MITSUBISHI ELECTRIC AUTOMATIZACIÓN INDUSTRIAL",
    },
  ],
  secondary: [
    {
      url: "https://www.se.com/",
      logo: "/components/footer/images/Schneider-logo.png",
      alt: "Logo de Schneider Electric",
    },
    {
      url: "https://www.mecalux.es/",
      logo: "/components/footer/images/Mecalux-logo.png",
      alt: "Logo de Mecalux",
    },
  ],
  others: [
    {
      url: "https://www.eic.cat/",
      logo: "/components/footer/images/cole-logo.png",
      alt: "Logo del Colegio de Ingenieros Industriales de Cataluña",
    },
    {
      url: "https://www.mutua-ingenieros.com/",
      logo: "/components/footer/images/Mutua-logo.png",
      alt: "Logo de La Mutua de los Ingenieros",
    },
  ],
};
const footerP = document.getElementsByClassName("footer-banner");
const parentFooter = footerP[footerP.length - 1];
const sponsorsParent = document.createElement("article");
sponsorsParent.id = "sponsors-parent";

const sponsorsPrimary = document.createElement("section");
sponsorsPrimary.className = "sponsors-section";
sponsorsPrimary.id = "sponsors-primary";

const sponsorsSecondary = document.createElement("section");
sponsorsSecondary.className = "sponsors-section";
sponsorsSecondary.id = "sponsors-secondary";

const sponsorOthers = document.createElement("section");
sponsorOthers.className = "sponsors-section";
sponsorOthers.id = "sponsors-others";

sponsors.primary.forEach((sponsor) => {
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
  sponsorsPrimary.appendChild(link);
});

sponsors.secondary.forEach((sponsor) => {
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
  sponsorsSecondary.appendChild(link);
});

sponsors.others.forEach((sponsor) => {
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
  sponsorOthers.appendChild(link);
});

sponsorsParent.appendChild(sponsorsPrimary);
sponsorsParent.appendChild(sponsorsSecondary);
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
