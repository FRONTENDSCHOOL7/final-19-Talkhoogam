const validateImage = (filename) => {
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp|\.tif|\.heic)$/i;
    return allowedExtensions.test(filename)
}

export {validateImage}