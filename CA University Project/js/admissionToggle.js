
const btnShowAdmissionApp = document.getElementById('btn-gpa-calculate');
btnShowAdmissionApp.addEventListener('click', function(){

    let theResult = gpa();
    
    if(theResult <= 19){
        console.log('fail')
        let criteriaNot = document.getElementById('criteriaNot');
        criteriaNot.classList.remove('hide');
        let criteriaOK = document.getElementById('criteriaOk');
        criteriaOK.classList.add('hide');
        document.getElementById('admission-application').style.display = 'none';
    }else if(theResult >= 20){
        console.log('pass')


        let criteriaOK = document.getElementById('criteriaOk');
        criteriaOK.classList.remove('hide');
        criteriaNot.classList.add('hide');
        document.getElementById('admission-banner').style.display = 'none';
        document.getElementById('admission-application').style.display = 'block';
    }else{
        console.log('invalid input');
    }
})

function gpa(){
    let allValues = document.getElementsByName('value');
    let result = 0;
    for(let i = 0; i < allValues.length; i++){
        if(parseInt(allValues[i].value)){
            result += parseInt(allValues[i].value);
        }
    }
    console.log(result);
    return result;
}   

