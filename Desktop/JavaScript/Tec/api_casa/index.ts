import express from "express"
import { HouseHandler } from "./src/handler/hosueHandler";

const app = express();
const PORT = 3000;

const houseHandler = new HouseHandler();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
      const houses = await houseHandler.getHouses();
      res.send(houses);
  } catch (error) {
      res.status(500).send({ error: "Error fetching houses" });
  }
});

  app.listen(PORT, () => {
    console.log("Servidor corriendo en http://localhost:3000");
  });