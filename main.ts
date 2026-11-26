// SPDX-License-Identifier: MIT
// Round 2 entry: "Visitor Log — Entry 001".
// Writes the invitation image to /output/entry.png, byte-identical to the
// bundled asset. No network, no secrets, no input besides the asset file.
import { createHash } from "node:crypto";
import {
  copyFileSync,
  mkdirSync,
  existsSync,
  readFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const asset = join(here, "assets", "entry.jpg");
const outDir = "/output";
const outFile = join(outDir, "entry.png");

function sha256(buf) {
  return createHash("sha256").update(buf).digest("hex");
}

if (!existsSync(asset)) {
  console.error(`asset missing: ${asset}`);
  process.exit(1);
}
const expected = readFileSync(asset);
mkdirSync(outDir, { recursive: true });
copyFileSync(asset, outFile);
const written = readFileSync(outFile);
if (
  written.length !== expected.length ||
  sha256(written) !== sha256(expected)
) {
  console.error(
    `output mismatch: wrote ${written.length} bytes, expected ` +
      `${expected.length} bytes ` +
      `(sha256 ${sha256(written)} vs ${sha256(expected)})`,
  );
  process.exit(1);
}
console.log(`wrote ${outFile} (${written.length} bytes, sha256 ${sha256(written)})`);
