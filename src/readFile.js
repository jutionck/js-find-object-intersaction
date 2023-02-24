import fs from "fs/promises";

async function readFile(path) {
  try {
    const data = await fs.readFile(path, { encoding: "utf8" });
    return JSON.parse(data);
  } catch (err) {
    return err.message;
  }
}

export { readFile };
