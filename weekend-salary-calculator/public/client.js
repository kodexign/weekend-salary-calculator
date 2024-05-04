console.log('hello world');
let newEmployee =[];

function submitForm(event) {
    console.log('submitForm');
    // Stop the page from refreshing
    event.preventDefault();

    let firstName= document.querySelector('#first-name');
    console.log('first name',firstName);
    let lastName= document.querySelector('#last-name');
    console.log('last name',lastName);
    let idNumber= document.querySelector('#id-number').value;
    console.log('id number',idNumber);
    let jobTitle= document.querySelector('#jobTitle');
    console.log('title',jobTitle);
    let salary= document.querySelector('#salary').value;
    console.log('salary',salary);

    let employeeTable = document.querySelector('#employeeData');
 
    employeeTable.innerHTML += `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>${salary}</td>
            <td><button onClick = "deleteRow(event)">Delete</button></td>
        </tr>
    `;
 


}
function deleteRow(event){
    event.target.parentElement.parentElement.remove();
}