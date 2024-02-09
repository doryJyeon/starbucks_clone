// search
const searchBox = document.querySelector("#searchBox");
const searchInput = searchBox.querySelector("input");

searchBox.addEventListener("click", () => {
  searchInput.focus();
  searchBox.classList.add("focused");
  searchInput.setAttribute("placeholder", "search");
});

searchInput.addEventListener("blur", () => {
  searchBox.classList.remove("focused");
  searchInput.setAttribute("placeholder", "");
});

//header hide
const badgeBox = document.querySelector("header .badges");

window.addEventListener("scroll",_.throttle(() => {
  window.scrollY > 500
    ? gsap.to(badgeBox, 0.4, { opacity: 0, display: "none" })
    : gsap.to(badgeBox, 0.4, { opacity: 1, display: "block" });
}, 300));

//fade-in
const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

// Swiper
// notice
new Swiper(".notice_line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true
});
// promotion
new Swiper(".promotion .swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 5000
  },
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    pervEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

// promotion hide
const promotionEl = document.querySelector(".promotion");
const promotionBtn = document.querySelector(".toggle-ptomotion");
let promotionToggle = false;
promotionBtn.addEventListener("click", () => {
  promotionToggle = !promotionToggle;
  promotionToggle
  ? promotionEl.classList.add('hide')
  : promotionEl.classList.remove('hide');
});


// youtube floating
function floatingObj(selector, delay, size) {
  gsap.to(selector, delay, {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: delay
  });
}
floatingObj(".floating1", 1, 15);
floatingObj(".floating2", 0.5, 15);
floatingObj(".floating3", 1.5, 20);
