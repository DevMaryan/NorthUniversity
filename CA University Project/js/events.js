// Events array
let eventsArr = [];

// Object of EVENTS
function Event(id, day, month, description){
    this.id = id,
    this.day = day,
    this.month = month,
    this.description = description
}

// Generate RANDOM ID for events
function generateRandomIdEvents(){
    let max = 0;
    for(let i = 0; i < eventsArr.length; i++){
        if(eventsArr[i].id > max){
            max = eventsArr[i].id;
        }
    }
    return max + 1;
}
// Counter overview Events
function overViewEventsCounter(){
    let eventsCounter = document.getElementById('eventsCounter');
    eventsCounter.innerHTML = eventsArr.length; 
    CountEv = eventsArr.length; 
}

// Add Event button listener
let btnAddEvent = document.getElementById('btnAddEvent');
btnAddEvent.addEventListener('click', function(){
    addEvent();
    backendEventsData();
    displayEvents();
    updateStatistics();
    drawChart(CountNL, CountNS, CountEv, CountMN , CountMNN);
    for(let i = 0; i< eventsArr.length;i++){
        curentEvent = eventsArr[i].description;
    }
    notifyEvent(curentEvent);
})


// Function Add Event
function addEvent(){
    let eventID = generateRandomIdEvents();
    let eventDay = document.getElementById('eventDay');
    let eventMonth = document.getElementById('eventMonth');
    let eventDescr = document.getElementById('eventDescription');

    let newEvent = new Event(eventID, eventDay.value, eventMonth.value, eventDescr.value);
    eventsArr.push(newEvent); // Add new Event to the array
    eventDay.value = '';
    eventMonth.value = '';
    eventDescr.value = '';
}

// Function to Display the events
function displayEvents(){
    let allEventsEl = document.getElementById('allEvents');

    let theEventDiv = document.createElement('div');
    theEventDiv.id = 'event';
    theEventDiv.classList.add('event')

    let eventDateDiv = document.createElement('div');
    eventDateDiv.classList.add('event-date');

    let eventDayh4 = document.createElement('h4');
    eventDayh4.classList.add('date-helper');
    
    let eventDateLine = document.createElement('div');
    eventDateLine.classList.add('event-line');

    let eventMonthh4 = document.createElement('h4');
    eventMonthh4.classList.add('date-month');
    
    let eventDivParag = document.createElement('div');
    eventDivParag.classList.add('paragrah');

    let eventParag = document.createElement('p');
    eventParag.id = 'eventParag';
    eventParag.classList.add('event-text')

    for(let i = 0; i < eventsArr.length; i++){
        currentEvent = eventsArr[i];
        eventDayh4.innerText = currentEvent.day;
        eventMonthh4.innerText = currentEvent.month;
        eventParag.innerText = currentEvent.description;
    }

    eventDateDiv.appendChild(eventDayh4)
    eventDateDiv.appendChild(eventDateLine)
    eventDateDiv.appendChild(eventMonthh4)
    eventDivParag.appendChild(eventParag) // div class parag + P 
    theEventDiv.appendChild(eventDateDiv); // Event Div + even-date
    theEventDiv.appendChild(eventDivParag); // Event DIV + Div parag
    allEventsEl.appendChild(theEventDiv); // Main DIv



}

// Backend Table DATA
function backendEventsData(){
    let tableEvents = document.getElementById('tableevents');
    let tr = document.createElement('tr');
    let eventId = document.createElement('td');
    let eventDay = document.createElement('td');
    let eventMonth = document.createElement('td');
    let eventDescription = document.createElement('td');
    let eventDelete = document.createElement('button');
    eventDelete.id = 'btnDeleteEvent';
    eventDelete.innerText = 'x';
    eventDelete.onclick = function(e){
        const tr = e.target.parentElement;
        tr.style.display = 'none';
        for(let j = 0; j < eventsArr.length; j++){
            if(id == eventsArr[j].id){
                eventsArr.splice(j);
                eventId.innerText = '';
                eventDay.innerText = '';
                eventMonth.innerText = '';
                eventDescription.innerText = '';
                eventDelete.style.display = 'none';
            }
        }
    }

    for(let i = 0; i < eventsArr.length; i++){
        currentEvent = eventsArr[i];
        eventId.innerText = currentEvent.id;
        eventDay.innerText = currentEvent.day;
        eventMonth.innerText = currentEvent.month;
        eventDescription.innerText = currentEvent.description;
    }
    tr.appendChild(eventId);
    tr.appendChild(eventDay);
    tr.appendChild(eventMonth);
    tr.appendChild(eventDescription);
    tr.appendChild(eventDelete);
    tableEvents.appendChild(tr);
}


// Notification
function notifyEvent(curentEvent){
    let title = document.getElementById('notifyContent');
    title.innerText = `Event \'${curentEvent}\' is successfully created!`;

    let header = document.getElementById('notifyHeader');
    header.innerHTML = `Success <i class="fas fa-check"></i> `;

    setTimeout(function(){
        document.getElementById('notification').style.display = 'block'
  
    }, 500);
    
    setTimeout(function(){
        document.getElementById('notification').style.display = 'none'
    }, 6000);
  }
  