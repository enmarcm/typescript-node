import express from "express";
import pc from "picocolors";
import diariesRouter from "./routes/diaries";

const PORT = 3000;
const sayHello = () =>
  console.log(
    pc.bgBlack(pc.green(`Servidor encendido en el puerto ${PORT} 🚀`))
  );
const app = express();

app.use(express.json());

app.get("/ping", (_req, res) => {
  console.log(pc.bgBlack(pc.green("Alguien hizo ping")));
  return res.send("Hola ping 🏓");
}); 

app.use("/api/diaries", diariesRouter);

app.listen(PORT, sayHello);


