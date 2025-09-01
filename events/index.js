function changeLanguageEvents(lang) {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  fillContentAbout();
}

const events_container = document.getElementById("events_container");


