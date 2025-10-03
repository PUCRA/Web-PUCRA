const startEvent = {
  day: 28,
  month: 4,
  year: 2026,
  hour: 17,
  minute: 15,
  second: 0,
};

const endEvent = {
  day: 28,
  month: 4,
  year: 2026,
  hour: 17,
  minute: 48,
  second: 0,
};

setInterval(updateCountdown, 1000);
updateCountdown();

function pad(num) {
  return String(num).padStart(2, "0");
}

// Devuelve { years, months, days, hours, minutes, seconds }
// Si target <= now devuelve null
function diffDateParts(now, target) {
  if (target <= now) return null;

  let y = target.getFullYear() - now.getFullYear();
  let m = target.getMonth() - now.getMonth();
  let d = target.getDate() - now.getDate();
  let h = target.getHours() - now.getHours();
  let min = target.getMinutes() - now.getMinutes();
  let s = target.getSeconds() - now.getSeconds();

  if (s < 0) {
    s += 60;
    min -= 1;
  }
  if (min < 0) {
    min += 60;
    h -= 1;
  }
  if (h < 0) {
    h += 24;
    d -= 1;
  }
  if (d < 0) {
    const daysInPrevMonth = new Date(
      target.getFullYear(),
      target.getMonth(),
      0
    ).getDate();
    d += daysInPrevMonth;
    m -= 1;
  }
  if (m < 0) {
    m += 12;
    y -= 1;
  }

  return { years: y, months: m, days: d, hours: h, minutes: min, seconds: s };
}

function updateCountdown() {
  const monthEl = document.getElementById("month");
  const dayEl = document.getElementById("day");
  const hourEl = document.getElementById("hour");
  const minuteEl = document.getElementById("minute");
  const secondsEl = document.getElementById("seconds");

  const monthParent = document.getElementById("month-parent");
  const dayParent = document.getElementById("day-parent");
  const hourParent = document.getElementById("hour-parent");
  const minuteParent = document.getElementById("minute-parent");
  const secondsParent = document.getElementById("seconds-parent");

  const now = new Date();

  const targetStart = new Date(
    startEvent.year,
    startEvent.month - 1,
    startEvent.day,
    startEvent.hour,
    startEvent.minute,
    startEvent.second
  );

  const targetEnd = new Date(
    endEvent.year,
    endEvent.month - 1,
    endEvent.day,
    endEvent.hour,
    endEvent.minute,
    endEvent.second
  );

  // Evento finalizado
  if (now >= targetEnd) {
    document.getElementById("countdown-end").style.display = "none";
    document.getElementById("event-info").innerText = "El evento ha terminado.";
    monthEl.innerText =
      dayEl.innerText =
      hourEl.innerText =
      minuteEl.innerText =
      secondsEl.innerText =
        "00";
    // ocultar todos los padres (o mantener visual según prefieras)
    monthParent.style.display = "none";
    dayParent.style.display = "none";
    hourParent.style.display = "none";
    minuteParent.style.display = "none";
    secondsParent.style.display = "none";
    return;
  }

  // Evento en curso: mostrar duringText y contador hasta el final
  if (now >= targetStart && now < targetEnd) {
    document.getElementById("countdown-end").style.display = "none";
    document.getElementById("event-info").innerText =
      "El evento está en curso.";
    const parts = diffDateParts(now, targetEnd);
    if (!parts) return;

    // decide qué 3 contadores mostrar según regla
    displayThreeCounters(
      parts,
      monthParent,
      dayParent,
      hourParent,
      minuteParent,
      secondsParent,
      monthEl,
      dayEl,
      hourEl,
      minuteEl,
      secondsEl
    );
    return;
  }

  // Antes del evento: countdown al inicio
  const parts = diffDateParts(now, targetStart);
  if (!parts) {
    document.getElementById("event-info").innerText =
      "El evento ha comenzado o la fecha no es válida.";
    return;
  }

  // Mostrar contadores según regla
  displayThreeCounters(
    parts,
    monthParent,
    dayParent,
    hourParent,
    minuteParent,
    secondsParent,
    monthEl,
    dayEl,
    hourEl,
    minuteEl,
    secondsEl
  );
}

// Función que decide y actualiza visualmente los 3 contadores según tus reglas
function displayThreeCounters(
  parts,
  monthParent,
  dayParent,
  hourParent,
  minuteParent,
  secondsParent,
  monthEl,
  dayEl,
  hourEl,
  minuteEl,
  secondsEl
) {
  // calcular meses totales incluyendo años
  const totalMonths = (parts.years || 0) * 12 + (parts.months || 0);

  // Caso 1: si hay meses (>0): mostrar mes, día, hora
  if (totalMonths > 0) {
    monthParent.style.display = "";
    dayParent.style.display = "";
    hourParent.style.display = "";
    minuteParent.style.display = "none";
    secondsParent.style.display = "none";

    monthEl.innerText = pad(totalMonths);
    dayEl.innerText = pad(parts.days);
    hourEl.innerText = pad(parts.hours);
    // rellenos opcionales
    minuteEl.innerText = "00";
    secondsEl.innerText = "00";
    return;
  }

  // Caso 2: meses == 0 y días > 0: mostrar día, hora, minutos
  if ((parts.days || 0) > 0) {
    monthParent.style.display = "none";
    dayParent.style.display = "";
    hourParent.style.display = "";
    minuteParent.style.display = "";
    secondsParent.style.display = "none";

    dayEl.innerText = pad(parts.days);
    hourEl.innerText = pad(parts.hours);
    minuteEl.innerText = pad(parts.minutes);
    // rellenos opcionales
    monthEl.innerText = "00";
    secondsEl.innerText = "00";
    return;
  }

  // Caso 3: días == 0: mostrar hora, minutos, segundos
  monthParent.style.display = "none";
  dayParent.style.display = "none";
  hourParent.style.display = "";
  minuteParent.style.display = "";
  secondsParent.style.display = "";

  hourEl.innerText = pad(parts.hours);
  minuteEl.innerText = pad(parts.minutes);
  secondsEl.innerText = pad(parts.seconds);
  // rellenos opcionales
  monthEl.innerText = "00";
  dayEl.innerText = "00";
}
