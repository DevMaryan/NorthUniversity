let newsArr = [];

function News(id, image, title, description){
    this.id = id,
    this.image = image,
    this.title = title,
    this.description = description
}
// Generate RANDOM ID for student
function generateRandomNewsId(){
    let max = 0;
    for(let i = 0; i < newsArr.length; i++){
        if(newsArr[i].id > max){
            max = newsArr[i].id;
        }
    }
    return max + 1;
}
// Counter overview Main News
function overViewMainNCounter(){
    let MainNewsCounter = document.getElementById('mainNewsCounter');
    MainNewsCounter.innerHTML = newsArr.length; 
    CountMN = newsArr.length; 
}

// Add Main News
let btnAddNews = document.getElementById('btnAddNews');
btnAddNews.addEventListener('click', function(){
    let newsImage = document.getElementById('news-image');
    let newsTitle = document.getElementById('news-title');
    let newsDescription = document.getElementById('news-description');
    if(newsImage.value, newsTitle.value, newsDescription.value != ''){
        addMainNews();
        updateMainNews();
        displayMainNews();
        updateStatistics();
        drawChart(CountNL, CountNS, CountEv, CountMN , CountMNN);
        for(let i = 0; i< newsArr.length;i++){
            newsTitle = newsArr[i].title;
        }
        notify2(newsTitle);
    }else{
        alert('fields cant be empty')
    }

})

// Constructor etc
function addMainNews(){
    let newsId = generateRandomNewsId();
    let newsImage = document.getElementById('news-image');
    let newsTitle = document.getElementById('news-title');
    let newsDescription = document.getElementById('news-description');

    let newMN = new News(newsId, newsImage.value, newsTitle.value, newsDescription.value);
    newsArr.push(newMN);
    newsImage.value = '';
    newsTitle.value = '';
    newsDescription.value = '';

}

// Backend Show in table
function updateMainNews(){
    let statisticMN = document.getElementById('statisticMN');
    let tr = document.createElement('tr');
    let mainNewsId = document.createElement('td');
    let mainNewsImage = document.createElement('td');
    let mainNewsTitle = document.createElement('td');
    let mainNewsDescription = document.createElement('td');
    let btnDeleteMN = document.createElement('button');
    btnDeleteMN.id = 'btnDeleteMN';
    btnDeleteMN.innerText = 'x';
    btnDeleteMN.onclick = function(e){
        const tr = e.target.parentElement;
        tr.style.display = 'none';
        for(let j = 0; j < newsArr.length; j++){
            if(id == newsArr[j].id){
                students.splice(j);
                mainNewsImage.innerText = '';
                mainNewsTitle.innerText = '';
                mainNewsDescription.innerText = '';
                btnDeleteMN.style.display = 'none';
            }
        }
    }

    for(let i = 0; i < newsArr.length;i++){
        currentMainNews = newsArr[i];
        mainNewsId.innerText = currentMainNews.id;
        mainNewsImage.innerText = currentMainNews.image;
        mainNewsTitle.innerText = currentMainNews.title;
        mainNewsDescription.innerText = currentMainNews.description;
    }

    tr.appendChild(mainNewsId);
    tr.appendChild(mainNewsImage);
    tr.appendChild(mainNewsTitle);
    tr.appendChild(mainNewsDescription);
    tr.appendChild(btnDeleteMN);
    statisticMN.appendChild(tr);
}


// FrontPage show the news
function displayMainNews(){

    let theImg = document.getElementById('jumboImgUrl');
    let theTitle = document.getElementById('jumboTitle');
    let theDescription = document.getElementById('jumboDescription');

    for(let i = 0; i < newsArr.length; i ++){
        currentNews = newsArr[i];
    }
    theImg.src = currentNews.image;
    theTitle.innerHTML = currentNews.title;
    theDescription.innerText = currentNews.description;

}


// Notification
function notify2(newsTitle){
    let title = document.getElementById('notifyContent');
    title.innerText = `MainNews \'${newsTitle}\' is successfully created!`;

    let header = document.getElementById('notifyHeader');
    header.innerHTML = `Success <i class="fas fa-check"></i> `;

    setTimeout(function(){
        document.getElementById('notification').style.display = 'block'
  
    }, 500);
    
    setTimeout(function(){
        document.getElementById('notification').style.display = 'none'
    }, 6000);
  }
  