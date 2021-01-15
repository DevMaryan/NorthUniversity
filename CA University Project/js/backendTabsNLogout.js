// Logout 
const logout = document.getElementById('logout');

logout.addEventListener('click',function(){
    const backEndPanel = document.getElementById('backend');
    backEndPanel.style.display = 'none';
    let body = document.getElementsByTagName("BODY")[0];
    body.style.overflow = "visible";
})

// The Tabs // 
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultBackEndTab").click();
// Three Tabs - Art, Laboratories, Campus Life //
function openBackEndTab(evt, backEndsectionName){
    let i;
    let backEndtabcontent;
    let backEndLinks;

    // Get all elements with class="tabcontent" and hide them
    backEndtabcontent = document.getElementsByClassName('backEndContent');
    for(i = 0; i < backEndtabcontent.length; i++){
        backEndtabcontent[i].style.display = 'none';
    }
    // Get all elements with class="backEndLinks" and remove the class "active"
    backEndLinks = document.getElementsByClassName('backEndLinks');
    for(i = 0; i < backEndLinks.length;i++){
        backEndLinks[i].className = backEndLinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(backEndsectionName).style.display = 'flex';
    evt.currentTarget.className += " active";
}






    