const express = require("express");
require("dotenv").config();

//Crear el servidor de express
const app = express();

//Directorio Publico
app.use(express.static("public"));

//rutas
// app.get("/", (req, res) => {
//   res.json({
//     ok: true,
//   });
// });

//Escuchar Peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor Corriend en puerto ${process.env.PORT}`);
});
