// UC1 - Check if Employee is Present or Absent
const IS_PRESENT = 1;  // Employee is present
const IS_ABSENT = 0;   // Employee is absent

let employeeStatus = Math.floor(Math.random() * 2);  // Random value: 0 (absent) or 1 (present)

if (employeeStatus === IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}

// UC2 - Calculate Daily Wage based on Part-Time or Full-Time work

const PART_TIME = 1;  // Part-Time
const FULL_TIME = 2;  // Full-Time
const NO_TIME = 0;    // No Time
const HOURLY_WAGE = 20;  // Hourly Wage
const PART_TIME_HOURS = 4;  // Part-time work hours
const FULL_TIME_HOURS = 8;  // Full-time work hours

let dailyWage = 0;
if (employeeStatus === IS_PRESENT) {
    let workType = Math.floor(Math.random() * 3);  // Randomly choose: 0, 1, or 2
    switch (workType) {
        case PART_TIME:
            dailyWage = PART_TIME_HOURS * HOURLY_WAGE;
            console.log(`Part Time: Worked ${PART_TIME_HOURS} hours, Daily Wage: $${dailyWage}`);
            break;
        case FULL_TIME:
            dailyWage = FULL_TIME_HOURS * HOURLY_WAGE;
            console.log(`Full Time: Worked ${FULL_TIME_HOURS} hours, Daily Wage: $${dailyWage}`);
            break;
        case NO_TIME:
            dailyWage = 0;
            console.log("No Work: Employee is absent today");
            break;
        default:
            console.log("Invalid input");
    }
}

// UC3 - Refactor to Write a Function to Get Work Hours

// Function to get work hours
function getWorkHours() {
    let workType = Math.floor(Math.random() * 3);  // Randomly choose: 0, 1, or 2
    switch (workType) {
        case PART_TIME:
            return PART_TIME_HOURS;  // Part-time
        case FULL_TIME:
            return FULL_TIME_HOURS;  // Full-time
        case NO_TIME:
            return 0;  // No work
        default:
            return 0;
    }
}

if (employeeStatus === IS_PRESENT) {
    let hoursWorked = getWorkHours();
    dailyWage = hoursWorked * HOURLY_WAGE;

    if (hoursWorked === 0) {
        console.log("No Work: Employee is absent today");
    } else {
        console.log(`Worked ${hoursWorked} hours, Daily Wage: $${dailyWage}`);
    }
} else {
    console.log("Employee is Absent");
}

const hoursWorked = getWorkHours();
dailyWage = hoursWorked * HOURLY_WAGE;

if (hoursWorked === 0) {
    console.log("No Work: Employee is absent today");
} else {
    console.log(`Worked ${hoursWorked} hours, Daily Wage: $${dailyWage}`);
}

/*HOURLY_WAGE = 20;
PART_TIME_HOURS = 4;
FULL_TIME_HOURS = 8;*/

const WORKING_DAYS = 20; // For UC4
const MAX_HOURS = 160;   // For UC5
const MAX_DAYS = 20;     // For UC5

// Function to determine work hours
function getWorkHours() {
    let workType = Math.floor(Math.random() * 3); // Randomly choose 0, 1, or 2
    switch (workType) {
        case 1: return PART_TIME_HOURS; // Part-time
        case 2: return FULL_TIME_HOURS; // Full-time
        default: return 0;              // Absent
    }
}

// UC4 - Calculate Monthly Wage Assuming 20 Working Days
console.log("UC4: Monthly Wage Calculation for 20 Days");
let totalWage = 0;

for (let day = 1; day <= WORKING_DAYS; day++) {
    const hoursWorked = getWorkHours();
    let dailyWage = hoursWorked * HOURLY_WAGE;
    totalWage += dailyWage;
    if (hoursWorked === 0) {
        console.log(`Day ${day}: Absent`);
    } else {
        console.log(`Day ${day}: Worked ${hoursWorked} hours, Daily Wage: $${dailyWage}`);
    }
}

console.log(`\nTotal Monthly Wage for 20 Working Days: $${totalWage}\n`);


