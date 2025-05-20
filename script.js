const contenedor = document.getElementById("contenedorPersonajes");

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    return response.json();
  })
  .then((personajes) => {
    personajes.results.forEach((personaje) => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `<strong>${personaje.name}</strong> <p>${personaje.gender}</p> <img src="${personaje.image}">`;
      contenedor.appendChild(div);
    });
  })
  .catch((error) => {
    console.error("Error al hacer la peticion", error);
  });
