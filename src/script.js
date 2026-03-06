const employees = [
  { id: "EMP001", name: "Angela" },
  { id: "EMP002", name: "John" },
  { id: "EMP003", name: "Sarah" }
];

let attendance = [];
let redList = [];


const inputElement = document.getElementById("employee-id");
const clockInButton = document.getElementById("clock-in-btn");

clockInButton.addEventListener("click", clockInUser);

function  clockInButton (){
    let employeeId = inputElement.value; 

    if (employeeId == "") {
        alert("please enter your ID")
    }
    else {
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes;

        let startHour = 8;
        let startMinute = 0;

        if hours 

    }


}
