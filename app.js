// ---------- header |start| ----------

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const navUserName = document.querySelector(".user-name");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

// Retrieve the query parameters from the URL
let params = new URLSearchParams(window.location.search);

// Retrieve the data from the query parameters
let data = decodeURIComponent(params.get("data"));

data = localStorage.getItem("user");
let parsedData = JSON.parse(data)
console.log(data)
console.log(parsedData)
console.log(parsedData.userName)



navUserName.innerText = parsedData.userName? String(parsedData.userName) : "unknown user";
// ---------- header |end| ----------
