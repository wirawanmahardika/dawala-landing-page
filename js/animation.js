document.getElementById("nav-toggle").addEventListener("click", (e) => {
  document.getElementById("floated-navbar").classList.toggle("hide-nav");
});

const room1 = document.getElementById("room-1");
const room2 = document.getElementById("room-2");

Array.from([room1, room2]).forEach((r) => {
  const images = r.dataset.images.split(";");
  const next = r.lastElementChild;
  const prev = next.previousElementSibling;
  const canvas = prev.previousElementSibling;

  let current = 0;
  canvas.src = images[current];

  next.addEventListener("click", () => {
    if (current === images.length - 1) current = 0;
    else current++;
    canvas.src = images[current];
  });

  prev.addEventListener("click", () => {
    if (current === 0) current = images.length - 1;
    else current--;
    canvas.src = images[current];
  });
});

function executeTheAboutCounter() {
  const aboutStuffs = document.getElementsByClassName("about-stuff");
  Array.from(aboutStuffs).forEach((d) => {
    const counter = parseInt(d.dataset.count);
    let i = 0;
    const idInterval = setInterval(() => {
      d.textContent = i++;
      if (i === counter + 1) clearInterval(idInterval);
    }, 50);
  });
}

let happened = false;
window.onscroll = function () {
  if (!happened && window.scrollY >= 275 && window.innerWidth >= 768) {
    executeTheAboutCounter();
    happened = true;
  } else if (!happened && window.scrollY >= 246 && window.innerWidth < 768) {
    executeTheAboutCounter();
    happened = true;
  }
};
