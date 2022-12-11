console.log("I'm chat.js on client");

const socket = io();

// HTML DOM elements
const messageForm = document.getElementById("messageForm");
const inputMessage = document.getElementById("inputMessage");
const submitMessage = document.getElementById("submitMessage");
const chatMessages = document.getElementById("chatMessages");

// Functions
const addMessageToChat = (dataBroadcasted) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <span>${dataBroadcasted.user} dice: </span>
    <span>${dataBroadcasted.msg}</span/>
  `;
  chatMessages.appendChild(div);
};

const addUserJoined = (newUser) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <span>${newUser} acaba de entrar al chat.</span>
  `;
  chatMessages.appendChild(div);
};

// Events
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  socket.emit("messageToServer", inputMessage.value);
  inputMessage.value = "";
});

// Websockets listeners
socket.on("broadcastMessage", (dataBroadcasted) => {
  addMessageToChat(dataBroadcasted);
});

socket.on("newClientJoinedRoom", (newUser) => {
  addUserJoined(newUser);
});
