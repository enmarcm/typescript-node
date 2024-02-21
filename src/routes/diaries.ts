import { Router } from "express";
import * as diaryServices from "../services/diariesServices";

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
  const { date, weather, visibility, comment } = req.body;

  const newDiaryEntry = diaryServices.addEntry({
    date,
    weather,
    visibility,
    comment,
  });
  return res.send(`Se agrego ${newDiaryEntry}`);
});

export default diariesRouter;
