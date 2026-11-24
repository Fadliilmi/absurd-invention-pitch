// One-Sentence Absurd Invention Pitch: The Remote Control Finder.
// Writes a single sentence (1-220 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The Remote Control Finder is a second remote that interrogates the first one, beeping accusingly until it confesses where it hid under the couch cushions.";

if (LINE.length < 1 || LINE.length > 220) {
  throw new Error(`Entry must be 1-220 characters, got ${LINE.length}`);
}

// The gate wants exactly one sentence: no line breaks, one final period.
if (LINE.includes("\n") || !LINE.endsWith(".")) {
  throw new Error("Entry must be a single sentence ending with a period");
}

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
