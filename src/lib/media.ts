type AssetPointer = { url: string };

const files = import.meta.glob<AssetPointer>("/src/assets/img/*.asset.json", {
  eager: true,
  import: "default",
});

const byName: Record<string, string> = {};
for (const [path, pointer] of Object.entries(files)) {
  const name = path.split("/").pop()!.replace(".webp.asset.json", "");
  byName[name] = pointer.url;
}

export type Shot = {
  /** Full size (max 1800px). */
  src: string;
  /** Grid size (max 760px). */
  thumb: string;
  /** Aspect ratio as width / height. */
  ratio: number;
  alt: string;
};

export function shot(name: string, ratio: number, alt: string): Shot {
  const src = byName[name];
  if (!src) throw new Error(`Missing image asset: ${name}`);
  return { src, thumb: byName[`${name}-k`] ?? src, ratio, alt };
}

export const heroImage = byName["hadrian-hero"];
export const logoImage = byName["fy-reklam-logo"];
