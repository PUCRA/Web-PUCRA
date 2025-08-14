function changeLanguageVexThon(lang) {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  fillContentVexthon();
}
