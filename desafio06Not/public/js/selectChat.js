console.log("I'm main.js on client");

const socket = io();

// HTML DOM elements
const selectChat = document.getElementById('selectChat');

// Functions
const selectedChat = (chatName) => {
  socket.emit('selectedChat', chatName);
}

// Events
selectChat.addEventListener("change", (e) => {
  selectedChat(e.target.value);
});

// Websockets listeners