//To generate the grade.
function gradeGenerator(grade){
if (grade > 79){
    return 'A';
}
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
}
gradeGenerator(74)