import express from "express";
import * as algebra from 'algebra.js';

export const router = express.Router();

router.get("/", (_req: express.Request, res: express.Response) => {
  res.render("app", { a: "", p: "" });
});

router.post("/", (req: express.Request, res: express.Response) => {
  const prob = req.body.prob;
  const rp = prob.split("=")[0];
  const rs = prob.split("=")[1];

  var expr = new algebra.Expression(rp);
  var eq = new algebra.Equation(expr, Number(rs));
  var x = eq.solveFor("x");

  res.render("app", { a: `x = ${x.toString()}`, p: prob });
});