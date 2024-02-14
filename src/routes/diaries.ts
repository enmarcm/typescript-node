import { Router } from "express";

const diariesRouter = Router();

diariesRouter.get("/", (_req, res) => {
  return res.send("Fetching all entry diaries");
});

diariesRouter.get("/", (_req, res) => {
  return res.send("Saving a new entry diary");
});

export default diariesRouter;
