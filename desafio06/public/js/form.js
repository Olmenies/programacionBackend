// Constants
const productsForm = document.getElementById("productsForm");
const formTitleInput = document.getElementById("formTitleInput");
const formPriceInput = document.getElementById("formPriceInput");
const formImageInput = document.getElementById("formImageInput");
const prodsTbody = document.getElementById('prodsTbody');

// Functions
const addProductRow = (data) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${data.title}</td>
    <td>${data.price}</td>
    <td><img src=${data.image} /></td>
  `
  prodsTbody.appendChild(tr);
}

// Events
productsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // TODO: use a .foreach to un-hardcode this
  const prod = {
    title: formTitleInput.value,
    price: formPriceInput.value,
    image: formImageInput.value,
  };

  console.log(prod);

  socket.emit("prodsFormSubmitted", prod);
});

// Sockets
socket.on("updateProdsTable", (data) => {
  addProductRow(data);
});
