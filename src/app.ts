import express from "express";

const PORT = 3000;
const sayHello = () => console.log(`Servidor encendido en el puerto ${PORT}`);
const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  console.log("Alguien hizo ping");
  return res.send("Hola ping");
});

app.listen(PORT, sayHello);
