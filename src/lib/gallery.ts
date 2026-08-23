// Folder-driven gallery.
// Drop images into src/assets/gallery/lawn-care/ or src/assets/gallery/pressure-washing/
// and they are picked up automatically — no code changes needed.

const lawnModules = import.meta.glob(
  "../assets/gallery/lawn-care/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

const pressureModules = import.meta.glob(
  "../assets/gallery/pressure-washing/*.{jpg,jpeg,png,webp,avif}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

export type GalleryImage = {
  src: string;
  category: "lawn-care" | "pressure-washing";
  alt: string;
};

const ALT_TEXT = "Freshly cut lawn";

function toImages(
  modules: Record<string, string>,
  category: GalleryImage["category"],
): GalleryImage[] {
  return Object.keys(modules)
    .sort()
    .map((path) => ({ src: modules[path]!, category, alt: ALT_TEXT }));
}

export const LAWN_IMAGES = toImages(lawnModules, "lawn-care");
export const PRESSURE_IMAGES = toImages(pressureModules, "pressure-washing");
export const GALLERY_IMAGES: GalleryImage[] = [...LAWN_IMAGES, ...PRESSURE_IMAGES];
