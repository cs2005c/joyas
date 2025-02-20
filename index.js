const express = require("express");
const { obtenerjoyas } = require("./consultas");

// const cors = require("cors"); // Llamo o requiero cors
const app = express();
app.use(express.json()); // Midelware permite que las peticiopnes se manejen en formato Json

//app.use(cors()); // Acá lo llamo para ser usado y permita la comunicación de requerimientos entre módulos
app.listen(3000, console.log("Servidor Escuchando..."));

app.get("/joyas", async (req, res) => {
  const strconsulta = req.query;
  const lasjoyas = await obtenerjoyas(strconsulta);
  res.json(lasjoyas);
});

/* app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  await eliminapost(id);
  //res.send("Post Elimimado :", id);
});

// Realizamos una llamada PUT para traer los valores a modificar y actualizaar los  LIKE
app.put("/posts/like/:id", async (req, res) => {
  const { id } = req.params;
  //const { likes } = req.query;
  await modificapost(id);
  res.send("Likes Actualizado");
});


app.post("/posts", async (req, res) => {
  const { titulo, imgSrc, descripcion, likes } = req.body;
  await agregapost(titulo, imgSrc, descripcion);
  res.send("post Agregado via API/REST");
}); */
