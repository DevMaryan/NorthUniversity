// Mini News
let mininewsAr = [];

// Object of Mini News
function MiniNews(id, title, image, description, likes){
    this.id = id,
    this.title = title,
    this.image= image,
    this.description = description,
    this.likes = function(){
        likes++;
    }
}

// Button listener
let btnAddMiniNews = document.getElementById('btnAddMiniNews');
btnAddMiniNews.addEventListener('click', function(){
    addMiniNews(); // Create Mininews
    backendMiniNewsData(); // Backend show Mininews
    displayMiniNews();
    updateStatistics();
    drawChart(CountNL, CountNS, CountEv, CountMN , CountMNN);
    for(let i = 0; i< mininewsAr.length;i++){
        currentTitle = mininewsAr[i].title;
    }
    notify(currentTitle);
})

// Random ID for news
function generateRandomIdMiniNews(){
    let max = 0;
    for(let i = 0; i < mininewsAr.length; i++){
        if(mininewsAr[i].id > max){
            max = mininewsAr[i].id;
        }
    }
    return max + 1;
}

// Counter overview Mini News
function overViewMiniNewsNCounter(){
    let MiniNewsCounter = document.getElementById('miniNewsCounter');
    MiniNewsCounter.innerHTML = mininewsAr.length; 
    CountMNN = mininewsAr.length; 
}
// Constructor
function addMiniNews(){
    let MiniId = generateRandomIdMiniNews();
    let MiniTitle = document.getElementById('miniNewsTitle');
    let MiniImage = document.getElementById('miniNewsImage');
    let MiniDescription = document.getElementById('miniNewsDescription');

    let newMiniNews = new MiniNews(MiniId, MiniTitle.value, MiniImage.value, MiniDescription.value)
    mininewsAr.push(newMiniNews);
    MiniTitle.value = '';
    MiniImage.value = '';
    MiniDescription.value = '';
}

// Function to Display the MININEWS
function displayMiniNews(){
    let MainContainer = document.getElementById('four-mini-news');

    let box = document.createElement('box');
    box.classList.add('box');
    
    let boxImg = document.createElement('img');
    boxImg.classList.add('box-img');

    let boxTitle = document.createElement('h3');
    boxTitle.classList.add('box-title')
    let boxDesc = document.createElement('h4');
    boxDesc.classList.add('box-intro')
    let ReadMore = document.createElement('p');
    ReadMore.innerHTML = `Read more<i class="fas fa-arrow-circle-right box-arror"></i>`;
    ReadMore.classList.add('box-arror');

    for(let i = 0; i < mininewsAr.length; i++){
        currentMiniNews = mininewsAr[i];
        boxImg.src = currentMiniNews.image;
        boxTitle.innerText = currentMiniNews.title;
        boxDesc.innerText = currentMiniNews.description;
    }

    box.appendChild(boxImg);
    box.appendChild(boxTitle);
    box.appendChild(boxDesc);
    box.appendChild(ReadMore);
    MainContainer.appendChild(box);
}

// Function Backend Table DATA
function backendMiniNewsData(){
    let statisticMMN = document.getElementById('statisticMMN');

    let tr = document.createElement('tr');
    let MiniNewsId = document.createElement('td');
    let MiniNewsImage = document.createElement('td');
    let MiniNewsTitle = document.createElement('td');
    let MiniNewsDescription = document.createElement('td');
    let MiniNewsDelete = document.createElement('button');
    MiniNewsDelete.id = 'btnDeleteMiniNews';
    MiniNewsDelete.innerText = 'x';
    MiniNewsDelete.onclick = function(e){
        const tr = e.target.parentElement;
        tr.style.display = 'none';
        for(let j = 0; j < mininewsAr.length; j++){
            if(id == mininewsAr[j].id){
                mininewsAr.splice(j);
                MiniNewsId.innerText = '';
                MiniNewsImage.innerText = '';
                MiniNewsTitle.innerText = '';
                MiniNewsDescription.innerText = '';
                MiniNewsDelete.style.display = 'none';
            }
        }
    }

    for(let i = 0; i < mininewsAr.length; i++){
        currentMn = mininewsAr[i];
        MiniNewsId.innerText = currentMn.id;
        MiniNewsImage.innerText = currentMn.image;
        MiniNewsTitle.innerText = currentMn.title;
        MiniNewsDescription.innerText = currentMn.description;
    }
    tr.appendChild(MiniNewsId);
    tr.appendChild(MiniNewsTitle);
    tr.appendChild(MiniNewsImage);
    tr.appendChild(MiniNewsDescription);
    tr.appendChild(MiniNewsDelete);
    statisticMMN.appendChild(tr);
}


// Notification
function notify(currentTitle){
    let title = document.getElementById('notifyContent');
    title.innerText = `Mini News \'${currentTitle}\' is successfully created!`;

    let header = document.getElementById('notifyHeader');
    header.innerHTML = `Success <i class="fas fa-check"></i> `;

    setTimeout(function(){
        document.getElementById('notification').style.display = 'block'
  
    }, 500);
    
    setTimeout(function(){
        document.getElementById('notification').style.display = 'none'
    }, 6000);
  }
  