type AccentShade = { bg: string; hover: string; active: string; fg: string };

export type Accent = {
  id: string;
  name: string;
  light: AccentShade;
  dark: AccentShade;
};

// Every pair keeps the label at 4.5:1 or better against its fill.
export const accents: Accent[] = [
  {
    id: "crimson",
    name: "Crimson",
    light: {
      bg: "#a8201a",
      hover: "#8f1a15",
      active: "#761511",
      fg: "#ffffff",
    },
    dark: { bg: "#ffb4a9", hover: "#ffc9c1", active: "#ff9d8f", fg: "#3b0d08" },
  },
  {
    id: "forest",
    name: "Forest",
    light: {
      bg: "#1f6f43",
      hover: "#185a36",
      active: "#12472a",
      fg: "#ffffff",
    },
    dark: { bg: "#9fdcb5", hover: "#b6e6c7", active: "#88d1a3", fg: "#0b2a17" },
  },
  {
    id: "harbour",
    name: "Harbour",
    light: {
      bg: "#1d4f7a",
      hover: "#174166",
      active: "#123452",
      fg: "#ffffff",
    },
    dark: { bg: "#a9cdf0", hover: "#bfdaf4", active: "#93bfe9", fg: "#0b2034" },
  },
  {
    id: "graphite",
    name: "Graphite",
    light: {
      bg: "#2b2622",
      hover: "#3d3632",
      active: "#4f4742",
      fg: "#ffffff",
    },
    dark: { bg: "#ece5e2", hover: "#f6f1ef", active: "#dcd3cf", fg: "#1c1917" },
  },
];

export const corners = [
  { id: "square", name: "Square", value: "0" },
  { id: "soft", name: "Soft", value: "0.25rem" },
  { id: "round", name: "Round", value: "999px" },
];
