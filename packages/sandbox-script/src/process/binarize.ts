export function binarize(image: Image) {
  const imageCopy = new Image();
  imageCopy.assign(image);

  imageCopy.binarize(0.15);

  return imageCopy;
}
