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
