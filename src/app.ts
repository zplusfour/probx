import express from "express";
import { resolve } from "equation-resolver";
import { parse } from "equation-parser";

export const router = express.Router();

router.get("/", (_req: express.Request, res: express.Response) => {
  res.render("app", { a: "", p: "" });
});

router.post("/", (req: express.Request, res: express.Response) => {
  const prob = req.body.prob;
  var rp = prob.split("=")[0]; // equation
  var rs = prob.split("=")[1]; // result

  var a = "";
  if (rp.split("").includes("x")) {
    var maxi_n = 9999;
    var arr: number[] = [];

    for (let i = 1; i < maxi_n; i++) {
      arr.push(i);
    }

    for (var n of arr) {
      
    }
  } else {
    a = "This is not a math problem!";
  }

  res.render("app", { a, p: prob });
});
