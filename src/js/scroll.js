let img = 0;
let isMoving = false;
let imgs = [document.getElementById("bg0"),document.getElementById("bg1"),document.getElementById("bg2")];

let right = function () {
    if(isMoving) return;
    imgs[img].style.marginLeft = "-100%";
    imgs[getNextImage(img)].style.marginLeft = "0";
    imgs[getNextImage(getNextImage(img))].style.marginLeft = "100%";
    imgs[getNextImage(getNextImage(img))].style.display= "none";
    isMoving=true;
    setTimeout(() => {
        isMoving = false;
        imgs[getNextImage(getNextImage(img))].style.display= "block";
        img = getNextImage(img);
    }, 1000);
}

let left = function () {
    if(isMoving) return;
    imgs[img].style.marginLeft = "100%";
    imgs[getNextImage(getNextImage(img))].style.marginLeft = "0";
    imgs[getNextImage(img)].style.marginLeft = "-100%";
    imgs[getNextImage(img)].style.display= "none";
    isMoving=true;
    setTimeout(() => {
        isMoving = false;
        imgs[getNextImage(img)].style.display= "block";
        img = getNextImage(getNextImage(img));
    }, 1000);
}

let getNextImage = function (id) {
    if(id==imgs.length-1) return 0;
    return id+1;
}

setInterval(() => {
    right();
},5000)