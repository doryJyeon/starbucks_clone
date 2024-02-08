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
new Swiper(".notice_line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true
});