let OurForm = document.getElementById("OurForm");
let ToDo = document.getElementById("ToDo");
let TheInput = document.getElementById("TheInput");

OurForm.addEventListener("submit", e => {
  e.preventDefault();
  createItem(TheInput.value);
});

function createItem(x) {
  let ourWrap = `<li> ${x} <button onclick ="delItem(this)">Remove</button></li>`;
  ToDo.insertAdjacentHTML("beforeend", ourWrap);
  TheInput.value = "";
  TheInput.focus();
}

function delItem(elementToDelete) {
  elementToDelete.parentElement.remove();
}
