export function convolute(image: Image, size: number) {
  const imageCopy = new Image();
  imageCopy.assign(image);

  try {
    const matrix = Matrix.gaussianFilterBySize(size);
    imageCopy.convolve(matrix);
  } catch (error) {
    console.log(error);
  }

  return imageCopy;
}
