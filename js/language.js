const LANGUAGE_STORAGE_KEY = "lang";

function setLanguage(lang) {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  // window.location.reload();
}

function getLanguage() {
  let mLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (mLanguage !== null) {
    return mLanguage;
  } else {
    setLanguage("es"); // Default to Spanish if no language is set
    return "es"; // Default language
  }
}
