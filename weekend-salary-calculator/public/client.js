console.log('hello world');
let newEmployee =[];
let max = 20000;

function submitForm(event) {
    console.log('submitForm');
    // Stop the page from refreshing
    event.preventDefault();
    //find inout field and assign to value in variable
    let firstName= document.querySelector('#first').value;
    console.log('first name:', firstName);
    let lastName= document.querySelector('#last').value;
    console.log('last name', lastName);
    let idNumber= document.querySelector('#idNum').value;
    console.log('id number:', idNumber);
    let jobTitle= document.querySelector('#title').value;
    console.log('title', jobTitle);
    let salary= document.querySelector('#compensation').value;
    console.log('salary:', salary);

    
    //find tbody and append
    let employeeTable = document.querySelector('#employee-data');
 
    employeeTable.innerHTML += `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>${salary}</td>
            <td><button onClick = "deleteRow(event)">Delete</button></td>
        </tr>
    `
    ;
//clear input
first.value = "";
last.value = "";
idNum.value = "";
title.value = "";
compensation.value = "";
}


function deleteRow(event){
    event.target.parentElement.parentElement.remove();
}