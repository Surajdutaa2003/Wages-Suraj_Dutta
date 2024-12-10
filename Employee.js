// Constants
const IS_PRESENT = 1;  // Employee is present
const IS_ABSENT = 0;   // Employee is absent
const PART_TIME = 1;   // Part-Time
const FULL_TIME = 2;   // Full-Time
const NO_TIME = 0;     // No Work
const HOURLY_WAGE = 20;  // Hourly Wage
const PART_TIME_HOURS = 4;  // Part-time work hours
const FULL_TIME_HOURS = 8;  // Full-time work hours

// Function to check if the employee is present
function performWorkTasks(employeeStatus) {
    return employeeStatus === IS_PRESENT;
}

// Function to calculate daily wage based on work type
function calculateDailyWage(workType) {
    let dailyWage = 0;

    switch (workType) {
        case PART_TIME:
            dailyWage = PART_TIME_HOURS * HOURLY_WAGE;
            console.log(`UC2: Part Time: Worked ${PART_TIME_HOURS} hours, Daily Wage: $${dailyWage}`);
            break;
        case FULL_TIME:
            dailyWage = FULL_TIME_HOURS * HOURLY_WAGE;
            console.log(`UC2: Full Time: Worked ${FULL_TIME_HOURS} hours, Daily Wage: $${dailyWage}`);
            break;
        case NO_TIME:
            console.log("UC2: No Work: Employee is present but not done any work today");
            break;
        default:
            console.log("UC2: Invalid input");
    }

    return dailyWage;
}

// Main Execution
let employeeStatus = Math.floor(Math.random() * 2); // Randomly decide if employee is present or absent

// UC1: Check if employee is present once at the start
if (performWorkTasks(employeeStatus)) {
    console.log("UC1: Employee is Present");

    let workType = Math.floor(Math.random() * 3); // Randomly decide work type for UC2

    // UC2: Calculate daily wage
    calculateDailyWage(workType);

} else {
    console.log("UC1: Employee is Absent. No work performed today.");
}
