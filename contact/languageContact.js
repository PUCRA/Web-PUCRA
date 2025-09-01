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
  form_message: "Completa el formulario y te responderemos lo antes posible.",
  success_message: "¡Gracias por contactarnos!",
  form_fail: "¡Ups! Algo salió mal al enviar el formulario.",
  direction: "Dirección",
  name: "Nombre",
  field: "Mensaje",
  submit_text: "Enviar",
  follow_us2: "¡SIGUE A PUCRA!",
  address: "Dirección",
  contact2: "Contactos",
  
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
  form_message: "Complete the form and we will respond as soon as possible!",
  success_message: "Thank you for contacting us!",
  form_fail: "Oops! Something went wrong while submitting the form.",
  direction: "Address",
  name: "Name",
  field: "Message",
  submit_text: "Submit",
  follow_us2: "FOLLOW PUCRA!",
  address: "Address",
  contact2: "Contacts",
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
  form_message: "Completa el formulari i et respondrem tan aviat com sigui possible.",
  success_message: "Gràcies per contactar amb nosaltres!",
  form_fail: "Ups! Alguna cosa ha anat malament en enviar el formulari.",
  direction: "Adreça",
  name: "Nom",
  field: "Missatge",
  submit_text: "Enviar",
  follow_us2: "SEGUEIX PUCRA!",
  address: "Adreça",
  contact2: "Contactes",
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
  $("direction").innerHTML = contenAbout.direction;
  $("name").placeholder = contenAbout.name;
  $("field").placeholder = contenAbout.field;
  $("submit_text").value = contenAbout.submit_text;


  if ($("actual-year"))
    $("actual-year").innerHTML = contenAbout.actual_year;

  if ($("web-place"))
    $("web-place").innerHTML = contenAbout.web_place;

  // Footer
  $("follow-us").innerHTML = contenAbout.follow_us;
  $("address").innerHTML = contenAbout.address;
  $("links").innerHTML = contenAbout.links;
  $("contacts").innerHTML = contenAbout.contacts;
}
