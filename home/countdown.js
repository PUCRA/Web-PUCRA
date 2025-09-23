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
  const monthDom = document.getElementById("month");
  const day = document.getElementById("day");
  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");
  const seconds = document.getElementById("seconds");
  const now = new Date();

  // Date
  let target = "2026-04-28T00:00:00";

  if (now > target) {
    // Si la fecha ya pasó, se pone para el año siguiente
    target.setFullYear(target.getFullYear() + 1);
  }

  let result = countdownTo(target);

  if (
    now.getFullYear() === result.years &&
    now.getMonth() === result.months &&
    now.getDate() === result.days
  ) {
    // Hoy es el día
    monthDom.style.display = "none";
    day.style.display = "none";
    hour.style.display = "none";
    minute.style.display = "none";
    seconds.style.display = "none";
    document.getElementById("today-is-the.day").innerText = "¡Hoy es el día!";
    return;
  }

  if (result.months > 0) {
    monthDom.innerText = result.months;
    day.innerText = result.days;
    hour.innerText = result.hours;
    minute.style.display = "none";
    seconds.style.display = "none";
  }

  if (result.days === 0) {
    monthDom.style.display = "none";
    day.style.display = "none";
    hour.innerText = result.hours;
    minute.innerText = result.minutes;
    seconds.innerText = result.seconds;
    return;
  }

  if (result.months === 0) {
    monthDom.style.display = "none";
    day.innerText = result.days;
    hour.innerText = result.hours;
    minute.innerText = result.minutes;
    seconds.style.display = "none";
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
