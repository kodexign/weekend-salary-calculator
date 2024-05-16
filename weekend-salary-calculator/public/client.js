console.log('hello world');
let employeeSalary = [];
let sum = 0;
let max = 20000;

function submitForm(event) {
    console.log('submitForm');
    // Stop the page from refreshing
    event.preventDefault();

    //find inout field and assign to value in variable
    let firstName= document.querySelector('#first').value;
    let lastName= document.querySelector('#last').value;
    let idNumber= document.querySelector('#idNum').value;
    let jobTitle= document.querySelector('#title').value;
    let salary= document.querySelector('#compensation').value;

    
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
console.log('input cleared after submit');

 employeeSalary.push(salary);

//delete row button
function deleteRow(event){
    event.target.parentElement.parentElement.remove();
}

//calculate monthly
function totalMonthly(){
    for (let i = 0; i < employeeSalary.length; i++){
        sum += Number(employeeSalary[i]);
    }
   console.log('total sum:',sum);

   monthlySum = Math.floor(sum / 12);
   let monthly = document.querySelector('#total');
   monthly.innerHTML = sum;
}

//overbudget
function overbudget(){
    if(totalMonthly > 20000){
    let over = document.querySelector('#total');
    over.classList.add('over-budget');
}
}

};
