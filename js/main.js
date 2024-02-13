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

// heder showHide & floating icon showHide
const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));

// scroll top
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  })
});

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
// awards
new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    pervEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
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

// Scroll 
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach((spyEl) => {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, 
    triggerHook: .8
  })
  .setClassToggle(spyEl, "show")
  .addTo(new ScrollMagic.Controller());
});

// this year 
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
