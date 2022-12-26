// Constants
const chatMessages = document.getElementById("chatMessages");
const messageForm = document.getElementById("messageForm");
const inputEmail = document.getElementById("inputEmail");
const inputMessage = document.getElementById("inputMessage");

// Functions
const addMessageToChat = (dataBroadcasted) => {
  const div = document.createElement("div.message");
  div.innerHTML = `
    <span class='spanEmail'>${dataBroadcasted.email} </span>
    <span class='spanDate'>[${dataBroadcasted.date}] : </span>
    <span class='spanMessage'>${dataBroadcasted.message} </span>
  `;
  console.log(div);
  chatMessages.appendChild(div);
};

// Events
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const message = {
    email: inputEmail.value,
    message: inputMessage.value,
    date: new Date().toLocaleDateString("sp-US", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  };

  socket.emit("sendNewMessage", message);
});

// Sockets
socket.on("broadcastMessage", (socket) => {
  addMessageToChat(socket);
});
