const teamsEn = {
  home: "Home",
  events: "Events",
  sponsors: "Sponsors",
  about_us: "About Us",
  history: "History",
  competitions: "Competitions",
  language_es: "ES",
  language_en: "ENG",
  language_cat: "CAT",
  contact: "Contact",
  languages: "LANGUAGES",
  networks: "NETWORKS",
  follow_us: "FOLLOW PUCRA!",
  address: "Address",
  contacts: "Contacts",
  links: "Links",
  titleTeam: "Our Team",
  descriptions: [
    "PUCRA is a multidisciplinary team where engineering, organization and creativity work together with a clear goal: to design, build and compete at the highest level in robotics.",
    "Behind every robot, every competition and every achievement there are people who dedicate time, knowledge and effort to make the project move forward.",
  ],
  titleMembers: "Meet each member",
};
const teamsEs = {
  home: "Inicio",
  events: "Eventos",
  sponsors: "Patrocinadores",
  about_us: "Sobre nosotros",
  history: "Historia",
  competitions: "Competiciones",
  language_es: "ES",
  language_en: "ENG",
  language_cat: "CAT",
  contact: "Contacto",
  languages: "IDIOMAS",
  networks: "REDES",
  follow_us: "¡SIGUE A PUCRA!",
  address: "Dirección",
  contacts: "Contactos",
  links: "Enlaces",
  titleTeam: "Nuestro Equipo",
  descriptions: [
    "PUCRA es un equipo multidisciplinar donde ingeniería, organización y creatividad trabajan juntas con un objetivo claro: diseñar, construir y competir al más alto nivel en robótica.",
    "Detrás de cada robot, cada competición y cada logro hay personas que dedican tiempo, conocimiento y esfuerzo para que el proyecto avance.",
  ],
  titleMembers: "Conoce a cada miembro",
};
const teamsCat = {
  home: "Inici",
  events: "Esdeveniments",
  sponsors: "Patrocinadors",
  about_us: "Sobre nosaltres",
  history: "Història",
  competitions: "Competicions",
  language_es: "ES",
  language_en: "ENG",
  language_cat: "CAT",
  contact: "Contacte",
  languages: "IDIOMES",
  networks: "XARXES",
  follow_us: "SEGUEIX PUCRA!",
  address: "Adreça",
  contacts: "Contactes",
  links: "Enllaços",
  titleTeam: "El Nostre Equip",
  descriptions: [
    "PUCRA és un equip multidisciplinari on enginyeria, organització i creativitat treballen juntes amb un objectiu clar: dissenyar, construir i competir al més alt nivell en robòtica.",
    "Darrere de cada robot, cada competició i cada assoliment hi ha persones que dediquen temps, coneixement i esforç perquè el projecte avanci.",
  ],
  titleMembers: "Coneix a cada membre",
};
function fillSpecificContent(mLang) {
  document.documentElement.lang = mLang;
  // Show or hide language options based on the selected language
  $("cat").style.display = mLang === "cat" ? "none" : "block";
  $("en").style.display = mLang === "en" ? "none" : "block";
  $("es").style.display = mLang === "es" ? "none" : "block";

  $("cat-mobile").style.display = mLang === "cat" ? "none" : "block";
  $("en-mobile").style.display = mLang === "en" ? "none" : "block";
  $("es-mobile").style.display = mLang === "es" ? "none" : "block";
  $("actual-year").innerText = new Date().getFullYear(); // returns the current year
}

function changeLanguage() {
  // ../js/language.js
  let mLang = getLanguage();
  // Set the language in the document element
  fillSpecificContent(mLang);
  let contentLang = null;
  switch (mLang) {
    case "cat":
      contentLang = teamsCat;
      $("lang-menu").innerText = contentLang.language_cat;
      break;
    case "en":
      contentLang = teamsEn;
      $("lang-menu").innerText = contentLang.language_en;
      break;
    default:
      // Default 'es' if no language is set or if the language is not recognized
      contentLang = teamsEs;
      $("lang-menu").innerText = contentLang.language_es;
      break;
  }
  return contentLang;
}

// replace document.getElementById with $ NO ES JQUERY
const $ = (id) => document.getElementById(id);

// replace document.getElementsByClassName with $$ NO ES JQUERY
const $$ = (cls) => document.getElementsByClassName(cls);

function fillContentTeams() {
  console.info(
    "Hay 10 tipos de personas: Las que saben binario y las que no. Att: Kevin",
  );

  let contentTeams = changeLanguage();
  $("our-team").innerText = contentTeams.titleTeam;

  for (let i = 0; i < $$("teams-parrafs").length; i++) {
    $$("teams-parrafs")[i].innerHTML = contentTeams.descriptions[i];
  }

  $("meet-members").innerText = contentTeams.titleMembers;

  // Footer
  $("follow-us").innerHTML = contentTeams.follow_us;
  $("address").innerHTML = contentTeams.address;
  $("links").innerHTML = contentTeams.links;
  $("contacts").innerHTML = contentTeams.contacts;
}
