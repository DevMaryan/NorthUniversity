// feedback in array
let feedbackArr = [];
// Show/Hide FOrm
let feedback = document.getElementById('sendShow');
feedback.addEventListener('click', function(){
    let sendFB = document.getElementById('sendFB');
    if(sendFB.style.display == "none"){
        sendFB.style.display="flex";
    }else{
        sendFB.style.display="none";
    }
})
// object
function Feedback(id, subject, message){
    this.id = id,
    this.subject = subject,
    this.message = message
}

// btn listener
let btnfb = document.getElementById('btnfb');
btnfb.addEventListener('click', function(){
    createFeedback();

    sendFB.style.display="none";
})

// Generate RANDOM ID for feedback
function generateRandomIdFeedback(){
    let max = 0;
    for(let i = 0; i < feedbackArr.length; i++){
        if(feedbackArr[i].id > max){
            max = feedbackArr[i].id;
        }
    }
    return max + 1;
}

//create feedback
function createFeedback(){
    let fbId = generateRandomIdFeedback();
    let fbTitle = document.getElementById('fbTitle');
    let fbMsg = document.getElementById('fbMsg');

    let newFeedback = new Feedback(fbId, fbTitle.value, fbMsg.value);
    feedbackArr.push(newFeedback)
    fbTitle.value = '';
    fbMsg.value = '';
    displayFeedback()
}

function displayFeedback(){
    let statisticFeedback = document.getElementById('statisticFeedback');
    let tr = document.createElement('tr');
    let tdId = document.createElement('td');
    let tdSubject= document.createElement('td');
    let tdMessage= document.createElement('td');

    for(let i = 0; i < feedbackArr.length;i++){
        currentFeedback = feedbackArr[i];
        tdId.innerText = currentFeedback.id;
        tdSubject.innerText = currentFeedback.subject;
        tdMessage.innerText = currentFeedback.message;
    }

    tr.appendChild(tdId);
    tr.appendChild(tdSubject);
    tr.appendChild(tdMessage);
    statisticFeedback.appendChild(tr);

}