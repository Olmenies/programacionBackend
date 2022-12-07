console.log('I\'m main.js on client');

const socket = io();

// HTML DOM elements
const messageForm = document.getElementById('messageForm');
const inputMessage = document.getElementById('inputMessage');
const submitMessage = document.getElementById('submitMessage');
const chatMessages = document.getElementById('chatMessages');

const addMessageToChat = (dataBroadcasted) => {
  const div = document.createElement('div');
  div.innerHTML=`
    <span>${dataBroadcasted.user} says: </span>
    <span>${dataBroadcasted.msg}</span/>
  `
  chatMessages.appendChild(div);
}

// Events
messageForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log('I\'m messageForm submit event');
  socket.emit('messageToServer', inputMessage.value);
  inputMessage.value='';
})

// Websockets listeners
socket.on('broadcastMessage', dataBroadcasted => {
  console.log('hola');
  addMessageToChat(dataBroadcasted);
})
