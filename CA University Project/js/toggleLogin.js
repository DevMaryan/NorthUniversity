let loginToggle = document.getElementById('loginToggle');
loginToggle.addEventListener('click', function(){
    let showLogin = document.getElementById('showLogin');
    if(showLogin.style.visibility === "hidden"){
        showLogin.style.visibility="visible";

    }else{
        showLogin.style.visibility="hidden";

    }
})