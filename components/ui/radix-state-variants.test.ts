/// <reference types="vite/client" />

import { describe, expect, it } from "vitest";

import dialogSource from "./dialog.tsx?raw";
import dropdownMenuSource from "./dropdown-menu.tsx?raw";
import sheetSource from "./sheet.tsx?raw";

const componentsWithRadixState: Array<[fileName: string, source: string]> = [
  ["dialog.tsx", dialogSource],
  ["sheet.tsx", sheetSource],
  ["dropdown-menu.tsx", dropdownMenuSource],
];

describe("Radix animation state variants", () => {
  it("uses Radix data-state selectors instead of data-open/data-closed shorthands", () => {
    for (const [fileName, source] of componentsWithRadixState) {
      expect(source, fileName).not.toMatch(/\bdata-(open|closed):/);
      expect(source, fileName).toContain("data-[state=open]:");
      expect(source, fileName).toContain("data-[state=closed]:");
    }
  });
});
