export function substract(image: Image, secondImage: Image) {
  const imageCopy = new Image();
  imageCopy.assign(image);

  imageCopy.initPixelIterator();
  secondImage.initPixelIterator();

  const v1 = new Vector();
  const v2 = new Vector();

  do {
    imageCopy.getPixelValue(v1);
    secondImage.getPixelValue(v2);

    if (v2.isLessThan(v1)) {
      v1.sub(v2);
    }

    imageCopy.setPixelValue(v1);

    secondImage.nextPixel();
  } while (imageCopy.nextPixel());

  return imageCopy;
}

export function assignThroughMask(
  image: Image,
  secondImage: Image,
  mask: Image
) {
  mask.colorSpace = image.colorSpace;

  const imageCopy = new Image();
  imageCopy.assign(image);

  imageCopy.initPixelIterator();
  secondImage.initPixelIterator();
  mask.initPixelIterator();

  const v1 = new Vector();
  const v2 = new Vector();
  const vMask = new Vector();
  const oldV1 = new Vector(3);

  do {
    imageCopy.getPixelValue(v1);
    secondImage.getPixelValue(v2);
    mask.getPixelValue(vMask);

    v2.mul(vMask);

    for (let i = 0; i < v1.length; i++) {
      oldV1.at(i, v1.at(i));
    }
    v1.mul(vMask);
    oldV1.sub(v1);

    oldV1.add(v2);

    imageCopy.setPixelValue(oldV1);

    secondImage.nextPixel();
    mask.nextPixel();
  } while (imageCopy.nextPixel());

  return imageCopy;
}
