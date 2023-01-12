let generateImage = src =>{
    let img = document.createElement('img');
    img.src = src;
    img.style.width = '200px';
    img.style.border = '2px dotted pink';
    return img;
}

export default generateImage;