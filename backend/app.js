import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import express, { Router } from "express";
import mongoose from "mongoose";
import route from "./routes/index.js";

const app = express();
app.use(cors({ origin: "http://localhost:4200" }));
app.use(bodyParser.json());
app.use("/query", route.query);
app.use("/", (req, res) => {
  res.sendStatus(400);
});
//app.use("/user", route.user);
app.use(
  "/",
  Router().get("/", (req, res) => {
    res.json({ success: true });
  })
);



// connect with the mongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017", { dbName: "BuilderDB" })
  //   .connect(
  //     "mongodb+srv://rishabmongo:oHOcUZMWMieBlvjw@codeversedb.ypr3fsl.mongodb.net/?retryWrites=true&w=majority&appName=CodeVerseDB"
  //   )
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

app.listen(3000, () => console.log(`Server started at port: ${3000}`));

export const formateData = (data) => {
  if (data) {
    return { success: true };
  } else {
    throw new Error("Data Not found!");
  }
};
