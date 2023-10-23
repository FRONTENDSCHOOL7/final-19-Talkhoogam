const ImageUploadAPI = async (imageFile) => {
    
    const url = "https://api.mandarin.weniv.co.kr";
    const form = new FormData();
    form.append("image", imageFile);
    try {
        const res = await fetch(`${url}/image/uploadfile`, {
            method: "POST",
            body: form,
        });
        const data = await res.json()
        const imageUrl = url+ "/" +data.filename;
        return imageUrl;
    } catch (error) {
        return error;
    };
    
};

export default ImageUploadAPI