// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

let nwCounter;
function countNewsletters(nwCounter){
    for(let i = 0; i < newslettersArr.length; i++){
        nwCounter = newslettersArr.length;
    }
}
// Draw the chart and set the chart values
function drawChart(CountNL,CountNS,CountEv,CountMN,CountMNN) {
    var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Newsletters', CountNL],
    ['New Students', CountNS],
    ['Events', CountEv],
    ['Main News', CountMN],
    ['Mini News', CountMNN]
]);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'North University Statistics', 'width':550, 'height':400};

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

