// GENERATED from packages/design-tokens/tokens.json. Do not edit.
export const tokens = {
  "color": {
    "light": {
      "canvas": "#F3F0FA",
      "surface": "#FFFFFF",
      "surfaceEnd": "#FAF8FF",
      "textPrimary": "#2A2440",
      "textSecondary": "#6B6485",
      "placeholder": "#9A93B3",
      "primary": "#7C6CF2",
      "onPrimary": "#FFFFFF",
      "link": "#5B4BD6",
      "destructive": "#B3261E",
      "scrim": "rgba(42,36,64,0.35)",
      "shadowDark": "rgba(110,90,180,0.18)",
      "shadowLight": "rgba(255,255,255,0.9)",
      "innerDark": "rgba(110,90,180,0.10)",
      "innerLight": "rgba(255,255,255,0.8)"
    },
    "dark": {
      "canvas": "#1B1828",
      "surface": "#262238",
      "surfaceEnd": "#2B2740",
      "textPrimary": "#F1EEFA",
      "textSecondary": "#B3ACCB",
      "placeholder": "#8A83A3",
      "primary": "#9D90FF",
      "onPrimary": "#1B1828",
      "link": "#B8AEFF",
      "destructive": "#FFB4AB",
      "scrim": "rgba(0,0,0,0.5)",
      "shadowDark": "rgba(0,0,0,0.45)",
      "shadowLight": "rgba(255,255,255,0.05)",
      "innerDark": "rgba(0,0,0,0.25)",
      "innerLight": "rgba(255,255,255,0.06)"
    }
  },
  "tag": {
    "alias": {
      "bg": "#C9F2E1",
      "fg": "#0F6A48"
    },
    "semantic": {
      "bg": "#D4E6FF",
      "fg": "#1C4F94"
    },
    "ai": {
      "bg": "#E6DCFF",
      "fg": "#5B3BB8"
    },
    "skipped": {
      "bg": "#ECEAF2",
      "fg": "#5E5874"
    },
    "gap": {
      "bg": "#FFEDB8",
      "fg": "#7A5300"
    },
    "error": {
      "bg": "#FFD9D4",
      "fg": "#9A2A1E"
    }
  },
  "tint": {
    "lavender": "#E9E4FF",
    "mint": "#DDF7EC",
    "peach": "#FFE8DC",
    "sky": "#E2EEFF"
  },
  "radius": {
    "input": 20,
    "card": 28,
    "pill": 28,
    "sheet": 32,
    "chip": 16
  },
  "space": {
    "unit": 4,
    "screen": 20,
    "card": 18,
    "gapSm": 12,
    "gapMd": 16
  },
  "size": {
    "button": 56,
    "input": 56,
    "chip": 32,
    "tag": 24,
    "iconCircle": 40
  },
  "type": {
    "family": "Nunito",
    "display": {
      "size": 28,
      "lineHeight": 34,
      "weight": 800
    },
    "title": {
      "size": 20,
      "lineHeight": 26,
      "weight": 700
    },
    "body": {
      "size": 16,
      "lineHeight": 24,
      "weight": 400
    },
    "label": {
      "size": 13,
      "lineHeight": 18,
      "weight": 600
    },
    "caption": {
      "size": 12,
      "lineHeight": 16,
      "weight": 400
    }
  },
  "clay": {
    "raised": [
      [
        12,
        12,
        24,
        "shadowDark",
        false
      ],
      [
        -8,
        -8,
        18,
        "shadowLight",
        false
      ],
      [
        -4,
        -4,
        8,
        "innerDark",
        true
      ],
      [
        4,
        4,
        8,
        "innerLight",
        true
      ]
    ],
    "pressed": [
      [
        4,
        4,
        8,
        "innerDark",
        true
      ],
      [
        -4,
        -4,
        8,
        "innerLight",
        true
      ]
    ]
  }
} as const;

export type ColorScheme = keyof typeof tokens.color;
export type ColorToken = keyof typeof tokens.color.light;
export type TagKind = keyof typeof tokens.tag;
export type TintToken = keyof typeof tokens.tint;
export type TypeRole = Exclude<keyof typeof tokens.type, 'family'>;
export type ClayDepth = keyof typeof tokens.clay;
