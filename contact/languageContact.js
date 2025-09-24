const aboutEs = {
  home: "Inicio",
  events: "Eventos",
  sponsors: "Patrocinadores",
  about_us: "Sobre Nosotros",
  history: "Historia",
  competitions: "Competencias",
  language_es: "ES",
  language_en: "ENG",
  language_cat: "CAT",
  contact: "Contacto",
  contacts: "Contactos",
  languages: "IDIOMAS",
  social: "SOCIAL",
  follow_us: "¡SIGUE A PUCRA!",
  address: "Dirección",
  contact3: "Contactos",
  links: "Enlaces",
  actual_year: "2024",
  contact_us: "Contáctanos",
  phone: "Teléfono",
  form_message: "Complete el formulario y le responderemos lo antes posible",
  success_message: "¡Gracias por contactarnos!",
  form_fail: "¡Ups! Algo salió mal al enviar el formulario.",
  direction: "Dirección",
  name: "Nombre",
  field: "Mensaje",
  submit_text: "Enviar",
  follow_us2: "¡SIGUE A PUCRA!",
  address: "Dirección",
  contact2: "Contactos",
  be_a_partner: "Apóyanos como partner",
  be_a_partner_text: [
    "Convertirte en Sponsor de PUCRA te brinda visibilidad en nuestras redes sociales y en cada uno de los eventos que organizamos. Tu logo estará presente en nuestras camisetas y materiales de difusión, además de explorar juntos formas de colaboración dentro de nuestra universidad.",
    "Todo esto con el objetivo de que tu marca llegue al mayor número posible de estudiantes.",
  ],
  be_a_member: "Únete como miembro",
  be_a_member_text: [
    "Formar parte de PUCRA significa integrarte en un equipo multidisciplinario, donde podrás aprender, experimentar y aplicar conocimientos de ingeniería en proyectos reales a través de la robótica.",
    "Es una oportunidad única para desarrollar habilidades técnicas y de trabajo en equipo, mientras vives experiencias que van más allá del aula.",
  ],
};

const aboutEn = {
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
  social: "SOCIAL",
  follow_us: "FOLLOW PUCRA!",
  address: "Address",
  contact: "Contact",
  contacts: "Contacts",
  links: "Links",
  actual_year: "2024",
  actual_year: "2024", // si es dinámico, puedes omitirlo o actualizarlo por JS
  contact_us: "Contact Us",
  phone: "Phone Number",
  form_message:
    "Please complete the form, and we will respond as soon as possible",
  success_message: "Thank you for contacting us!",
  form_fail: "Oops! Something went wrong while submitting the form.",
  direction: "Address",
  name: "Name",
  field: "Message",
  submit_text: "Submit",
  follow_us2: "FOLLOW PUCRA!",
  address: "Address",
  contact2: "Contacts",
  be_a_partner: "Support us as a partner",
  be_a_partner_text: [
    "Becoming a PUCRA sponsor gives you visibility on our social networks and at every event we organize. Your logo will appear on our t-shirts and promotional materials, and we'll also explore ways to collaborate within our university.",
    "All with the goal of bringing your brand to as many students as possible.",
  ],
  be_a_member: "Join as a member",
  be_a_member_text: [
    "Being part of PUCRA means joining a multidisciplinary team where you can learn, experiment, and apply engineering knowledge to real projects through robotics.",
    "It's a unique opportunity to develop technical and teamwork skills while enjoying experiences that go beyond the classroom.",
  ],
};

