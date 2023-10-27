import dotenv from "dotenv";
dotenv.config();
//console.log(process.env) // remove this after you've confirmed it is working
import { getManga,getMangas,createManga } from "./handler/handler.js";

const PORT = process.env.PORT || 5000
const HOST = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0'
import express from "express"
const app = express()

app.use(express.json());

app.get("/mangas", async (req,res) => {
  const mangas = await getMangas();
  res.json(mangas);
})

app.get("/mangas/:id", async (req,res) => {
  const id = req.params.id;
  const manga = await getManga(id);
  res.send(manga);
})

app.post("/mangas", async (req,res) => {
  const {first_name, last_name} = req.body;
  const manga = await createManga(first_name, last_name);
  res.status(201).send(manga);
})

app.listen(PORT, HOST, () => {
  console.log(`Running on ${HOST}:${PORT}.`)
})
