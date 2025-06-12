const form = document.getElementById("contactForm");
const lista = document.getElementById("listaContactos");
const organizar = document.getElementById("botonOrganizar");
const mostrar5 = document.getElementById("mostrar5");
const mostrar10 = document.getElementById("mostrar10");
const mostrar15 = document.getElementById("mostrar15");

mostrar5.addEventListener("click", () => mostrarContactos(5));
mostrar10.addEventListener("click", () => mostrarContactos(10));
mostrar15.addEventListener("click", () => mostrarContactos(15));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validarTelefono()) {
    const error = document.getElementById("telefonoError");
    error.textContent =
      "Por favor introduce un número de teléfono válido (10 dígitos).";
    error.style.display = "inline";
  } else {
    let contactInfo = {
      nombre: document.getElementById("nombre").value,
      correo: document.getElementById("correo").value,
      telefono: document.getElementById("telefono").value,
    };

    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    contactos.push(contactInfo);
    localStorage.setItem("contactos", JSON.stringify(contactos));
    form.reset();
  }
  mostrarContactos();
});

function mostrarContactos(limite) {
  let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
  lista.innerHTML = "";
  if (limite) {
    contactos = contactos.slice(0, limite);
  }
  contactos.forEach((c, i) => {
    const card = document.createElement("div");
    card.textContent = `${c.nombre} - ${c.correo} -${c.telefono}`;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = `Eliminar contacto`;
    card.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.textContent = `Editar contacto`;
    card.appendChild(editButton);

    lista.appendChild(card);

    deleteButton.addEventListener("click", () => {
      eliminarContacto(i);
    });

    editButton.addEventListener("click", () => {
      const nombreInput = document.createElement("input");
      const correoInput = document.createElement("input");
      const telefonoInput = document.createElement("input");
      const editarSubmit = document.createElement("button");
      nombreInput.id = "editarNombre";
      correoInput.id = "editarCorreo";
      telefonoInput.id = "editarTelefono";
      editarSubmit.textContent = "Guardar";

      card.appendChild(nombreInput);
      card.appendChild(correoInput);
      card.appendChild(telefonoInput);
      card.appendChild(editarSubmit);

      editarSubmit.addEventListener("click", () => {
        editarContacto(i);
      });
    });
  });
}

function eliminarContacto(index) {
  let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
  if (index >= 0 && index < contactos.length) {
    contactos.splice(index, 1);
    localStorage.setItem("contactos", JSON.stringify(contactos));
    mostrarContactos();
  } else {
    console.log("Index fuera del rango.");
  }
}

function validarTelefono() {
  const telefono = document.getElementById("telefono").value;
  const patron = /^[0-9]{10}$/;
  let telefonoValido = true;
  if (!telefono || !patron.test(telefono)) {
    telefonoValido = false;
  }
  return telefonoValido;
}

function organizarAlfabeticamente() {
  let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
  contactos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  localStorage.setItem("contactos", JSON.stringify(contactos));
  mostrarContactos();
}

function editarContacto(index) {
  let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
  if (index >= 0 && index < contactos.length) {
    contactos[index].nombre = document.getElementById("editarNombre").value;
    contactos[index].correo = document.getElementById("editarCorreo").value;
    contactos[index].telefono = document.getElementById("editarTelefono").value;
    localStorage.setItem("contactos", JSON.stringify(contactos));
    mostrarContactos();
  } else {
    console.log("Index fuera del rango.");
  }
}

mostrarContactos();

// funcionalidades a añadir
// eliminar contactos
// validacion (nombre al menos 2 caracteres, telefono solo numeros)
// ordenar los contactos alfabeticamente por su nombre
// opcion de mostrar 5 contactos, 10 contactos, 15 contactos
// editar un contacto
