import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";
//DOM
let ul = document.querySelector("ul");
let formMsg = document.querySelector("#form_message");
let inputMsg = document.querySelector("#message");
let formUserName = document.getElementById("form_username");
let inputUsername = document.getElementById("username");
let nav = document.querySelector("nav");
let divMsg = document.getElementById("divMessage");
let divUsername = document.getElementById("divUsername");
let validator = false;

//check localStorage
let username = "anonymus";
if (localStorage.username) {
  localStorage.setItem("username", username);
}
if (localStorage.getItem("room") === null) {
  localStorage.setItem("room", "#general");
}

//instance
let room = localStorage.getItem("room");
let chatroom = new Chatroom(room, username);
let chatUI = new ChatUI(ul);

//messages on page
chatroom.getChats((data) => {
  if (validator === false) {
    chatUI.templateLI(data, "left");
  } else if (validator === true) {
    chatUI.templateLI(data, "right");
  }
});

// display messages by room
let lastClickedButton;
nav.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    let room = e.target.textContent;
    let button = e.target;
    chatUI.clearUL();
    chatroom.updateRoom(room);

    localStorage.setItem("room", room);
    if (lastClickedButton) {
      lastClickedButton.style.backgroundColor = "";
    }
    // Set the background color of the current clicked button
    button.style.backgroundColor = "rgb(238, 219, 113)";
    // Store the reference to the current clicked button
    lastClickedButton = button;
    // e.target.style.backgroundColor = "red";
    chatroom.getChats((data) => {
      chatUI.templateLI(data);
    });
  }
});

//form message
formMsg.addEventListener("submit", (e) => {
  e.preventDefault();
  let message = inputMsg.value;
  if (!message.trim().length == 0) {
    chatroom
      .addChat(message)
      .then(() => formMsg.reset())
      .catch((err) => console.log(err));
  } else {
    divMsg.textContent = "Invalid input";

    setTimeout(() => {
      divMsg.textContent = "";
    }, 1000);
  }
});

//form update username
formUserName.addEventListener("submit", (e) => {
  e.preventDefault();
  let newUsername = inputUsername.value;
  if (validator == false) {
    validator = true;
  } else {
    validator = false;
  }
  localStorage.setItem("validator", validator);

  if (!newUsername.trim().length == 0) {
    chatroom.username = newUsername;
    //alert
    if (localStorage.username != "anonymus") {
      divUsername.textContent = ` Username updated: ${newUsername}`;
    }
    setTimeout(() => {
      divUsername.textContent = "";
    }, 3000);
    clearTimeout();
    formUserName.reset();
  } else {
    divUsername.textContent = "Invalid input";
    setTimeout(() => {
      divUsername.textContent = "";
    }, 1000);
  }
});
