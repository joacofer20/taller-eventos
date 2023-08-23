
const elementoDiv = document.querySelector("div");
const boton = document.getElementById("button");

function cboton(event) {
    event.stopPropagation();
    alert('Hola!');
}


boton.addEventListener('click', cboton);

elementoDiv.addEventListener('click', () => {
  alert('Hola! Soy el div');
});