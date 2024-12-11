// Constants
const IS_PRESENT = 1;  // Employee is present
const IS_ABSENT = 0;   // Employee is absent

// Function to check if the employee is present
function performWorkTasks(employeeStatus) {
    return employeeStatus === IS_PRESENT;
}

// Main Execution
let employeeStatus = Math.floor(Math.random() * 2); 
// Randomly decide if employee is present or absent

// UC1: Check if employee is present once at the start
if (performWorkTasks(employeeStatus)) {
    console.log("UC1: Employee is Present");
} else {
    console.log("UC1: Employee is Absent. No work performed today.");
}
