let express = require("express");
let app = express();
let tareasRoutes = require("./routes/tareas");

app.use(express.json());
app.use("/tareas", tareasRoutes);

app.listen(4000, () => {
  console.log("Servidor corriendo en el puerto 4000");
});
