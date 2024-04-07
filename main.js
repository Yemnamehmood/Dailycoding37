"use strict";
//DAY 37
//TASK 1 (Checks current hour) using if statement
let currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning"); //Result Good Morning because it has printed before 12 PM
}
//It simple checks and help us to greet users based on the time of the day.
//TASK 2 (Assign Grading) using if/else statemetns 
function assignGrade(score) {
    if (score >= 100) {
        return "A+";
    }
    else if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(assignGrade(75)); //RESULT "C"
console.log(assignGrade(30)); //RESULT "F"
//It simply assings grades using if else statements 
//TASK 3 (Categorizing Person's age/group) using function and if/else statement 
//sign using <= it means "person age is less than or equal to" and "else" is representing rest of ages.
function categorizeAge(age) {
    if (age < 13) {
        return " You are Child";
    }
    else if (age <= 19) {
        return "You are Teenager";
    }
    else {
        return "You are an Adult";
    }
}
console.log(categorizeAge(20)); //RESULT You are an Adult
console.log(categorizeAge(18)); //RESULT You are Teenager
console.log(categorizeAge(48)); //RESULT You are an Adult
console.log(categorizeAge(8)); //RESULT You are Child 
//It simply checks all ages of group using else if statements.
