// Generates platform token files from tokens.json. Run: `npm run tokens` from apps/mobile.
// Outputs are committed and marked GENERATED; never edit them by hand.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '../..');
const tokens = JSON.parse(readFileSync(resolve(here, 'tokens.json'), 'utf8'));
const strip = o =>
  JSON.parse(JSON.stringify(o, (k, v) => (k.startsWith('$') ? undefined : v)));
const t = strip(tokens);

const HEADER = 'GENERATED from packages/design-tokens/tokens.json. Do not edit.';

function write(path, content) {
  const abs = resolve(root, path);
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, content);
  console.log('wrote', path);
}

// ---------- TypeScript (React Native) ----------
const ts = `// ${HEADER}
export const tokens = ${JSON.stringify(t, null, 2)} as const;

export type ColorScheme = keyof typeof tokens.color;
export type ColorToken = keyof typeof tokens.color.light;
export type TagKind = keyof typeof tokens.tag;
export type TintToken = keyof typeof tokens.tint;
export type TypeRole = Exclude<keyof typeof tokens.type, 'family'>;
export type ClayDepth = keyof typeof tokens.clay;
`;
write('apps/mobile/src/design-system/tokens/tokens.generated.ts', ts);

// ---------- Kotlin (Compose, autofill sheets) ----------
const hex = c => {
  if (c.startsWith('#')) return `0xFF${c.slice(1).toUpperCase()}`;
  const [r, g, b, a] = c.match(/[\d.]+/g).map(Number);
  const h = n => n.toString(16).padStart(2, '0').toUpperCase();
  return `0x${h(Math.round(a * 255))}${h(r)}${h(g)}${h(b)}`;
};
const scheme = (name, c) =>
  `    val ${name} = ClayColors(\n${Object.entries(c)
    .map(([k, v]) => `        ${k} = ${hex(v)},`)
    .join('\n')}\n    )`;
const colorFields = Object.keys(t.color.light)
  .map(k => `    val ${k}: Long,`)
  .join('\n');
const tags = Object.entries(t.tag)
  .map(([k, v]) => `    val ${k} = TagColors(bg = ${hex(v.bg)}, fg = ${hex(v.fg)})`)
  .join('\n');
const dims = group =>
  Object.entries(t[group])
    .map(([k, v]) => `        const val ${k} = ${v}`)
    .join('\n');

const kt = `// ${HEADER}
package ai.fillmate.autofill.ui.theme

// Plain ARGB longs and dp ints: no UI-toolkit dependency, so this compiles before Compose is added.
// Phase 3 adds ClayTheme.kt, which wraps these in Compose Color / Dp.

data class ClayColors(
${colorFields}
)

data class TagColors(val bg: Long, val fg: Long)

object ClayTokens {
${scheme('Light', t.color.light)}
${scheme('Dark', t.color.dark)}

    object Tags {
${tags.replace(/^/gm, '    ')}
    }

    object Radius {
${dims('radius')}
    }

    object Space {
${dims('space')}
    }

    object Size {
${dims('size')}
    }
}
`;
write(
  'apps/mobile/android/autofill/src/main/kotlin/ai/fillmate/autofill/ui/theme/ClayTokens.kt',
  kt,
);
