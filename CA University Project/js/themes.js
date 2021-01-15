// Show themes
let pickTheme = document.getElementById('pickTheme');
pickTheme.addEventListener('click',function(){
    let chooseColor = document.getElementById('chooseColor');
    if(chooseColor.style.display === 'none'){
        chooseColor.style.display = 'block';
    }else{
        chooseColor.style.display = 'none';
    }
})

// Pick Purple Theme
let clr1 = document.getElementById('clr1');
clr1.onclick = purple;

function purple(){
    document.documentElement.style.setProperty('--blue-background-color', '#3c1361');
    document.documentElement.style.setProperty('--blue4-background-color', '#52307C');
    document.documentElement.style.setProperty('--blue2-background-color', '#663a82');
    document.documentElement.style.setProperty('--bg-background', 'linear-gradient(180deg, rgb(75, 0, 98) 0%, rgb(83, 11, 105) 100%)');
    document.documentElement.style.setProperty('--blue3-background-color', '#7c5295');
    document.documentElement.style.setProperty('--bg2-background', 'linear-gradient(180deg, rgb(75, 0, 98) 0%, rgb(83, 11, 105) 100%)');
    document.documentElement.style.setProperty('--box-shadow4', '0 20px 20px 0 rgba(39, 14, 56, 0.6)');
    document.documentElement.style.setProperty('--blue5-background-color', '#62307C');
    document.documentElement.style.setProperty('--blue6-background-color', '#62307C');
}

// Pick Red Theme
let clr2 = document.getElementById('clr2');
clr2.onclick = red;
function red(){
    document.documentElement.style.setProperty('--blue-background-color', '#5F021F');
    document.documentElement.style.setProperty('--blue4-background-color', '#2c040c');
    document.documentElement.style.setProperty('--blue2-background-color', '#420612');
    document.documentElement.style.setProperty('--bg-background', 'linear-gradient(180deg, rgb(44, 10, 10) 0%, rgb(44, 5, 5) 100%');
    document.documentElement.style.setProperty('--blue3-background-color', '#580818');
    document.documentElement.style.setProperty('--bg2-background', 'linear-gradient(180deg, rgb(44, 10, 10) 0%, rgb(44, 5, 5) 100%');
    document.documentElement.style.setProperty('--box-shadow4', '0 20px 20px 0 rgb(44, 10, 10)');
    document.documentElement.style.setProperty('--blue5-background-color', '#2c040c');
    document.documentElement.style.setProperty('--blue6-background-color', '#5F021F');
}


// Pick Defualt Theme
let clr3 = document.getElementById('clr3');
clr3.onclick = defaultColor;

function defaultColor(){
    document.documentElement.style.setProperty('--blue-background-color', '#0849A3');
    document.documentElement.style.setProperty('--blue4-background-color', '#063d8b');
    document.documentElement.style.setProperty('--blue2-background-color', '#003262');
    document.documentElement.style.setProperty('--bg-background', 'linear-gradient(180deg, rgba(0,50,98,1) 0%, rgba(6,61,139,1) 100%');
    document.documentElement.style.setProperty('--blue3-background-color', '#185ec0');
    document.documentElement.style.setProperty('--bg2-background', 'linear-gradient(180deg, rgba(0,50,98,1) 0%, rgba(0,45,88,1) 100%');
    document.documentElement.style.setProperty('--blue5-background-color', '#08243f');
    document.documentElement.style.setProperty('--blue6-background-color', '#185ec0');
    document.documentElement.style.setProperty('--box-shadow4', '0 20px 20px 0 rgba(28, 81, 196, 0.6)');
}



