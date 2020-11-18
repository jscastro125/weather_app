const weekdays=new Array(7);
weekdays[1]="Monday";
weekdays[2]="Tuesday";
weekdays[3]="Wednesday";
weekdays[4]="Thursday";
weekdays[5]="Friday";
weekdays[6]="Saturday";
weekdays[7]="Sunday";

export const getDayName = (nDayNumber) => weekdays[nDayNumber];

export const chanceOfRain = (pressure, temperature, amount) => {
    const score = Math.log(amount + 1) * Math.log(pressure - 929)  * Math.log(temperature-9);
    const mean = Math.min(Math.max(score, 0), 100)
    const upperBound = Math.min(1.5 * mean, 100);
    const lowerBound = Math.max(0.5 * mean, 0);
    return [lowerBound, mean, upperBound];
};
