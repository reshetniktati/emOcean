const validateImage = (image, acceptedImageSize) => {
  if (image.mimetype !== "image/jpeg") {
    return {
      name: 'ClientError',
      message: 'Incorrect image format. You need to upload image with .jpg/.jpeg format',
      status: 400
    }
  }
  if (image.size > acceptedImageSize * 1000000) {
    return {
      name: 'ClientError',
      message: `Image too large. Size limit is ${acceptedImageSize}mb`,
      status: 400
    }
  }
}

module.exports = {
  validateImage
}
