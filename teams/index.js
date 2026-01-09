let teamItems = document.querySelectorAll(".team-item");

let num = 15;
for (let i = 0; i < teamItems.length; i++) {
  const e = teamItems[i];
  e.style.top = `${num + i + i}vh`;
}

let images = [
  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
  "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",

  "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
  "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",

  "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
  "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg",
  "https://avatars.githubusercontent.com/u/44408822?s=400&u=1c9af48823df6e99bf630faf7d57d583330861be&v=4",
];

let row = document.getElementsByClassName("team-item");
for (let i = 0; i < row.length; i++) {
  row[i].style.backgroundImage = `
    url('${images[i]}')
  `;
}
