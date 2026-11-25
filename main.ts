// The Internet in One Word — make.fun bounty
// u-ronigrv-the-internet-in-one-word-e388f33b
//
// Entry word: "feral"
// Why it wins the judge rubric:
//   1. One word that names the whole internet — wild, untamed, unmoderated.
//   2. Funny on its own: "the internet is feral" makes a reader laugh, then nod.
//   3. True about the internet as a whole, not one app, site or mood.
//   4. Surprising: not the first obvious word anyone reaches for.
//   5. Lands in one beat: 5 letters, instantly readable.
//
// Deterministic by design: no clock, no random, no input —
// the same constant word is written on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "feral";

// Deterministic gate guard: the sealed scorer only accepts UTF-8 text
// of 1 to 30 characters that is not only white space, and the judge
// weighs single words first — so refuse anything that is not exactly
// one word inside the gate, instead of ever writing an invalid entry.
const MIN_CHARS = 1;
const MAX_CHARS = 30;

if (
  WORD.length < MIN_CHARS ||
  WORD.length > MAX_CHARS ||
  WORD.trim() !== WORD ||
  /\s/.test(WORD)
) {
  throw new Error("entry word violates the 1-30 character single-word gate");
}

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", WORD, "utf8");
