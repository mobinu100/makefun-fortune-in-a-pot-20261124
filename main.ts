// Fortune in a Pot — make.fun entry.
// A single kind, funny fortune for the houseplant on the windowsill,
// written to /output/entry.txt (MAKEFUN_OUTPUT_DIR in the grader).
// Sunlight does the heavy lifting; the pot just holds the fort.
// The plant asked for a forecast; the window delivered the weather.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "Good news, windowsill plant: the sun has big plans for you, and by spring every leaf will be showing off a little.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE + "\n", "utf8");
console.log(`wrote entry.txt (${FORTUNE.length} chars)`);
