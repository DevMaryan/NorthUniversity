const username = "root";
const password = "toor";

let btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', function(){
    let usernameInput = document.getElementById('username').value;
    let userpasswordInput = document.getElementById('password').value;
    
    if(username == usernameInput && password == userpasswordInput){
        const backEndPanel = document.getElementById('backend');
        backEndPanel.style.display = 'block';
        window.scrollTo(0,document.body.scrollTop);
        let body = document.getElementsByTagName("BODY")[0];
        body.style.overflow = "hidden";
        updateStatistics();

        drawChart(CountNL, CountNS, CountEv, CountMN , CountMNN);
    }else{
        alert('nein');
    }
})

function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function updateStatistics(){
  
        // NewsLetters
        overViewNLCounter();

        // New Students
        overViewNSCounter();

        // New Events
        overViewEventsCounter();

        // Main News
        overViewMainNCounter();

        // Mini News
        overViewMiniNewsNCounter();
}