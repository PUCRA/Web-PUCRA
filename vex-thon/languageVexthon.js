const vexthonEs = {
  home: "Inicio",
  events: "Eventos",
  sponsors: "Sponsors",
  about_us: "Sobre Nosotros",
  language_es: "ES",
  language_en: "ENG",
  language_cat: "CAT",
  firstDescription: "Participa en la Competición de Robótica más innovadora",
  firstDate: "OCTUBRE 2024", // can be generate by unix timestamp of countdown
  subscribe: "¡Inscríbete!",
  follow_us: "SIGUE A PUCRA!",
  address: "Dirección",
  links: "Links",
  contact: "Contacto",
  vexThon: {
    title: "VEX-Thon",
    description:
      "¡Bienvenidos a la <strong>VEX-Thon</strong>! Este emocionante evento de robótica les ofrece una oportunidad única para que demuestren sus habilidades de ingeniería en un formato inspirado en la reconocida VEX Robotics Competition.\n\nLos participantes, organizados en equipos, dispondrán de una semana para diseñar, construir y programar un robot capaz de superar un desafío específico. Esta competición estilo Hackathon se inicia un sábado y culmina el domingo siguiente, brindando un horario flexible que les permitirá explorar su creatividad al máximo.",
  },
  vex: {
    title: "¿Qué es la VEX?",
    description:
      "La VEX Robotics Competition es un desafío de robótica dirigida a estudiantes de todas las edades, organizado por Robotics Education & Competition Foundation.\n\nLos equipos participantes tienen que diseñar, construir y programar un robot con el objetivo de superar un desafío y competir contra otros equipos en un campo de juego.\n\nEsta competición fomenta habilidades en STEM (ciencia, tecnología, ingeniería y matemáticas), promoviendo la innovación, el trabajo en equipo y la resolución de problemas mientras los participantes se preparan para futuras carreras en tecnología.",
  },

  location: {
    title: "Localización",
    description: "En la sala polivalente del edificio A de la EEBE",
  },
  date: {
    title: "Fecha",
    description: "Del 19 al 27 de octubre",
  },
  news: {
    title: "Novedades",
    description:
      "¡Se abren inscripciones para la primera edición de la VEX-Thon!",
  },

  sobre_vex_thon: [
    {
      question: "¿Qué es la VEX-Thon?",
      answer:
        "Este emocionante evento de robótica te ofrece una oportunidad única para demostrar tus habilidades de ingeniería, con un formato inspirado en la reconocida VEX Robotics Competition.",
    },
    {
      question: "¿Cuándo es la VEX-Thon?",
      answer:
        "Se llevará a cabo entre el 19 y el 27 de octubre, ofreciendo un horario flexible para explorar al máximo tu creatividad.",
    },
    {
      question: "¿Dónde se hará la VEX-Thon?",
      answer:
        "El evento tendrá lugar en el Campus Diagonal Besòs, en la sala polivalente del edificio A, con indicaciones para llegar al aula donde se llevará a cabo la actividad.",
    },
  ],
  competition: [
    {
      question: "¿Cuál es el formato de competición?",
      answer:
        "El formato de la competición se basará en la VEX Robotics Competition. Los participantes, organizados en equipos, tendrán una semana para diseñar, construir y programar un robot capaz de superar un desafío específico, y se enfrentarán a otros competidores en un torneo para decidir al ganador de la VEX-Thon.",
    },
    {
      question: "¿Qué proveeremos en la VEX-Thon?",
      answer:
        "La VEX-Thon proporcionará todo el material de robótica necesario para construir el robot. Además, ofreceremos wifi y áreas de trabajo con enchufes.",
    },
    {
      question: "¿Qué debo llevar?",
      answer:
        "Lo más indispensable será un ordenador por equipo con su respectivo cargador. También recomendamos llevar comida para los días de fiesta puesto que la cafetería está cerrada. En todo caso, estarán abiertos algunos restaurantes cercanos.",
    },
  ],

  participation: [
    {
      question: "¿Quién puede participar?",
      answer:
        "La 1ª edición de la VEX-Thon está dirigida a estudiantes del Campus Diagonal Besòs de la Universidad Politécnica de Cataluña. Sin embargo, en futuras ediciones tenemos pensado aceptar inscripciones de otros centros y edades.",
    },
    {
      question: "¿Qué pasa si no tengo experiencia en robótica?",
      answer:
        "¡No hay ningún problema! Al inicio del evento, haremos una formación sobre el material que proporcionaremos. Además, podrás usar buscar lo que quieras en internet y te proporcionaremos otros recursos adicionales.",
    },
    {
      question: "¿Qué pasa si no tengo equipo?",
      answer:
        "En la inscripción podrás indicar que no tienes equipo. En los días previos al evento, formaremos equipos con las personas que elijan esta opción.",
    },
    {
      question: "¿Qué pasa si no soy de la EEBE o de la UPC?",
      answer:
        "Desgraciadamente, en esta primera edición, únicamente nos centraremos en estudiantes de la EEBE, pero estate atento a futuras ediciones, donde tenemos planteado ampliar nuestros horizontes.",
    },
  ],
  teams: [
    {
      question: "¿De cuántas personas son los equipos?",
      answer:
        "La cantidad recomendable es de 4 personas por equipo, pero pueden tener un mínimo de 3 y un máximo de 6 personas. Si sois más de 6, recomendamos hacer dos equipos diferentes. En caso de que los equipos no sean equitativos, plantearemos modificarlos para una mejor experiencia.",
    },
    {
      question: "¿Se pueden cambiar de miembros tras inscribirse?",
      answer:
        "Se pueden modificar los miembros del equipo contactándonos a través de los canales que os proporcionaremos una vez estéis inscritos.",
    },
    {
      question: "¿Hay límite de inscripciones?",
      answer:
        "Tenemos un límite de inscripciones según el material disponible. ¡No te quedes fuera!",
    },
  ],
};

const vexthonEn = {};
const vexthonCat = {};

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
      contentLang = vexthonCat;
      $("lang-menu").innerText = vexthonCat.language_cat;
      break;
    case "en":
      contentLang = vexthonEn;
      $("lang-menu").innerText = vexthonEn.language_en;
      break;
    default:
      // Default 'es' if no language is set or if the language is not recognized
      contentLang = vexthonEs;
      $("lang-menu").innerText = vexthonEs.language_es;
      break;
  }
  return contentLang;
}

// replace document.getElementById with $ NO ES JQUERY
const $ = (id) => document.getElementById(id);

// replace document.getElementsByClassName with $$ NO ES JQUERY
const $$ = (cls) => document.getElementsByClassName(cls);

function fillContentVexthon() {
  console.info(
    "Hay 10 tipos de personas: Las que saben binario y las que no. Att: Kevin"
  );

  let contenAbout = changeLanguage();


}
