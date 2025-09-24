function pad(num) {
  return num.toString().padStart(2, "0");
}
function countdownTo(targetDate) {
  const now = new Date();
  const target = new Date(targetDate);

  // Convertir fechas a Unix timestamp (segundos)
  let nowUnix = Math.floor(now.getTime() / 1000);
  let targetUnix = Math.floor(target.getTime() / 1000);

  let secondsLeft = targetUnix - nowUnix;

  if (secondsLeft <= 0) {
    return "¡La fecha ya ha pasado!";
  }

  // Calcular años bisiestos y ajustar meses/días
  let current = new Date(now);
  let years = 0;
  while (
    current.getFullYear() < target.getFullYear() ||
    (current.getFullYear() === target.getFullYear() &&
      current.getMonth() < target.getMonth())
  ) {
    let daysInYear = isLeapYear(current.getFullYear()) ? 366 : 365;
    let secondsInYear = daysInYear * 24 * 60 * 60;

    if (secondsLeft >= secondsInYear) {
      secondsLeft -= secondsInYear;
      years++;
      current.setFullYear(current.getFullYear() + 1);
    } else {
      break;
    }
  }

  // Calcular meses
  let months = 0;
  while (
    current.getFullYear() < target.getFullYear() ||
    (current.getFullYear() === target.getFullYear() &&
      current.getMonth() < target.getMonth())
  ) {
    let daysInMonth = new Date(
      current.getFullYear(),
      current.getMonth() + 1,
      0
    ).getDate();
    let secondsInMonth = daysInMonth * 24 * 60 * 60;

    if (secondsLeft >= secondsInMonth) {
      secondsLeft -= secondsInMonth;
      months++;
      current.setMonth(current.getMonth() + 1);
    } else {
      break;
    }
  }

  // Calcular días, horas, minutos y segundos restantes
  const days = Math.floor(secondsLeft / (24 * 60 * 60));
  secondsLeft -= days * 24 * 60 * 60;

  const hours = Math.floor(secondsLeft / (60 * 60));
  secondsLeft -= hours * 60 * 60;

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft - minutes * 60;

  return { years, months, days, hours, minutes, seconds };
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
function updateCountdown() {
  const month = document.getElementById("month");
  const day = document.getElementById("day");
  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");
  const seconds = document.getElementById("seconds");

  const monthParent = document.getElementById("month-parent");
  const dayParent = document.getElementById("day-parent");
  // const hourParent = document.getElementById("hour-parent"); display none not used
  const minuteParent = document.getElementById("minute-parent");
  const secondsParent = document.getElementById("seconds-parent");
  const now = new Date();

  // Date
  let target = "2025-09-30T00:00:00";
  // let target = "2026-04-28T00:00:00";

  let result = countdownTo(target);
  month.innerText = pad(result.months);
  day.innerText = pad(result.days);
  hour.innerText = pad(result.hours);
  minute.innerText = pad(result.minutes);
  seconds.innerText = pad(result.seconds);

  if (
    now.getFullYear() === result.years &&
    now.getMonth() === result.months &&
    now.getDate() === result.days
  ) {
    // Hoy es el día
    month.style.display = "none";
    day.style.display = "none";
    hour.style.display = "none";
    minute.style.display = "none";
    seconds.style.display = "none";
    //  document.getElementById("today-is-the.day").innerText = "¡Hoy es el día!";
    return;
  }

  if (result.months > 0) {
    minuteParent.style.display = "none";
    secondsParent.style.display = "none";
  }

  if (result.days === 0) {
    monthParent.style.display = "none";
    dayParent.style.display = "none";
    return;
  }

  if (result.months === 0) {
    monthParent.style.display = "none";
    secondsParent.style.display = "none";
    return;
  }

  /* output 
result = {
  "years": 1,
  "months": 7,
  "days": 5,
  "hours": 12,
  "minutes": 30,
  "seconds": 20
}
*/
}

// Actualizar cada segundo
setInterval(updateCountdown, 1000);

// Ejecutar al cargar la página
updateCountdown();
