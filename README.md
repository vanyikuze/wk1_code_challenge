# wk1_code_challenge

# Author
[Vany Karake](https://github.com/vanyikuze)

## Objectives
To solve the 3 challenges:
Challenge 1: Student Grade Generator
Challenge 2: Speed Detector
Challenge 3: Net Salary Calculator

## Introduction
I was recently challenged to solve the above challenges.
This are the codes I came up with to solve the challenges.

## Challenge 1
This challenge was to create a grade generator that would grade students according to the marks they got.
First, I called the function gradeGenerator and added the parameter 'grade'.
   function gradeGenerator(grade)

I then stated a conditional, 'if', and indicated the grades within the range given and what it should return once called.
    if (grade > 79){
    return 'A';
}

I continued to state the rest of the conditionals and what they should return.
else if(grade => 60 && grade <= 79){
    return 'B';
}
else if(grade => 49 && grade <= 59){
    return 'C';
}
else if(grade => 40 && grade <= 49){
    return 'D';
}
else{
    return 'E';
}

## Challenge 2
This challenge was to write a program that takes as input the speed of a car and the prints the necessary respond depending on the speed limit.
so first, I declared a constant of the speed limit and the points allocated per demerit.
I then called a function that detects speed and returns OK or return the demerit calculator.
Then I called a function that calculates the speed; if its greater than the speed limit, it returns the points allocated.
After this, I called a function that gives the instructions to suspend the license if the points exceed 12.

const speedLimit = 70;
const pointsPerDemerit = 1;

function speedDetector(speed){
    if(speed < speedLimit){
        return 'OK'
    }
    else{
        return DemeritCalculator(speed);
    }
}

function DemeritCalculator(speed){
    const points = Math.floor((speed - speedLimit) / 5) * pointsPerDemerit;
    if(speed > speedLimit){
        return points;
    }
}
function pointCalculator(points){
    if(points > 12){
        return "License Suspended"
    }
}

## Challenge 3
This challenge was to write a program whose major task is to calculate an individual's net salary by getting the inputs of basic salary and benefits.
I called a function for the gross salary with the parameters: salary and benefits, which should return salary plus benefits.
I then called a function to calculate taxable income with the parameters: taxpayable and rate.So, if taxPayable is less than or equal to 288,000, then it should return the tax payable multiplied by rate. Else if, the tax payable is greater than 288,000 and less than or equal to to 388,000, then it should return the tax payable multiplied by rate. If anything else, then it should return tax payable multiplied by rate.
Declare a constant of relief which is equal to 28,800 and a constant of payee which is taxable income with the parameter of tax payable and rate all minus relief. Then console.log the parameter payee.
Call a function for calculating NSSF with the parameter function.So if pension is less than or equal to 6000 then it should return 'Tier 1', else if pension is greater than 6000 or and less than 18000, then it should return 'Tier 2'.

// For calculating gross salary
function grossSalary(salary, benefits){
    return salary + benefits;
}
 // For calculating taxable income
 function taxableIncome(taxPayable, rate){
    if(taxPayable <= 288_000){
        return taxPayable * rate;
} else if(taxPayable > 288_000 && taxPayable <= 388_000){
    return taxPayable * rate;
} else{
    return taxPayable * rate;
}
}

// For calculating the payee
const relief = 28_800;
const payee = taxableIncome(taxPayable, rate) - relief;
console.log(payee);

// For calculating NSSF
function calculateNSSF(pension){
    if(pension <= 6_000){
        return "Tier 1";
}   else if(pension > 6_000 && pension < 18_000){
    return "Tier 2";
}
}


Call a function calculating NHIF with a parameter of salary. If the salary is in a certain range then it should return a certain figure, like so:

// For calculating NHIF
function calculatingNHIF(salary){
    if(salary <= 5_999){
        return 150;
}   else if(salary => 6_000 && salary <= 7_999){
    return 300;
}   else if(salary => 8_000 && salary <= 11_999){
    return 400;
}   else if(salary => 12_000 && salary <= 14_999){
    return 500;
}   else if(salary => 15_000 && salary <= 19_999){
    return 600;
}   else if(salary => 20_000 && salary <= 24_999){
    return 750;
}   else if(salary => 25_000 && salary <= 29_999){
    return 850;
}   else if(salary => 30_000 && salary <= 34_999){
    return 900;
}   else if(salary => 35_000 && salary <= 39_999){
    return 950;
}   else if(salary => 40_000 && salary <= 44_999){
    return 1_000;
}   else if(salary => 45_000 && salary <= 49_999){
    return 1_100;
}   else if(salary => 50_000 && salary <= 59_999){
    return 1_200;
}   else if(salary => 60_000 && salary <= 69_999){
    return 1_300;
}   else if(salary => 70_000 && salary <= 79_999){
    return 1_400;
}   else if(salary => 80_000 && salary <= 89_999){
    return 1_500;
}   else if(salary => 90_000 && salary <= 99_999){
    return 1_600;
}   else{
    return 1_700;
}   
}

Declare a constant of NSSF that has the parameter of salary.
Declare a constant of NHIF that has a parameter of salary.
declare a constant of net salary which is equal to gross salary with the parameters of salary and benefits subtract payee plus nhif plus nssf.
