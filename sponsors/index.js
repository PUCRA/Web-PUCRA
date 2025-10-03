function changeLanguageSponsors(lang) {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  fillContentAbout();
}

const PUCRA_Sponsors = document.getElementById("PUCRA_sponsors");
const PUCRA_benefits = document.getElementById("sponsor_benefits");
