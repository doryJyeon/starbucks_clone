const searchBox = document.querySelector("#searchBox");
const searchInput = searchBox.querySelector("input");

searchBox.addEventListener("click", function () {
  searchInput.focus();
  searchBox.classList.add("focused");
  searchInput.setAttribute("placeholder", "search");
});

searchInput.addEventListener("blur", () => {
  searchBox.classList.remove("focused");
  searchInput.setAttribute("placeholder", "");
});
