var title = document.querySelector("h1");

title.addEventListener("mouseover", function () {
  title.innerText = "Let's PARTY!!";
  title.style.color = "maroon";
});

/*** The section below is for two buttons to switch between light and dark. ***/

// var darkModeButton = document.querySelector(".dark-mode");
// var body = document.querySelector("body");

// darkModeButton.addEventListener("click", function () {
//   body.classList.add("dark-palette");
// });

// var lightModeButton = document.querySelector(".light-mode");

// lightModeButton.addEventListener("click", function () {
//   body.classList.remove("dark-palette");
// });

// This section is for one button to toggle between light and dark mode.
var darkModeButton = document.querySelector(".dark-mode");
var theme = document.querySelector("body");

darkModeButton.addEventListener("click", function () {
  if (theme.classList.contains("dark-palette")) {
    theme.classList.remove("dark-palette");
    darkModeButton.innerText = "Dark Mode";
  } else {
    theme.classList.add("dark-palette");
    darkModeButton.innerText = "Light Mode";
  }
});
