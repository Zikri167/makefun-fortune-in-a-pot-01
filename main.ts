// Fortune in a Pot — makefun-fortune-in-a-pot-01 (v3, final)
// Revision 2: "nibble" beats "eat" (funnier, more plant-specific);
// "Next week" up front gives a stronger fortune-cookie cadence.
// Writes one kind, funny fortune for the houseplant on the windowsill
// to /output/entry.txt (via MAKEFUN_OUTPUT_DIR). Node 22+, stdlib only,
// deterministic, no network. Gate: 1-120 chars, single line, no newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "Next week a ladybug will move in, pay rent in good luck, and never once nibble a leaf.";

if (FORTUNE.length < 1 || FORTUNE.length > 120) {
  throw new Error(`fortune must be 1-120 characters, got ${FORTUNE.length}`);
}
if (/[\r\n]/.test(FORTUNE) || FORTUNE.trim().length === 0) {
  throw new Error("fortune must be a single non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
