// One funny excuse for a production outage, written to /output/entry.txt.
// The grader runs this twice; the output is the same every time.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "The tests all passed — because I wrote them while watching the code fail, then renamed the failure expected behavior.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outDir, "entry.txt");
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error("excuse must be one line of 1-200 characters");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, EXCUSE, "utf8");
