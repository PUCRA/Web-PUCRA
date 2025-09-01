function changeLanguageAbout(lang) {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  fillContentAbout();
  // window.location.reload(); // Uncomment if you want to reload the page after changing language
}

const timelineHistory = document.getElementById("timeline-historys");
const timelineCompetition = document.getElementById("timeline-competitions");
const historyBtn = document.getElementById("historyBtn");
const competitionBtn = document.getElementById("competitionsBtn");


function showCompetition() {
  timelineHistory.style.display = "none";
  timelineCompetition.style.display = "flex";
  historyBtn.style.opacity = 0.4;
  competitionBtn.style.opacity = 1;
}

function showHistory() {
  timelineCompetition.style.display = "none";
  timelineHistory.style.display = "flex";
  historyBtn.style.opacity = 1;
  competitionBtn.style.opacity = 0.4;
}

