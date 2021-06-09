import express from "express";
import * as ejs from "ejs";

import router from "./app";

const app: express.Application = express();
const rocket: string = "異";

app.set("view engine", "html");
app.engine("html", ejs.renderFile);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use("/app", router);

app.get("/", (_req: express.Request, res: express.Response) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log(rocket);
});
