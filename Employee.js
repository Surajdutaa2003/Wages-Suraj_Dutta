// Constants
const IS_PRESENT = 1;  // Employee is present
const IS_ABSENT = 0;   // Employee is absent
const PART_TIME = 1;   // Part-Time
const FULL_TIME = 2;   // Full-Time
const NO_TIME = 0;     // No Work
const HOURLY_WAGE = 20;  // Hourly Wage
const PART_TIME_HOURS = 4;  // Part-time work hours
const FULL_TIME_HOURS = 8;  // Full-time work hours
const WORKING_DAYS = 20;  // Assuming 20 working days in a month

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

// Function to get work hours based on work type
function getWorkHours(workType) {
    switch (workType) {
        case PART_TIME:
            return PART_TIME_HOURS; // Part-time
        case FULL_TIME:
            return FULL_TIME_HOURS; // Full-time
        case NO_TIME:
            return 0; // No work
        default:
            return 0;
    }
}

// Function to calculate monthly wage without max hours constraint (UC4)
function calculateMonthlyWage() {
    let totalWage = 0;
    let accumulatedHoursWorked = 0;

    for (let day = 1; day <= WORKING_DAYS; day++) {
        let employeeStatus = Math.floor(Math.random() * 2); // Randomly present or absent

        console.log(`Employee Status for Day ${day}: ${employeeStatus === IS_PRESENT ? "Present" : "Absent"}`); // Debugging line

        if (performWorkTasks(employeeStatus)) {
            let workType = Math.floor(Math.random() * 3); // Randomly choose: 0, 1, or 2
            let hoursWorked = getWorkHours(workType);
            let dailyWage = hoursWorked * HOURLY_WAGE;
            totalWage += dailyWage;
            accumulatedHoursWorked += hoursWorked;

            console.log(
                `Day ${day}: Worked ${hoursWorked} hours, Daily Wage: $${dailyWage}, Accumulated Wage: $${totalWage}, Accumulated Hours: ${accumulatedHoursWorked}`
            );
        } else {
            console.log(`Day ${day}: Absent, Accumulated Wage: $${totalWage}, Accumulated Hours: ${accumulatedHoursWorked}`);
        }
    }

    console.log(`\nUC4: Total Monthly Wage: $${totalWage
