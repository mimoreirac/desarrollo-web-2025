console.log("Test");

let age = 29;
let nombre = "Martin Moreira";
let hobbies = ["Gaming"];

let element = document.querySelector("h1");
let button = document.querySelector("button");
let elementoParrafo = document.querySelector("p");
let titulos = document.querySelectorAll("h1");

let contador = document.querySelector(".numero-contador");
let botonContador = document.querySelector(".boton-contador");

button.addEventListener("click", () => {
  titulos[0].textContent = "elemento 1";
  titulos[1].textContent = "elemento 2";
  console.log("CLICK");
  //   element.textContent = nombre;
  elementoParrafo.classList.add("active");
});

let i = 1;

botonContador.addEventListener("click", () => {
  contador.textContent = i;
  i++;
});
