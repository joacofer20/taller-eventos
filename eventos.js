
const elementoDiv = document.querySelector("div");

function evento(){
    event.stopPropagation();
    alert('Hola! Soy el div')
}

elementoDiv.addEventListener("click", evento);

