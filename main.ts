// SPDX-License-Identifier: MIT
// Round 2 entry: "Visitor Log — Entry 001".
// Writes the invitation image to /output/entry.png, byte-identical to the
// bundled asset. No network, no secrets, no input besides the asset file.
import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const asset = join(here, "assets", "entry.jpg");
const outDir = "/output";
const outFile = join(outDir, "entry.png");

if (!existsSync(asset)) {
  console.error(`asset missing: ${asset}`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(asset, outFile);
console.log(`wrote ${outFile}`);
