// Messenger Show/Hide
let iconShow = document.getElementById('iconShow');
iconShow.addEventListener('click', function(){
    iconShow.style.display='none';

    let messengerContainer = document.getElementById('messengerContainer');
    messengerContainer.style.display = 'flex';
})

let closeMsg = document.getElementById('closeMsg');
closeMsg.addEventListener('click', function(){
    iconShow.style.display='flex';

    let messengerContainer = document.getElementById('messengerContainer');
    messengerContainer.style.display = 'none';
})

// Messenger functions

let theMsg = document.getElementById('theMsg');
let sendMsg = document.getElementById('sendMsg');
sendMsg.addEventListener('click', function(){
    sendMsg.classList.add('sendIt');
    userSend()
    switch(theMsg.value){
        case 'fee':
            feeResponse();
            let sendMsg = document.getElementById('sendMsg');
            sendMsg.classList.remove('sendIt');
            break;
        case 'admission date':
            admissionDateResponse();
            sendMsg.classList.remove('sendIt');
            break;
        case 'job':
            jobResponse();
            sendMsg.classList.remove('sendIt');
            break;
        case 'bye':
            byeResponse();
            sendMsg.classList.remove('sendIt');
            break;
        case 'hi':
            hiResponse();
            sendMsg.classList.remove('sendIt');
            break;
        default:
            nonResponse();
            sendMsg.classList.remove('sendIt');
            break;
    }
    theMsg.value = '';
})

function userSend(){
    theMsg = document.getElementById('theMsg');
    let messengerContent = document.getElementById('messengerContent');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.classList.add('guest');
    li.innerHTML = `<img src='./images/profile-trans.jpg'>  ${theMsg.value}`;
    ul.appendChild(li);
    messengerContent.appendChild(ul);
    updateScroll()
}

function feeResponse(){
    let messengerContent = document.getElementById('messengerContent');
    let ul2 = document.createElement('ul');
    let li2 = document.createElement('li');
    li2.classList.add('admin')
    li2.innerHTML = `<p>Admission fee is $400 per semester </p><img src='./images/me.png'>`;
    ul2.appendChild(li2);
    messengerContent.appendChild(ul2);
    theMsg.value = '';
    updateScroll()
}
function admissionDateResponse(){
    let messengerContent = document.getElementById('messengerContent');
    let ul2 = document.createElement('ul');
    let li2 = document.createElement('li');
    li2.classList.add('admin')
    li2.innerHTML = `<p>Admission date: July 15 till August 20 </p><img src='./images/me.png'>`;
    ul2.appendChild(li2);
    messengerContent.appendChild(ul2);
    theMsg.value = '';
    updateScroll()
}
function jobResponse(){
    let messengerContent = document.getElementById('messengerContent');
    let ul2 = document.createElement('ul');
    let li2 = document.createElement('li');
    li2.classList.add('admin')
    li2.innerHTML = `<p>
    <a href="#">Click here</a> to apply!
     </p><img src='./images/me.png'>`;
    ul2.appendChild(li2);
    messengerContent.appendChild(ul2);
    theMsg.value = '';
    updateScroll()
}
function byeResponse(){
    let messengerContent = document.getElementById('messengerContent');
    let ul2 = document.createElement('ul');
    let li2 = document.createElement('li');
    li2.classList.add('admin')
    li2.innerHTML = `<p>Have a nice day!</p><img src='./images/me.png'>`;
    ul2.appendChild(li2);
    messengerContent.appendChild(ul2);
    theMsg.value = '';
    updateScroll()
}
function hiResponse(){
    let messengerContent = document.getElementById('messengerContent');
    let ul2 = document.createElement('ul');
    let li2 = document.createElement('li');
    li2.classList.add('admin')
    li2.innerHTML = `<p>Hi there, how can I help you?</p><img src='./images/me.png'>`;
    ul2.appendChild(li2);
    messengerContent.appendChild(ul2);
    theMsg.value = '';
    updateScroll()
}
function nonResponse(){
    let messengerContent = document.getElementById('messengerContent');
    let ul2 = document.createElement('ul');
    let li2 = document.createElement('li');
    li2.classList.add('admin')
    li2.innerHTML = `<p>Please rephrase the question!</p><img src='./images/me.png'>`;
    ul2.appendChild(li2);
    messengerContent.appendChild(ul2);
    theMsg.value = '';
    updateScroll()
}


// Update scroll to bottom
function updateScroll(){
    var element = document.getElementById("messengerContent");
    element.scrollTop = element.scrollHeight;
}































