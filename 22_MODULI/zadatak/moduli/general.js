function generateImage(src) {
    let img = document.createElement('img');
    img.src = src;
    img.alt = "Image cannot be loaded";
    img.style.width = "100px";
    return img;
    
}


export default generateImage;