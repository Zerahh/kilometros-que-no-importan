const letterText = `
No sé en qué momento exacto pasó,
pero en algún punto
empezaste a habitar mis días.

Estás en las canciones,
en las ganas,
en los silencios que no pesan.

La distancia no nos separa,
solo nos está enseñando a esperar.

Y yo espero,
pero sin dudas.

Porque incluso lejos,
sos mi lugar seguro.
`;

const openBtn = document.getElementById("openLetter");
const letter = document.getElementById("letter");
const text = document.querySelector(".letter-text");
const secretBtn = document.getElementById("secretBtn");
const secret = document.getElementById("secret");

let i = 0;

openBtn.addEventListener("click", () => {
  letter.classList.remove("hidden");
  openBtn.style.display = "none";
  typeWriter();
});

function typeWriter() {
  if (i < letterText.length) {
    text.innerHTML += letterText.charAt(i);
    i++;
    setTimeout(typeWriter, 35);
  } else {
    secretBtn.classList.remove("hidden");
  }
}

// Mensaje secreto
secretBtn.addEventListener("click", () => {
  secret.classList.remove("hidden");
  secretBtn.style.display = "none";
});

// Contador de días (CAMBIÁ LA FECHA)
const startDate = new Date("2024-06-01");
const today = new Date();
const diffDays = Math.ceil((today - startDate) / (1000 * 60 * 60 * 24));
document.getElementById("daysTogether").textContent = diffDays;

// Música
const music = document.getElementById("music");
document.getElementById("toggleMusic").addEventListener("click", () => {
  music.paused ? music.play() : music.pause();
});

// Tema día/noche
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("day");
  document.body.classList.toggle("night");
});
