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

// const promoImages = [
//   "https://www.static-src.com/siva/asset/05_2024/desktop-car6-acernitro-may10.jpg?w=1200",
//   "https://www.static-src.com/siva/asset/05_2024/desktop-car1-schooliday-may11.jpg?w=1200",
//   "https://www.static-src.com/siva/asset/05_2024/desktop-car3-oto-may11.jpg?w=1200",
//   "https://www.static-src.com/siva/asset/05_2024/desktop-car5-blythe-may11_comp.jpg?w=1200",
// ];

// const promoCanvas = document.getElementById("promo-canvas");
// const slideInfo = document.getElementById("slide-info");

// let currentPromoImage = 0;
// promoImages.forEach((e, i) => {
//   const slideDot = document.createElement("div");
//   slideDot.classList.add(
//     "rounded-full",
//     "size-2",
//     "border",
//     "sm:border-2",
//     "border-black",
//     "md:size-4",
//     "sm:size-3"
//   );

//   if (currentPromoImage === i) slideDot.classList.add("bg-black");
//   slideInfo.appendChild(slideDot);
// });

// document.getElementById("promo-next-btn").addEventListener("click", () => {
//   if (currentPromoImage === promoImages.length - 1) currentPromoImage = 0;
//   else currentPromoImage++;
//   promoCanvas.src = promoImages[currentPromoImage];
//   updateSlideInfo();
// });

// document.getElementById("promo-prev-btn").addEventListener("click", () => {
//   if (currentPromoImage !== 0) currentPromoImage--;
//   else currentPromoImage = promoImages.length - 1;
//   promoCanvas.src = promoImages[currentPromoImage];
//   updateSlideInfo();
// });

// setInterval(() => {
//   if (currentPromoImage === promoImages.length - 1) currentPromoImage = 0;
//   else currentPromoImage++;
//   promoCanvas.src = promoImages[currentPromoImage];
//   updateSlideInfo();
// }, 4000);

// function updateSlideInfo() {
//   const slideInfoChilds = slideInfo.children;
//   for (let i = 0; i < promoImages.length; i++) {
//     if (i === currentPromoImage) {
//       slideInfoChilds[i].classList.add("bg-black");
//     } else {
//       slideInfoChilds[i].classList.remove("bg-black");
//     }
//   }
// }
