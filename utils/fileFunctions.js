 import { readFile } from 'fs/promises';


export async function plugFileIntoArray(filename) {
  try {
    const data = await readFile(filename, "utf8");
    return data
  } catch (error) {
    console.error("Error reading file:", error);
    throw error
  }
}
