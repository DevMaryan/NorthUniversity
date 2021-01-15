let newslettersArr = [];

function Newsletter(id, email){
    this.id = id,
    this.email = email
}

// Random ID for newsletter
function generateRandomIdNewsletters(){
    let max = 0;
    for(let i = 0; i < newslettersArr.length; i++){
        if(newslettersArr[i].id > max){
            max = newslettersArr[i].id;
        }
    }
    return max + 1;
}
// Counter Newsletter
function overViewNLCounter(){
    let NewsLettersCounter = document.getElementById('NewsLettersCounter');
    NewsLettersCounter.innerHTML = newslettersArr.length; // display newsletter counter
    CountNL = newslettersArr.length; 
}

// btn Listener for Newsletter
let btn_newsletter = document.getElementById('btn_newsletter');
btn_newsletter.addEventListener('click', function(){
    addNewsletter();
    displayNewsletters()
})

// Add the newsletter input email
function addNewsletter(){
    let nlId = generateRandomIdNewsletters();
    let nlEmail = document.getElementById('inputNl');
    let newNewsletter = new Newsletter(nlId, nlEmail.value);
    newslettersArr.push(newNewsletter);
    inputNl.style.display = 'none';
    btn_newsletter.style.display='none';
    msg.innerText = `${nlEmail.value} is successfully added!`;
}

// display newsletters emails
function displayNewsletters(){
    let statisticNL = document.getElementById('statisticNL');
    let tr = document.createElement('tr');
    let nlId = document.createElement('td');
    let nlEmail= document.createElement('td');
    let nlbtnDelete = document.createElement('button');
    nlbtnDelete.id = 'btnnlbtnDelete';
    nlbtnDelete.innerText = 'x';
    nlbtnDelete.onclick = function(e){
        let tr = e.target.parentElement;
        tr.style.display = 'none';
        for(let j = 0; j < newslettersArr.length; j++){
            if(id == newslettersArr[j].id){
                newslettersArr.splice(j);
                nlId.innerText = '';
                nlEmail.innerText = '';
                nlbtnDelete.style.display = 'none';
            }
        }
    }

    for(let i = 0; i < newslettersArr.length;i++){
        currentSubscirber = newslettersArr[i];
        nlId.innerText = currentSubscirber.id;
        nlEmail.innerText = currentSubscirber.email;
    }

    tr.appendChild(nlId);
    tr.appendChild(nlEmail);
    tr.appendChild(nlbtnDelete);
    statisticNL.appendChild(tr);

}