const aboutCat = {
  home: "Inici",
  events: "Esdeveniments",
  sponsors: "Patrocinadors",
  about_us: "Sobre Nosaltres",
  history: "Història",
  competitions: "Competències",
  language_es: "ES",
  language_en: "ENG",
  language_cat: "CAT",
  contact: "Contacte",
  languages: "IDIOMES",
  social: "SOCIAL",
  follow_us: "SEGUEIX PUCRA!",
  address: "Adreça",
  contact: "Contacte",
  contacts: "Contactes",
  links: "Enllaços",
  actual_year: "2024",
  contact_us: "Contacta'ns",
  phone: "Telèfon",
  form_message: "Completeu el formulari i us respondrem al més aviat possible",
  success_message: "Gràcies per contactar amb nosaltres!",
  form_fail: "Ups! Alguna cosa ha anat malament en enviar el formulari.",
  direction: "Adreça",
  name: "Nom",
  field: "Missatge",
  submit_text: "Enviar",
  follow_us2: "SEGUEIX PUCRA!",
  address: "Adreça",
  contact2: "Contactes",
  be_a_partner: "Dona'ns suport com a partner",
  be_a_partner_text: [
    "Convertir-te en patrocinador de PUCRA et dona visibilitat a les nostres xarxes socials i en cada esdeveniment que organitzem. El teu logotip apareixerà a les nostres samarretes i materials de difusió, a més d'explorar junts formes de col·laboració dins la nostra universitat.",
    "Tot això amb l'objectiu que la teva marca arribi al màxim nombre possible d'estudiants.",
  ],
  be_a_member: "Uneix-te com a membre",
  be_a_member_text: [
    "Formar part de PUCRA significa integrar-te en un equip multidisciplinari, on podràs aprendre, experimentar i aplicar coneixements d'enginyeria en projectes reals a través de la robòtica.",
    "És una oportunitat única per desenvolupar habilitats tècniques i de treball en equip, mentre vius experiències que van més enllà de l'aula.",
  ],
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
}

function changeLanguage() {
  // ../js/language.js
  let mLang = getLanguage();
  // Set the language in the document element
  fillSpecificContent(mLang);
  let contentLang = null;
  switch (mLang) {
    case "cat":
      contentLang = aboutCat;
      break;
    case "en":
      contentLang = aboutEn;
      break;
    default:
      // Default 'es' if no language is set or if the language is not recognized
      contentLang = aboutEs;
      break;
  }
  return contentLang;
}

// replace document.getElementById with $ NO ES JQUERY
const $ = (id) => document.getElementById(id);

// replace document.getElementsByClassName with $$ NO ES JQUERY
const $$ = (cls) => document.getElementsByClassName(cls);

function fillContentAbout() {
  console.info(
    "Hay 10 tipos de personas: Las que saben binario y las que no. Att: Kevin"
  );

  let contenAbout = changeLanguage();

  //Navbar
  for (let i = 0; i < $$("home").length; i++) {
    $$("home")[i].innerHTML = contenAbout.home;
  }
  for (let i = 0; i < $$("events").length; i++) {
    $$("events")[i].innerHTML = contenAbout.events;
  }
  for (let i = 0; i < $$("about-us").length; i++) {
    $$("about-us")[i].innerHTML = contenAbout.about_us;
  }
  for (let i = 0; i < $$("contact").length; i++) {
    $$("contact")[i].innerHTML = contenAbout.contact;
  }

  for (let i = 0; i < $$("networks").length; i++) {
    $$("networks")[i].innerHTML = contenAbout.networks;
  }

  for (let i = 0; i < $$("langs").length; i++) {
    $$("langs")[i].innerHTML = contenAbout.languages;
  }

  // Main section title (asegúrate que existe esta clave)
  if (contenAbout.section_title) {
    $("title-history").innerHTML = contenAbout.section_title;
  }

  // Main section description
  $("contact_us").innerHTML = contenAbout.contact_us;
  $("form_message").innerHTML = contenAbout.form_message;
  $("success_message").innerHTML = contenAbout.success_message;
  $("form_fail").innerHTML = contenAbout.form_fail;
  $("phone").innerHTML = contenAbout.phone;
  $("address").innerHTML = contenAbout.direction;
  $("name").placeholder = contenAbout.name;
  $("field").placeholder = contenAbout.field;
  $("submit_text").value = contenAbout.submit_text;

  // Specific sections
  $("be-a-partner").innerHTML = contenAbout.be_a_partner;
  for (let i = 0; i < $$("be-a-partner-text").length; i++) {
    $$("be-a-partner-text")[i].innerHTML = contenAbout.be_a_partner_text[i];
  }

  $("be-a-member").innerHTML = contenAbout.be_a_member;
  for (let i = 0; i < $$("be-a-member-text").length; i++) {
    $$("be-a-member-text")[i].innerHTML = contenAbout.be_a_member_text[i];
  }
  if ($("actual-year")) $("actual-year").innerHTML = contenAbout.actual_year;

  if ($("web-place")) $("web-place").innerHTML = contenAbout.web_place;

  // Footer
  $("follow-us").innerHTML = contenAbout.follow_us;
  $("address").innerHTML = contenAbout.address;
  $("links").innerHTML = contenAbout.links;
  $("contacts").innerHTML = contenAbout.contacts;
}
