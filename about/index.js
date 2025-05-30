function changeLanguageAbout(lang) {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  fillContentAbout();
  // window.location.reload(); // Uncomment if you want to reload the page after changing language
}