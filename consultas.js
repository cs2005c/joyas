const { Pool } = require("pg");
const format = require("pg-format");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "admin",
  database: "joyas",
  allowExitOnIdle: true,
});

const obtenerjoyas = async ({ limits = 10, order_by = "id_ASC", page = 1 }) => {
  const [campo, orden] = order_by.split("_"); // Acá separamos el campo a oirdenar y el tipo oirden ASC o DESC y se destructura a un arreglo
  const offset = (page - 1) * limits; // para Paginar

  let consulta = format(
    "Select * from inventario order by %s %s LIMIT %s",
    campo,
    orden,
    limits
  ); // UNa QUery Formateada
  const { rows: joyasresultantes } = await pool.query(consulta);
  return joyasresultantes;
};

/* const agregapost = async (titulo, imgSrc, descripcion) => {
  const consulta =
    "INSERT INTO post (titulo, img, descripcion) VALUES ($1, $2, $3)";

  const values = [titulo, imgSrc, descripcion]; // se hace la destructuracion
  const result = await pool.query(consulta, values);

  console.log("post Agregado Correctamente", result.rowCount);
};
const leepostindividual = async (id) => {
  const consulta = "Select * from post where id = $1";
  const value = [id];
  const result = await pool.query(consulta, value);
  console.log(resul);
};

const modificapost = async (id) => {
  const consulta =
    "UPDATE post  set likes = COALESCE(likes, 0) + 1 Where id = $1 ";
  // const values = [likes, id];
  const values = [id];
  const result = await pool.query(consulta, values);
};

const eliminapost = async (id) => {
  const consulta = "DELETE FROM post WHERE id = $1";
  console.log(id);
  const values = [id];
  const result = await pool.query(consulta, values);
  console.log("Paso Por acá");
}; */

// Exporta las ArrowFunction para ser usadas en otros modulos
module.exports = { obtenerjoyas };
