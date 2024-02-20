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

export default diariesRouter;
