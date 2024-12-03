// UC4 - Calculate Monthly Wage Assuming 20 Working Days

const PART_TIME = 1;
const FULL_TIME = 2;
const NO_TIME = 0;
const HOURLY_WAGE = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WORKING_DAYS = 20;

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

console.log(`\nTotal Monthly Wage for 20 Working Days: $${totalWage}`);
