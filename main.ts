// Fortune Cookie Funnies for Engineers — make.fun entry (program/v1, node22)
// The grader runs `node main.ts` (Node 22, no network). It writes one
// fortune cookie message for a software engineer to /output/entry.txt.
// The competition caps the message at 120 characters; this one is 87.
//
// The angle: a classic fortune-cookie opening ("Your future holds...") with a
// three-beat escalation — promotion, pay rise, then the twist: the only
// legacy service nobody else dares to restart. The punch word sits last,
// and the joke lands on a first read without needing a second pass.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Your future holds a promotion, a pay rise, and one legacy service only you can restart.";

const MAX_CHARS = 120;

function main(): void {
  const text = FORTUNE.trim();
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`wrote /output/entry.txt (${text.length} chars)`);
}

main();
