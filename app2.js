export const a1 = "Hello World!";
// ---------- sign in |start| ----------
const title = document.querySelector(".title");
const short = document.querySelector(".short");
const signQ = document.getElementById("signQ");
const userName = document.getElementById("userName");
const userPass = document.getElementById("userPass");
const submitBtn = document.getElementById("submitBtn");
const forgot = document.getElementById("forgot");
const form = document.getElementById("form");
const msgUser = document.getElementById("msgUser");
const msgPwd = document.getElementById("msgPwd");
document.querySelectorAll(".msg");
// let localData = JSON.parse(localStorage.getItem("user"));
const popupContainer = document.querySelector(".popup-container");
const popupImg = document.querySelector(".popup-img");
const popupTitle = document.querySelector(".popup-title");
const popupText = document.querySelector(".popup-text");
const popupRemove = document.querySelector(".popup-remove");
const popId = document.getElementById("pop");
const returnBtn = document.querySelector(".return");
let isRepetitive = false;
let conditionIssue = false;
let passRepetitive = false;
let userArrOfObj = JSON.parse(localStorage.getItem("users"));
// ---------- Goes to sign in page |start| ----------
signQ.addEventListener("click", swap);

if (title.innerText == "Sign in") {
  form.addEventListener("submit", signin);  
} else if (title.innerText == "Login") {
  form.addEventListener("submit", login);
}

// ---------- functions |start| ----------

function signin(event) {
  event.preventDefault();
  checkissue();
  console.log("Noooo");
  if (title.innerText == "Sign in") {
    if (userArrOfObj == null) {
      userArrOfObj = [];
      localStorage.setItem("users", JSON.stringify(userArrOfObj));
      console.log("first");
    }
    search();
    if (
      userName.value.length >= 3 &&
      userPass.value.length >= 3 &&
      isRepetitive == false &&
      conditionIssue == false
    ) {
      let getUsers = JSON.parse(localStorage.getItem("users"));
      let newUser = {
        name: userName.value,
        password: userPass.value,
        todos: [],
      };
      userArrOfObj.push(newUser);
      localStorage.setItem("users", JSON.stringify(userArrOfObj));
      popupContainer.classList.value = "";
      popupContainer.style.display = "flex";
      popupContainer.classList.add("show", "succsess-pop");
      popupTitle.innerText = "Succsessful sign in";
      popupImg.src = "img/successfully.png";
      popupText.innerText = "Sign in compeleted";
      setTimeout(() => {
        popupContainer.classList.replace("show", "hide");
      }, 3000);
      window.location.href = "file:///D:/Apps/projects/JS/review/9/todos.html";
      userName.value = "";
      userPass.value = "";
    } else {
      console.log("Error");
    }
  }
}

function login(event) {
  event.preventDefault();
  if (title.innerText == "Login") {
    checkissue();
    search();
    if (
      isRepetitive == true &&
      passRepetitive == true &&
      conditionIssue == false
    ) {
      popupContainer.classList.value = "";
      popupContainer.style.display = "flex";
      popupContainer.classList.add("show", "succsess-pop");
      popupTitle.innerText = "Succsessful login";
      popupImg.src = "img/successfully.png";
      popupText.innerText = "Valid user";
      setTimeout(() => {
        popupContainer.classList.replace("show", "hide");
      }, 3000);
      window.location.href = "file:///D:/Apps/projects/JS/review/9/todos.html";
    } else {
      popupContainer.classList.value = "";
      popupContainer.style.display = "flex";
      popupContainer.classList.add("show", "err-pop");
      popupTitle.innerText = "Error";
      popupImg.src = "img/error.png";
      popupText.innerText = "User doen't exist";
      setTimeout(() => {
        popupContainer.classList.replace("show", "hide");
      }, 3000);
    }
    userName.value = "";
    userPass.value = "";
  }
}

function search() {
  userArrOfObj.forEach((user) => {
    if (user.name == userName.value) {
      isRepetitive = true;
      console.log("isRepetitive = true");
      popupContainer.classList.value = "";
      popupContainer.style.display = "flex";
      popupContainer.classList.add("show", "warn-pop");
      popupTitle.innerText = "Repetitive user";
      popupImg.src = "img/warning.webp";
      popupText.innerText = "User signed in before";
      setTimeout(() => {
        popupContainer.classList.replace("show", "hide");
      }, 3000);
    } else if (user.name != userName.value) {
      isRepetitive = false;
      console.log("isRepetitive = false");
    }
    if (user.password == userPass.value) {
      passRepetitive = true;
      console.log("passRepetitive = true");
    } else if (user.password != userPass.value) {
      passRepetitive = false;
      console.log("passRepetitive = false");
    }
  });
}

function swap() {
  if (title.innerText == "Sign in") {
    title.innerText = "Login";
    short.innerText = "Don't you have an account?";
    signQ.innerText = "Sign in";
    submitBtn.innerText = "LOGIN";
  } else {
    title.innerText = "Sign in";
    short.innerText = "Don you have an account?";
    signQ.innerText = "Login";
    submitBtn.innerText = "SIGN IN";
  }
}

function checkissue() {
  if (userName.value == "" && userPass.value == "") {
    popupContainer.classList.value = "";
    popupContainer.style.display = "flex";
    popupContainer.classList.add("show", "err-pop");
    popupTitle.innerText = "error";
    popupImg.src = "img/error.png";
    popupText.innerText = "Empty name and password";
    setTimeout(() => {
      popupContainer.classList.replace("show", "hide");
    }, 3000);
    conditionIssue = true;
  }
  if (userName.value != "" && userPass.value == "") {
    popupContainer.classList.value = "";
    popupContainer.style.display = "flex";
    popupContainer.classList.add("show", "err-pop");
    popupTitle.innerText = "error";
    popupImg.src = "img/error.png";
    popupText.innerText = "Empty password";
    setTimeout(() => {
      popupContainer.classList.replace("show", "hide");
    }, 3000);
    conditionIssue = true;
  }
  if (userName.value == "" && userPass.value != "") {
    popupContainer.classList.value = "";
    popupContainer.style.display = "flex";
    popupContainer.classList.add("show", "err-pop");
    popupTitle.innerText = "error";
    popupImg.src = "img/error.png";
    popupText.innerText = "Empty user name";
    setTimeout(() => {
      popupContainer.classList.replace("show", "hide");
    }, 3000);
    conditionIssue = true;
  }
  if (
    (userName.value.length < 3 && userName.value.length != "") ||
    (userPass.value.length < 3 && userPass.value.length != "")
  ) {
    popupContainer.classList.value = "";
    popupContainer.style.display = "flex";
    popupContainer.classList.add("show", "warn-pop");
    popupTitle.innerText = "Short input";
    popupImg.src = "img/warning.webp";
    popupText.innerText = "Enter 3 character or more";
    setTimeout(() => {
      popupContainer.classList.replace("show", "hide");
    }, 3000);
    conditionIssue = true;
  } else conditionIssue = false;
}
// ---------- functions |end| ----------

