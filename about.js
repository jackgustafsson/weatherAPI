const aboutBtn = document.querySelector('#myBtn');

window.onscroll = function(){scrollFunction};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ){
        aboutBtn.style.display = "block";
    }

    else {
        aboutBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}