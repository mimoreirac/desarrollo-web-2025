let express = require("express");

let app = express();
let port = 4000;

app.get("/", (req, res) => {
  res.send("HOLA DESDE EL SERVIDOR");
});

app.get("/api/contactos", (req, res) => {
  res.json([
    { nombre: "Pepe", correo: "pepe@gmail.com" },
    { nombre: "Daniel", correo: "daniel@gmail.com" },
  ]);
});

app.get("/api/paises", (req, res) => {
  res.json([
    { nombre: "Ecuador", capital: "Quito" },
    { nombre: "Colombia", capital: "Bogota" },
    { nombre: "Argentina", capital: "Buenos Aires" },
  ]);
});

app.listen(port, () => {
  console.log("Servidor corriendo en localhost");
});
