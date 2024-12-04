// UC5 - Calculate Wages Until Total Working Hours of 160 or Max Days of 20 is Reached

const PART_TIME = 1;
const FULL_TIME = 2;
const NO_TIME = 0;
const HOURLY_WAGE = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const MAX_HOURS_IN_MONTH = 160;  // Max working hours in a month
const MAX_DAYS_IN_MONTH = 20;    // Max working days in a month

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

let totalWage = 0;
let totalHours = 0;
let totalDays = 0;

while (totalHours < MAX_HOURS_IN_MONTH && totalDays < MAX_DAYS_IN_MONTH) {
    totalDays++;
    const hoursWorked = getWorkHours();
    totalHours += hoursWorked;
    let dailyWage = hoursWorked * HOURLY_WAGE;
    totalWage += dailyWage;

    if (hoursWorked === 0) {
        console.log(`Day ${totalDays}: Absent`);
    } else {
        console.log(`Day ${totalDays}: Worked ${hoursWorked} hours, Daily Wage: $${dailyWage}`);
    }

    if (totalHours >= MAX_HOURS_IN_MONTH || totalDays >= MAX_DAYS_IN_MONTH) {
        break;
    }
}

console.log(`\nTotal Monthly Wage for ${totalDays} Working Days: $${totalWage}`);
