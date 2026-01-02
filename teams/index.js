let teamItems = document.querySelectorAll(".team-item");

let num = 15;
for (let i = 0; i < teamItems.length; i++) {
  const e = teamItems[i];
  e.style.top = `${num + i + i}vh`;
}

let images = [
  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
  "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
  "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
  "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
  "https://images.pexels.com/photos/3866555/pexels-photo-3866555.png",
  


];

let row = document.getElementsByClassName("row-first");
console.log(row);

