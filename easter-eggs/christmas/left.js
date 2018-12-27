window.onload = function(){
    let start= document.getElementById("heart");

    let iLoveYou_elmnt = document.getElementById("I-love-you");

    heart.onclick = function(){
        heart.parentNode.removeChild(heart);
        iLoveYou_elmnt.style.visibility = "visible";
    }
}


