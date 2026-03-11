function changeLanguageAbout(lang) {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  fillContentTeams();
  // window.location.reload(); // Uncomment if you want to reload the page after changing language
}

const teamsInfo = [
  {
    name: "Elena Villalba",
    role: "Team Leader",
    img: "./images/ElenaVillalba.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/elena-villalba/",
      mail: "elena.villalba@upc.edu",
    },
  },
  {
    name: "Judith Salvador",
    role: "Software Developer",
    img: "./images/JudithSalvador.webp",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/judith-salvador-mart%C3%ADnez-a207ab392/",
      mail: "judith.salvador@estudiantat.upc.edu",
    },
  },
  {
    name: "Lev Khabiev",
    role: "Mechanical Engineer",
    img: "./images/LevKhabiev.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/lev-khabiev-9bab253b3/",
      mail: "lev.khabiev@estudiantat.upc.edu",
    },
  },
  {
    name: "Marc Llorens",
    role: "Electronic Engineer",
    img: "./images/MarcLlorens.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/marc-llorens-ortiz-2b7856318/",
      mail: "marc.llorens.ortiz@estudiantat.upc.edu",
    },
  },
  {
    name: "Marc Redolad",
    role: "Software Developer",
    img: "./images/MarcRedolad.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/marc-redolad-ramos-9983242a3/",
      mail: "marc.redolad@estudiantat.upc.edu",
    },
  },
  {
    name: "Sidi Navil Garcia",
    role: "Mechanical Engineer",
    img: "./images/NavilGarcia.webp",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/sidi-navil-garcia-echchaouy-02508a232/",
      mail: "sidi.navil.garcia@estudiantat.upc.edu",
    },
  },
  {
    name: "Oriol del Castillo",
    role: "Mechanic Lead",
    img: "./images/OrioldelCastillo.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/orioldelcastillo/",
      mail: "oriol.del.castillo@estudiantat.upc.edu",
    },
  },
  {
    name: "Paula Olivera",
    role: "Marketing & Communication",
    img: "./images/PaulaOlivera.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/paula-olivera-prieto-9715a5226/",
      mail: "paula.olivera@upc.edu",
    },
  },
  {
    name: "Pol Garcia",
    role: "Mechanical Engineer",
    img: "./images/PolGarcia.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/polgarcia/",
    },
  },
  {
    name: "Roi Seoane",
    role: "Software Developer",
    img: "./images/RoiSeoane.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/roi-seoane-punti/",
      mail: "roi.seoane@estudiantat.upc.edu",
    },
  },
  {
    name: "Santi Pallarès",
    role: "Electronic Engineer",
    img: "./images/SantiPallares.webp",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/santiago-pallar%C3%A8s-ocampo-b06b91343/",
    },
  },
  /*
  {
    name: "Àngel Pons",
    role: "Mechanical Engineer",
    img: "",
    socials: {
      mail: "angel.pons.gomila@estudiantat.upc.edu",
    },
  },
  {
    name: "Arnau Rosell", // waitlist member
    role: "Mechanical Engineer",
    img: "",
    socials: {
      mail: "arnau.rosell.olcina@estudiantat.upc.edu",
    },
  },
  {
    name: "Carlos Cervera", // waitlist member
    role: "Telecom Engineer",
    img: "./images/CarlosCervera.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/carlos-cervera-853a283a0/",
      mail: "carlos.cervera@estudiantat.upc.edu",
    },
  },
  {
    name: "Eric Cuenca",
    role: "Mechanical Engineer",
    img: "",
    socials: {
      mail: "eric.cuenca@estudiantat.upc.edu",
    },
  },
  {
    name: "Guillem Rubirola", // waitlist member
    role: "Electronic Engineer",
    img: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/guillem-rubirola-437323364/",
      mail: "guillem.rubirola@estudiantat.upc.edu",
    },
  },
  {
    name: "Marc Martínez", // waitlist member
    role: "Mechanical Engineer",
    img: "",
    socials: {
      mail: "marc.martinez.lorente@estudiantat.upc.edu",
    },
  },
  {
    name: "Max Simón", // waitlist member
    role: "Software Developer",
    img: "",
    socials: {
      mail: "max.simon@estudiantat.upc.edu",
    },
  },
  {
    name: "Santiago Villar", // waitlist member
    role: "Software Developer",
    img: "",
    socials: {
      linkedin: "https://www.linkedin.com/in/santiago-villar-fernandez/",
      mail: "santiago.villar@estudiantat.upc.edu",
    },
  },
  {
    name: "Vitalii Kryvoruchko", // waitlist member
    role: "Software Developer",
    img: "",
    socials: {
      linkedin:
        "https://www.linkedin.com/in/sidi-navil-garcia-echchaouy-02508a232/",
      mail: "vitaliy.kryvoru@gmail.com",
    },
  },*/
];

let kevinProfile = {
  name: "Kevin Sama",
  role: "Colab: Developer Full-Stack",
  img: "./images/KevinSama.webp",
  socials: {
    linkedin: "https://www.linkedin.com/in/kevin-sama/",
    mail: "kevinbdn98@gmail.com",
    web: "https://www.zksama.com/sobre-mi/",
  },
};
const panelImages = document.querySelectorAll(".panal img");

panelImages.forEach((img, i) => {
  img.src = teamsInfo[i].img;
  img.alt = teamsInfo[i].name;
  img.title = teamsInfo[i].name;
});
let num = 15;

const teams = document.getElementById("teams");
teamsInfo.push(kevinProfile);
for (let i = 0; i < teamsInfo.length; i++) {
  const e = teamsInfo[i];

  let article = document.createElement("article");
  article.className = "team-item";
  article.style.top = `${num + i + i}vh`;

  article.id = `team-${i + 1}`;
  article.style.backgroundImage = `url('${e.img}')`;

  let content = document.createElement("div");
  content.className = "content";

  let h1 = document.createElement("h1");
  h1.textContent = teamsInfo[i].name;

  let h2 = document.createElement("h2");
  h2.textContent = teamsInfo[i].role;

  let icons = document.createElement("div");
  icons.className = "icons";
  if (e.socials.linkedin) {
    let linkedinIcon = document.createElement("a");
    linkedinIcon.href = e.socials.linkedin;
    linkedinIcon.target = "_blank";
    linkedinIcon.innerHTML = `<img   height="35"
                  width="35"
                  src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF" alt="LinkedIn">`;
    icons.appendChild(linkedinIcon);
  }
  if (e.socials.mail) {
    let mailIcon = document.createElement("a");
    mailIcon.href = `mailto:${e.socials.mail}`;
    mailIcon.innerHTML = `<img      height="35"
                  width="35" src="https://img.icons8.com/?size=100&id=85500&format=png&color=FFFFFF" alt="Mail">`;
    icons.appendChild(mailIcon);
  }
  if (e.socials.web) {
    let webIcon = document.createElement("a");
    webIcon.href = e.socials.web;
    webIcon.target = "_blank";
    webIcon.innerHTML = `<img      height="35"
                  width="35" src="https://img.icons8.com/?size=100&id=25049&format=png&color=FFFFFF" alt="Web">`;
    icons.appendChild(webIcon);
  }

  content.appendChild(h1);
  content.appendChild(h2);
  content.appendChild(icons);
  article.appendChild(content);
  teams.appendChild(article);
}
