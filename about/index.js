function changeLanguageAbout(lang) {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  fillContentAbout();
  // window.location.reload(); // Uncomment if you want to reload the page after changing language
}

const timelineHistory = document.getElementById("timeline-historys");
const timelineCompetition = document.getElementById("timeline-competitions");
const historyBtn = document.getElementById("historyBtn");
const competitionBtn = document.getElementById("competitionsBtn");


function showHistory() {
  document.getElementById("timeline-historys").style.display = "flex";
  document.getElementById("timeline-competitions").style.display = "none";
  document.getElementById("timeline-events").style.display = "none";

  document.getElementById("historyBtn").style.opacity = "1";
  document.getElementById("competitionsBtn").style.opacity = "0.7";
  document.getElementById("eventsBtn").style.opacity = "0.7";
}

function showCompetition() {
  document.getElementById("timeline-historys").style.display = "none";
  document.getElementById("timeline-competitions").style.display = "flex";
  document.getElementById("timeline-events").style.display = "none";

  document.getElementById("historyBtn").style.opacity = "0.7";
  document.getElementById("competitionsBtn").style.opacity = "1";
  document.getElementById("eventsBtn").style.opacity = "0.7";
}

function showEvents() {
  document.getElementById("timeline-historys").style.display = "none";
  document.getElementById("timeline-competitions").style.display = "none";
  document.getElementById("timeline-events").style.display = "flex";

  document.getElementById("historyBtn").style.opacity = "0.7";
  document.getElementById("competitionsBtn").style.opacity = "0.7";
  document.getElementById("eventsBtn").style.opacity = "1";
}
