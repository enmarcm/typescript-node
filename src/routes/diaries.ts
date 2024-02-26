import { Router } from "express";
import * as diaryServices from "../services/diariesServices";
import toNewDiaryEntry from "../utils";

const diariesRouter = Router();

diariesRouter.get("/", (_req, res) => {
  return res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

diariesRouter.get("/:id", (req, res) => {
  const diary = diaryServices.findById(Number(req.params?.id));

  return diary ? res.send(diary) : res.status(404).send("Diary not found");
});

diariesRouter.get("/", (_req, res) => {
  return res.send("Saving a new entry diary");
});

diariesRouter.post("/", (req, res) => {

  try {
    
  } catch (error) {
    return res.status(400).send({error: `Existio un error ${error}`});
  }

  // const { date, weather, visibility, comment } = req.body;

  const newDiaryEntry = toNewDiaryEntry(req.body)

  const addedDiaryEntry = diaryServices.addEntry(newDiaryEntry)

  return res.send(`Se agrego ${addedDiaryEntry}`);
});

export default diariesRouter;
