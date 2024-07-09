export function binarize(image: Image, { threshold }: { threshold: number }) {
  const imageCopy = new Image();
  imageCopy.assign(image);

  imageCopy.binarize(threshold);

  return imageCopy;
}
