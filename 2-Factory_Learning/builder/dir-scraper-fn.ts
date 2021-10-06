import fs from "fs";

interface IFileReader {
  isJSONFile(filePath: string): boolean;
  readTextFile(filePath: string): string;
  readJSONFile(filePath: string): unknown;
}

const directoryScraper = (dirPath: string, reader: IFileReader) => {
  return fs
    .readdirSync(dirPath)
    .reduce<Record<string, unknown>>((a, fileName) => {
      if (reader.isJSONFile(fileName)) {
        a[fileName] = reader.readJSONFile(`${dirPath}/${fileName}`);
      } else {
        a[fileName] = reader.readTextFile(`${dirPath}/${fileName}`);
      }
      return a;
    }, {});
}

const fileReader: IFileReader = {
  isJSONFile(filePath: string): boolean {
    return filePath.endsWith(".json");
  },
  readTextFile(filePath: string): string {
    return fs.readFileSync(filePath, "utf8").toString();
  },
  readJSONFile(filePath: string): unknown {
    return JSON.parse(fs.readFileSync(filePath, "utf8").toString());
  },
}

const output = directoryScraper("./data", fileReader);

console.log(output);
