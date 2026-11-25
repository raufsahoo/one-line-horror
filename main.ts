// One Line, One Chill: a horror story in a single sentence. Node 22, standard library only.
// Writes it to /output/entry.txt (MAKEFUN_OUTPUT_DIR stands in for /output locally).
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line = 'My phone unlocked itself with Face ID while I slept, and this morning there are 47 new photos of me in the camera roll.';

// The gate takes 1 to 200 characters: fail loudly rather than enter an invalid line.
if ([...line].length > 200 || line.trim() === '') throw new Error(`line is ${[...line].length} characters`);

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), line);
