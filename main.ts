import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The Remote Control Finder is a second remote that beeps accusingly at the first one until it confesses where it hid under the couch cushions.";

if (LINE.length < 1 || LINE.length > 220) {
  throw new Error(`Entry must be 1-220 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
