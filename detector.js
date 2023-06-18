// Declaring the speed limit
const speedLimit = 70;

// Declaring the points for demerits
const pointsPerDemerit = 1;

// To detect speed
function speedDetector(speed){
    if(speed < speedLimit){
        return 'OK';
    }
    else{
        return DemeritCalculator(speed);
    }
}

// For calculating points due to demerit
function DemeritCalculator(speed){
    const points = Math.floor((speed - speedLimit) / 5) * pointsPerDemerit;
    if(speed > speedLimit){
        return points;
    }
}
function pointCalculator(points){
    if(points > 12){
        return "License Suspended";
    }
}
