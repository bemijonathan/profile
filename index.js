
var nav = document.querySelector('.navbar')

var navheight = nav.offsetTop;

window.onscroll = function(){
    if( navheight < window.pageYOffset){
        nav.classList.add("fixed")
    }else{
        nav.classList.remove("fixed")
    }
};