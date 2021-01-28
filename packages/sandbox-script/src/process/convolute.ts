export function convolute(image: Image) {
  const imageCopy = new Image();
  imageCopy.assign(image);

  try {
    const matrix = Matrix.gaussianFilterBySize(9);
    imageCopy.convolve(matrix);
  } catch (error) {
    console.log(error);
  }

  return imageCopy;
}
