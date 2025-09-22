function changeLanguageContact(lang) {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  fillContentAbout();
}

const PARAMID = "type";
const docSearch = document.location.search;
const CONTENT_ID = new URLSearchParams(docSearch).get(PARAMID);

const typePartner = document.getElementById("type-partner");
const typeStudent = document.getElementById("type-student");
if (CONTENT_ID == "partner") {
  typePartner.style.display = "block";
  typeStudent.style.display = "none";
}
if (CONTENT_ID == "student") {
  typePartner.style.display = "none";
  typeStudent.style.display = "block";
}
