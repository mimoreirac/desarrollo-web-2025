console.log("Test");

let age = 29;
let nombre = "John SMith";
let hobbies = ["Gaming"];

let element = document.querySelector("h1");
let button = document.querySelector("button");
let elementoParrafo = document.querySelector("p");
let titulos = document.querySelectorAll("h1");

let contador = document.querySelector(".numero-contador");
let botonContador = document.querySelector(".boton-contador");
let botonResta = document.querySelector(".boton-resta");

button.addEventListener("click", () => {
  titulos[0].textContent = "elemento 1";
  titulos[1].textContent = "elemento 2";
  console.log("CLICK");
  //   element.textContent = nombre;
  elementoParrafo.classList.add("active");
});

let i = 0;

botonContador.addEventListener("click", () => {
  i++;
  contador.textContent = i;
});

botonResta.addEventListener("click", () => {
  i--;
  contador.textContent = i;
});

let createBtnButton = document.querySelector(".create-btn");

let elementosCreados = [];

createBtnButton.addEventListener("click", () => {
  let newElement = document.createElement("p");
  newElement.textContent = "Esto es un p generado programaticamente";
  elementosCreados.push(newElement);
  document.querySelector("main").appendChild(newElement);
});

let removeBtnButton = document.querySelector(".remove-btn");

removeBtnButton.addEventListener("click", () => {
  let elementoABorrar = elementosCreados.pop();
  document.querySelector("main").removeChild(elementoABorrar);
});