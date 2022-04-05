var maximages = 5;
var extension = '.png';

function showbig(url){
    var bigpic = document.getElementById("bigpic");
    bigpic.src = url;
}

function calcslide(num){
    var currentImg = document.getElementById("bigpic").src;
    var currentIndex = parseInt(currentImg.substr(currentImg.indexOf(extension) -2, 2));
    var newIndex = currentIndex + num;
    if(newIndex < 1){
        showbig("img/birds" + String(maximages).padStart(2,"0") + extension);
    }
    else if(newIndex > maximages){
        showbig(currentImg.src = "img/birds" + String(1).padStart(2,"0")+ extension);
    }
    else{
        showbig(currentImg.src = "img/birds" + String(currentIndex + num).padStart(2,"0")+ extension);
    }
}