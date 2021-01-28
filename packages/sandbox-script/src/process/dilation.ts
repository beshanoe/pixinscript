export function dilation(image: Image) {
  const imageCopy = new Image();
  imageCopy.assign(image);

  try {
    imageCopy.morphologicalTransformation(1, [
      // mask

      [
        false,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
      ],
    ]);
  } catch (error) {
    console.log(error);
  }

  return imageCopy;
}
