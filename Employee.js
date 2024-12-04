// UC1 - Check if Employee is Present or Absent

const IS_PRESENT = 1;  // Employee is present
const IS_ABSENT = 0;   // Employee is absent

let employeeStatus = Math.floor(Math.random() * 2);  // Random value: 0 (absent) or 1 (present)

if (employeeStatus === IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}
