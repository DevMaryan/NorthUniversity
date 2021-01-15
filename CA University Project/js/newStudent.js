// Array of new students
let students = [];

// Object Student
function Student(id, name, surname, email, address, city, country, zipcode, phone){
    this.id = id,
    this.name = name,
    this.surname = surname,
    this.email = email,
    this.address = address,
    this.city = city,
    this.country = country,
    this.zipcode = zipcode,
    this.phone = phone
}

// Generate RANDOM ID for student
function generateRandomId(){
    let max = 0;
    for(let i = 0; i < students.length; i++){
        if(students[i].id > max){
            max = students[i].id;
        }
    }
    return max + 1;
}
// Counter overview Students
function overViewNSCounter(){
    let NewStudentCounter = document.getElementById('NewStudentCounter');
    NewStudentCounter.innerHTML = students.length; 
    CountNS = students.length; 
}

// Button Submit Application
let btnSubmitStudent = document.getElementById('btnSubmitStudent');
btnSubmitStudent.addEventListener('click', function(){
    submitStudent();
    updateNewStudents();
    updateStatistics();   
    inputDisable();
    
})

// Add new Student into Array
function submitStudent(){
    // Get the data from the input fields
    let studentId = generateRandomId();
    let studentName = document.getElementById('userName');
    let studentSurname = document.getElementById('userSurname');
    let studentAddress = document.getElementById('userAddress');
    let studentCity = document.getElementById('userCity');
    let studentEmail = document.getElementById('userEmail');
    let studentCountry = document.getElementById('userCountry');
    let studentZip = document.getElementById('zipC');
    let studentPh = document.getElementById('phone');

    let newStudent = new Student(studentId, studentName.value, studentSurname.value, studentEmail.value, studentAddress.value, studentCity.value, studentCountry.value, studentZip.value, studentPh.value)
    students.push(newStudent); // Add new student into the array
    studentName.value = '';
    studentSurname.value = '';
    studentAddress.value = '';
    studentCity.value = '';
    studentEmail.value = '';
    studentCountry.value = 'Macedonia';
    studentZip.value = '';
    studentPh.value = '';
}

// Table display Students Array
function updateNewStudents(){
    let statisticNS = document.getElementById('statisticNS');
    let tr = document.createElement('tr');
    let studentId = document.createElement('td');
    let studentName = document.createElement('td');
    let studentSurname = document.createElement('td');
    let studentEmail = document.createElement('td');
    let studentAddress = document.createElement('td');
    let studentCity = document.createElement('td');
    let studentCountry = document.createElement('td');
    let studentZipcode = document.createElement('td');
    let studentPhone = document.createElement('td');
    let studentDelete = document.createElement('button');
    studentDelete.id = 'btnDeleteStudent';
    studentDelete.innerText = 'x';
    studentDelete.onclick = function(e){
        const tr = e.target.parentElement;
        tr.style.display = 'none';
        for(let j = 0; j < students.length; j++){
            if(id == students[j].id){
                students.splice(j);
                studentName.innerText = '';
                studentSurname.innerText = '';
                studentEmail.innerText = '';
                studentAddress.innerText = '';
                studentCity.innerText = '';
                studentCountry.innerText = '';
                studentZipcode.innerText = '';
                studentPhone.innerText = '';
                btnDelete.style.display = 'none';
            }
        }
    }

    for(let i = 0; i < students.length; i++){
        currentStudent = students[i];
        studentId.innerText = currentStudent.id;
        studentName.innerText = currentStudent.name;
        studentSurname.innerText = currentStudent.surname;
        studentEmail.innerText = currentStudent.email;
        studentAddress.innerText = currentStudent.address;
        studentCity.innerText = currentStudent.city;
        studentCountry.innerText = currentStudent.country;
        studentZipcode.innerText = currentStudent.zipcode;
        studentPhone.innerText = currentStudent.phone;
    }

    // Display the Array Raws
    tr.appendChild(studentId);
    tr.appendChild(studentName);
    tr.appendChild(studentSurname);
    tr.appendChild(studentEmail);
    tr.appendChild(studentAddress);
    tr.appendChild(studentCity);
    tr.appendChild(studentCountry);
    tr.appendChild(studentZipcode);
    tr.appendChild(studentPhone);
    tr.appendChild(studentDelete);
    statisticNS.append(tr);

}

// Fields Disable
function inputDisable(){
    document.getElementById('userName').disabled = true;
    document.getElementById('userSurname').disabled = true;
    document.getElementById('userAddress').disabled = true;
    document.getElementById('userCity').disabled = true;
    document.getElementById('userEmail').disabled = true;
    document.getElementById('userCountry').disabled = true;
    document.getElementById('zipC').disabled = true;
    document.getElementById('phone').disabled = true;
    let btnSubmitStudent = document.getElementById('btnSubmitStudent');
    btnSubmitStudent.style.display = 'none';

    let infoSubmitted = document.getElementById('infoSubmitted');
    infoSubmitted.style.display = 'block';

    courseGrade1 = document.getElementById('courseGrade1').disabled = true;
    courseName1 = document.getElementById('courseName1').disabled = true;
    courseGrade2 = document.getElementById('courseGrade2').disabled = true;
    courseName2 = document.getElementById('courseName2').disabled = true;
    courseGrade3 = document.getElementById('courseGrade3').disabled = true;
    courseName3 = document.getElementById('courseName3').disabled = true;
    courseGrade4 = document.getElementById('courseGrade4').disabled = true;
    courseName4 = document.getElementById('courseName4').disabled = true;
    courseGrade5 = document.getElementById('courseGrade5').disabled = true;
    courseName5 = document.getElementById('courseName5').disabled = true;
}