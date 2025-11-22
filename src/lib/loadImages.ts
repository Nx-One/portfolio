// Load ALL png images under assets/img/**/*
const allImages = import.meta.glob("/src/assets/img/**/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export function loadImages(folder: string): string[] {
  return Object.entries(allImages)
    .filter(([path]) => path.includes(`/src/assets/img/${folder}/`))
    .map(([_, src]) => src);
}
