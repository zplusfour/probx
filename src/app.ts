import express from "express";
import { resolve } from "equation-resolver";
import { parse } from "equation-parser";

const router = express.Router();

router.get("/", (_req: express.Request, res: express.Response) => {
  res.render("app", { a: "", p: "" });
});

router.post("/", (req: express.Request, res: express.Response) => {
  const prob = req.body.prob;
  const rp = prob.split("=")[0];
  const rs = prob.split("=")[1];
  
  let a;
  res.render("app", { a, p: prob });
});

export default router;
