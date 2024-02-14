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


// this year 
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();