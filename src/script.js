const scheduledTime = "09:00";

const idInput = document.getElementById("employeeID");
const clockInBtn = document.getElementById("clockInBtn");
const clockOutBtn = document.getElementById("clockOutBtn");
const statusText = document.getElementById("status");
const attendanceTable = document.getElementById("attendanceTable");
const lateList = document.getElementById("lateList");

function getCurrentTime(){

const now = new Date();

const hours = String(now.getHours()).padStart(2,"0");
const minutes = String(now.getMinutes()).padStart(2,"0");

return hours + ":" + minutes;

}

function getWeekNumber(){

const now = new Date();
const start = new Date(now.getFullYear(),0,1);
const diff = now - start;

return Math.floor(diff / (1000*60*60*24*7));

}

function saveRecord(record){

let records = JSON.parse(localStorage.getItem("records")) || [];

records.push(record);

localStorage.setItem("records", JSON.stringify(records));

}

function addRow(record){

const row = document.createElement("tr");

row.innerHTML = `
<td>${record.id}</td>
<td>${record.time}</td>
<td>${record.action}</td>
<td>${record.status}</td>
`;

attendanceTable.appendChild(row);

}

function addLateEmployee(record){

const li = document.createElement("li");

li.textContent = `ID: ${record.id} - ${record.time}`;

lateList.appendChild(li);

}

function clock(action){

const id = idInput.value.trim();

if(id === ""){
alert("Enter employee ID");
return;
}

const time = getCurrentTime();
const week = getWeekNumber();

let status = "On Time";

if(action === "Clock In" && time > scheduledTime){
status = "Late";
}

const record = {
id: id,
time: time,
action: action,
status: status,
week: week
};

saveRecord(record);

addRow(record);

if(status === "Late"){
addLateEmployee(record);
}

statusText.textContent = `${id} ${action} at ${time} (${status})`;

}

clockInBtn.addEventListener("click", function(){
clock("Clock In");
});

clockOutBtn.addEventListener("click", function(){
clock("Clock Out");
});