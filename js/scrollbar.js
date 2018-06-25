window.onload = function(){
    var scrollBar = document.getElementById('scroll-bar');

    var diff = document.body.offsetHeight - window.innerHeight;

    window.addEventListener("scroll", function(){
        var scrollTop = window.pageYOffset ||
               (document.documentElement ||
                document.body.parentNode ||
                document.body).scrollTop;

        var curheight = scrollTop/diff * 100;
        scrollBar.setAttribute("style", "width:" + curheight +"%");
        }, false);
}
