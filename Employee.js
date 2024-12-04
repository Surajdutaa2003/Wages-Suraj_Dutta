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

let workType = Math.floor(Math.random() * 3);  // Randomly choose: 0, 1, or 2

let dailyWage;

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
