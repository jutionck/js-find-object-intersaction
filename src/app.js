import * as dotenv from "dotenv";
import { readFile } from "./readFile.js";
dotenv.config();

const path = process.env.FILE_PATH + "data.json";

readFile(path).then((data) => {
  for (const key in data) {
  }
});
