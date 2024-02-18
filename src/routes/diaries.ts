import { Router } from "express";
import * as diaryServices from "../services/diariesServices";

const diariesRouter = Router();

diariesRouter.get("/", (_req, res) => {
  // return res.send("Fetching all entry diaries");
  return res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

diariesRouter.get("/", (_req, res) => {
  return res.send("Saving a new entry diary");
});

export default diariesRouter;
