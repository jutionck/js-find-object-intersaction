import * as dotenv from "dotenv";
import { readFile } from "./readFile.js";
dotenv.config();

const path = process.env.FILE_PATH + "data.json";

readFile(path).then((data) => {
  const workingHoursEnd = data[0].workingHoursEnd;
  let count = 1;
  for (const key in data) {
    if (key === 0 && data[key].workingHoursStart <= data[key].workingHoursEnd) {
      count = count + 1;
      continue;
    }

    if (data[count].workingHoursStart <= workingHoursEnd) {
      console.log(
        "key:",
        key,
        "workingHoursStart:",
        data[key].workingHoursStart
      );
    }
  }
});
