window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 750 || document.documentElement.scrollTop > 750){
        document.getElementById("header-container").style.height = "70px";
        document.getElementById('logo2').style.display = "block";
        document.getElementById('logo-container').style.display = "none";

    }else{
        document.getElementById("header-container").style.height = "100px";
        document.getElementById('logo-container').style.display = "block";
        document.getElementById('logo2').style.display = "none";
    }
}
