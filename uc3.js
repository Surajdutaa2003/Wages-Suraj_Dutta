// UC3 - Refactor to Write a Function to Get Work Hours

const PART_TIME = 1;
const FULL_TIME = 2;
const NO_TIME = 0;
const HOURLY_WAGE = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;

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

const hoursWorked = getWorkHours();
let dailyWage = hoursWorked * HOURLY_WAGE;

if (hoursWorked === 0) {
    console.log("No Work: Employee is absent today");
} else {
    console.log(`Worked ${hoursWorked} hours, Daily Wage: $${dailyWage}`);
}
