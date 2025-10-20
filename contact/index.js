function changeLanguageContact(lang) {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  fillContentAbout();
}

const PARAMID = "type";
const docSearch = document.location.search;
const CONTENT_ID = new URLSearchParams(docSearch).get(PARAMID);

const typePartner = document.getElementById("type-partner");
const typeStudent = document.getElementById("type-student");
const bePartner = document.getElementById("be-a-member");
const beStudent = document.getElementById("be-a-partner");

if (CONTENT_ID == "partner") {
  typePartner.style.display = "block";
  typeStudent.style.display = "none";
  bePartner.style.display = "none";
  beStudent.style.display = "block";
}
if (CONTENT_ID == "student") {
  typePartner.style.display = "none";
  typeStudent.style.display = "block";

  bePartner.style.display = "block";
  beStudent.style.display = "none";
}
