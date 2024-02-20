import { Router } from "express";
import * as diaryServices from "../services/diariesServices";

const diariesRouter = Router();

diariesRouter.get("/", (_req, res) => {
  // return res.send("Fetching all entry diaries");
  return res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

diariesRouter.get("/:id", (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id));
  if (diary) {
    return res.send(diary);
  } else {
    return res.status(404).send("Diary not found");
  }
});

diariesRouter.get("/", (_req, res) => {
  return res.send("Saving a new entry diary");
});

export default diariesRouter;
