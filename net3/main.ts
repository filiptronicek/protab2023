import { promisify } from 'util';
import { pipeline } from 'stream';
import { createBrotliDecompress } from 'zlib';
import fs from 'fs';

const streamPipeline = promisify(pipeline);

async function findStringInCompressedFile(filepath: string) {
  await streamPipeline(fs.createReadStream(filepath), createBrotliDecompress(), fs.createWriteStream('decompressed.html'));

  fs.readFile('decompressed.html', 'utf8', (err, data) => {
    if (err) {
      console.error("An error occurred while reading the file.");
      throw err;
    }

    if (data.includes("heslo je")) {
      console.log("String found");
    } else {
      console.log("String not found");
    }
  });
}

// Call the function with the local file path
const filepath = './a.br';
findStringInCompressedFile(filepath);
